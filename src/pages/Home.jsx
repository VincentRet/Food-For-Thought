import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="card text-center fade-in">
        <h1 className="mb-lg">What's really in your food?</h1>
        <p className="mb-xl" style={{ fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto var(--spacing-xl)' }}>
          Discover questionable ingredients and their potential health risks.
          Simply scan or enter a barcode to get started.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <button 
            onClick={() => navigate('/scan')} 
            className="btn btn-primary btn-lg"
          >
            📱 Scan Barcode
          </button>
          <button 
            onClick={() => navigate('/manual')} 
            className="btn btn-secondary btn-lg"
          >
            ✏️ Enter Manually
          </button>
        </div>
      </div>
    </div>
  )
}
