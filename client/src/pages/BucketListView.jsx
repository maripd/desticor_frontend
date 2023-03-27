import './bucketlistview.css'
import '../components/headerlogonav.css'
import HeaderLogoNav from '../components/HeaderLogoNav'
import { useNavigate } from 'react-router-dom'

const BucketListView = () => {
  const navigate = useNavigate()

  const handleCard = (e) => {
    navigate('/review:id')
  }

  return (
    <div className="bucketlist-container">
      <HeaderLogoNav />
      <h5 id="title">Bucket List Name</h5>
      
      <div className="card-container" onClick={handleCard}>
        <img src="https://i.imgur.com/eoRserg.png" className="bucketlist-img"/>
        <p className="img-text">Denmark</p>

        <img src="https://i.imgur.com/YGXG1vC.png" className="bucketlist-img"/>
        <p className="img-text">Hokkaido</p>

        <img src="https://i.imgur.com/D9jYbbs.png" className="bucketlist-img"/>
        <p className="img-text">Switzerland</p>

        <img src="https://i.imgur.com/bzOxL6z.png" className="bucketlist-img"/>
        <p className="img-text">Tokyo</p>
      </div>
      
    </div>
  )
}

export default BucketListView
