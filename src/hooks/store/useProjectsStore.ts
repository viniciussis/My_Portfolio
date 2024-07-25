// src/store/useStore.ts
import IRepository from '@/interface/IRepository'
import { create } from 'zustand'

type ProjectState = {
  repos: IRepository[]
  setRepos: (repos: IRepository[]) => void
}

const useProjects = create<ProjectState>()((set) => ({
  repos: [],
  setRepos: (repos) => set({ repos }),
}))

export default useProjects
