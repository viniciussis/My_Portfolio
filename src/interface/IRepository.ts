export default interface IRepository {
  id: number
  name: string
  stacks?: string[]
  github: string
  deploy: string
  description: string
  stack_url: string
  branch: string
}
