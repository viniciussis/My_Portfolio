import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { repo, branch } = req.query
  const token = process.env.VITE_GITHUB_TOKEN

  if (!token) {
    return res.status(500).json({ error: 'GitHub Token not configured' })
  }

  if (!repo || !branch) {
    return res.status(400).json({ error: 'Missing repo or branch parameters' })
  }

  const imageUrl = `https://raw.githubusercontent.com/viniciussis/${repo}/${branch}/public/screenshot.png`

  try {
    const response = await axios.get(imageUrl, {
      headers: {
        Authorization: `token ${token}`,
      },
      responseType: 'arraybuffer', // Important for images
    })

    // Set appropriate content type (assume png for now as per project convention)
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', 'public, max-age=86400') // Cache for 1 day
    return res.send(response.data)
  } catch (error: any) {
    console.error(`Failed to fetch image for ${repo}:`, error.message)
    // Return 404 or a placeholder if image not found
    return res.status(404).json({ error: 'Image not found' })
  }
}
