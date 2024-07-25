/* eslint-disable @typescript-eslint/no-explicit-any */
import IRepository from '@/interface/IRepository'
import { useQuery } from '@tanstack/react-query'
import IStack from '@/interface/IStack'
import axios from 'axios'

const URL = 'https://api.github.com/users/viniciussis/repos#'

const fetchProjects = async (): Promise<IRepository[]> => {
  const { data } = await axios.get(URL)
  return data
    .filter(
      (repo: any) =>
        repo.homepage !== null &&
        repo.name !== 'My_Portfolio' &&
        repo.name !== 'My_GitHub_ReadMe_Stats' &&
        repo.name !== 'Raffle_Friends' &&
        repo.name !== 'URL_Short_API',
    )
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      github: repo.html_url,
      deploy: repo.homepage,
      description: repo.description,
      stack_url: repo.languages_url,
      branch: repo.default_branch,
    }))
}

const fetchStacks = async (urls: string[]): Promise<IStack[]> => {
  const promises = urls.map((url: string) => axios.get(url))
  const response = await Promise.all(promises)
  console.log(response)
  return response.map((response) => ({
    stacks: Object.keys(response.data).slice(0, 3),
  }))
}

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const projects = await fetchProjects()
      const stacksUrl = projects.map((project) => project.stack_url)
      const stacks = await fetchStacks(stacksUrl)

      return projects.map((project, index) => ({
        ...project,
        stacks: stacks[index].stacks,
      }))
    },
  })
}
