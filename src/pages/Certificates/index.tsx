import certificatesData from '@/data/certificatesData'
import './Certificates.scss'

const Certificates = () => {
  return (
    <div className={`certificates certificates--light`}>
      <h1 className="certificates__title">Certificados</h1>
      <div className="certificates__container">
        {certificatesData.map((certificate) => (
          <div key={certificate.id}>
            <img
              className="certificates__image"
              src={certificate.imagePath}
              alt={certificate.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
