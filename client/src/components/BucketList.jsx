import '../styles/bucketlist.css'
import { useNavigate } from 'react-router-dom'


const BucketList = (props) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate('/bucketlistview:id')
  }

  return (
    <>
        <li id="listcard" onClick={handleClick}>
          <img src={props.img} id="bucketlist-card" className="card-img" />
          <span className="card-text" id="bucketlist-name">{props.location}</span>
        </li>
    </>
  )
}

export default BucketList