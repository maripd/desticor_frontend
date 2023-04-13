import '../styles/bucketlistitem.css'
import { useNavigate } from 'react-router-dom'


const BucketListItem = (props) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate('/bucketlistview:id')
  }
  console.log("props.bucketlistname logging",props.bucketListName)
  return (
    <>
        <li id="listcard" onClick={handleClick}>
          <img src="https://i.imgur.com/D9jYbbs.png" id="bucketlist-card" className="card-img" />
          <span className="card-text" id="bucketlist-name">{props.bucketListName}</span>
        </li>
    </>
  )
}

export default BucketListItem