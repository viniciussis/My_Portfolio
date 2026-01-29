import { IRepository } from '@/shared/interfaces'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const URL = '/api/projects'

const fetchProjects = async (): Promise<IRepository[]> => {
  const { data } = await axios.get(URL)
  return data
}

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })
}
