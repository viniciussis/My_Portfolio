/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRepository } from '@/shared/interfaces'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const URL = 'https://api.github.com/users/viniciussis/repos#'

const fetchProjects = async (): Promise<IRepository[]> => {
  const { data } = await axios.get(URL)
  return data
    .filter(
      (repo: any) =>
        repo.homepage !== null &&
        repo.name !== 'My_GitHub_ReadMe_Stats' &&
        repo.name !== 'The_News_Streaks' &&
        repo.name !== 'Organo_Project' &&
        repo.name !== 'Raffle_Friends' &&
        repo.name !== 'URL_Short_API' &&
        repo.name !== 'My_Portfolio' &&
        repo.name !== 'QR_Code',
    )
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      demo: repo.homepage,
      topics: repo.topics,
      github: repo.html_url,
      branch: repo.default_branch,
      description: repo.description,
    }))
}

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })
}
