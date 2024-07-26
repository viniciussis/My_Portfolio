export default interface IRepository {
  id: number
  name: string
  demo: string
  github: string
  branch: string
  topics?: string[]
  description: string
}
