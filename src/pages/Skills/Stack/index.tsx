import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Stack.scss'

const stackData = [
  { id: 'core', icons: ['typescript', 'javascript', 'java', 'python', 'golang'] },
  { id: 'frontend', icons: ['react', 'nextjs', 'vue', 'angular', 'tailwind', 'scss', 'styledcomponents', 'vite', 'redux'] },
  { id: 'backend', icons: ['nodejs', 'nest', 'django', 'graphql'] },
  { id: 'databases', icons: ['postgresql', 'mysql', 'mongodb', 'dynamodb', 'supabase', 'redis'] },
  { id: 'cloud', icons: ['aws', 'gcp', 'cloudflare', 'firebase', 'vercel'] },
  { id: 'devops', icons: ['docker', 'githubactions', 'gitlab', 'grafana', 'linux'] },
  { id: 'messaging', icons: ['rabbitmq', 'elasticsearch'] },
  { id: 'testing', icons: ['jest', 'vitest', 'prisma', 'postman', 'pnpm', 'vscode', 'github', 'bitbucket'] }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  }
}

const capitalizeFormatter = (str: string) => {
  const overrides: Record<string, string> = {
    javascript: 'JavaScript', typescript: 'TypeScript', nextjs: 'Next.js',
    vue: 'Vue.js', angular: 'Angular', tailwind: 'Tailwind CSS',
    scss: 'SCSS', styledcomponents: 'Styled Components', vite: 'Vite',
    redux: 'Redux', nodejs: 'Node.js', nest: 'NestJS', django: 'Django',
    graphql: 'GraphQL', postgresql: 'PostgreSQL', mysql: 'MySQL',
    mongodb: 'MongoDB', dynamodb: 'DynamoDB', supabase: 'Supabase',
    redis: 'Redis', aws: 'AWS', gcp: 'GCP', cloudflare: 'Cloudflare',
    firebase: 'Firebase', vercel: 'Vercel', docker: 'Docker',
    githubactions: 'GitHub Actions', gitlab: 'GitLab', grafana: 'Grafana',
    linux: 'Linux', rabbitmq: 'RabbitMQ', elasticsearch: 'Elasticsearch',
    jest: 'Jest', vitest: 'Vitest', prisma: 'Prisma', postman: 'Postman',
    pnpm: 'pnpm', vscode: 'VS Code', github: 'GitHub', bitbucket: 'Bitbucket',
    java: 'Java', python: 'Python', golang: 'Go'
  }
  return overrides[str.toLowerCase()] || str.charAt(0).toUpperCase() + str.slice(1)
}

const TooltipIcon = ({ icon }: { icon: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  const formattedName = capitalizeFormatter(icon)

  return (
    <div
      className="stack__icon-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} alt={formattedName} loading="lazy" />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="stack__tooltip"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {formattedName}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Stack = () => {
  const { t } = useTranslation('global')

  return (
    <div className="skills__block">
      <h2 className="sub">{t('skillsPage.stack.subtitle')}</h2>
      <motion.section
        className="stack"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="stack__grid">
          {stackData.map((category) => (
            <motion.div className="stack__category" key={category.id} variants={itemVariants}>
              <h3 className="stack__category-title">
                {t(`skillsPage.stack.categories.${category.id}`)}
              </h3>
              <div className="stack__category-icons">
                {category.icons.map(icon => (
                  <TooltipIcon key={icon} icon={icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Stack
