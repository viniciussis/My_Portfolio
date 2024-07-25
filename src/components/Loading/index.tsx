import { LinearProgress } from '@mui/material'
import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading'>
      <LinearProgress color="secondary" />
      <h1 className="loading__title">Carregando...</h1>
    </div>
  )
}

export default Loading
