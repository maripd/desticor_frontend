import './headerlogonav.css'
import { useNavigate } from 'react-router-dom'

const HeaderLogoNav = () => {
  const navigate = useNavigate()

  const handleHomeButton = (e) => {
  navigate('/')
  }

  const handleBackButton = (e) => {
    navigate(-1)
  }

  return (
    <div id="nav-container">
        <img src="https://i.imgur.com/pPRVGLB.png" className="logo-icon" onClick={handleHomeButton}/>
        <img src="https://i.imgur.com/mnVheUL.png" className="nav-icon" onClick={handleBackButton}/>
      </div>
  )
}

export default HeaderLogoNav