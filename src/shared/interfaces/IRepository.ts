export interface IRepository {
  id: number
  name: string
  demo: string
  github: string
  branch: string
  topics?: string[]
  description: string
  image?: string
  isFeatured?: boolean
  isDraft?: boolean
}
