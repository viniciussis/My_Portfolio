import './ImageCard.scss'

interface ImageCardProps {
  image: string
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={image} />
    </div>
  )
}

export default ImageCard
