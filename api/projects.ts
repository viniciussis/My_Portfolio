import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = process.env.VITE_GITHUB_TOKEN

  if (!token) {
    return res.status(500).json({ error: 'GitHub Token not configured on server' })
  }

  try {
    const { data } = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`,
      },
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'all', // Include private repos
      },
    })

    const filteredProjects = data
      .filter((repo: any) => {
        // Strategy: "Opt-in" via GitHub Topics.
        // The project must have the 'portfolio' topic AND a deploy link (homepage).
        const hasPortfolioTag = repo.topics?.includes('portfolio')
        const hasDeployLink = !!repo.homepage
        const isPersonal = repo.owner?.type === 'User'
        
        return hasPortfolioTag && hasDeployLink && isPersonal
      })
      .map((repo: any) => {
        let imageUrl = `https://raw.githubusercontent.com/viniciussis/${repo.name}/${repo.default_branch}/public/screenshot.png`

        // If private, point to our proxy
        if (repo.private) {
          imageUrl = `/api/image-proxy?repo=${repo.name}&branch=${repo.default_branch}`
        }

        const isFeatured = repo.topics?.includes('featured')
        const isDraft = repo.topics?.includes('draft') || repo.topics?.includes('experiment') || repo.topics?.includes('lab')

        return {
          id: repo.id,
          name: repo.name,
          demo: repo.homepage,
          topics: repo.topics?.filter((t: string) => !['portfolio', 'featured', 'draft', 'experiment', 'lab'].includes(t)),
          github: repo.html_url,
          branch: repo.default_branch,
          description: repo.description,
          image: imageUrl,
          isFeatured,
          isDraft
        }
      })

    return res.status(200).json(filteredProjects)
  } catch (error: any) {
    console.error('GitHub API Error:', error.message)
    return res.status(500).json({ error: 'Failed to fetch projects from GitHub' })
  }
}
