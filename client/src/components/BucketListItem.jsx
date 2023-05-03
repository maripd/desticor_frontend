import '../styles/bucketlistitem.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'



const BucketListItem = (props) => {
  const navigate = useNavigate()
  const [firstDestinationPhoto, setFirstDestinationPhoto] = useState('')
  const {bucketId} = props  //add this line to get the bucketId prop

  const getFirstDestinationPhoto = async (bucketId) => {
    try {
      const response = await axios.get(`http://localhost:3001/getalldestinations/${props.bucketId}`)
      const destination = response.data.allDestinationsById[0]
      setFirstDestinationPhoto(destination.destinationImage)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFirstDestinationPhoto()
  }, [bucketId])


  const handleClick = (e) => {
    navigate(`/bucketlistview/${props.id}`)
  }
  console.log("props.bucketlistname logging",props.bucketListName)

  

  return (
    <>
        <li id="listcard" onClick={handleClick} >
          <img src={firstDestinationPhoto} id="bucketlist-card" className="card-img" />
          <span className="card-text" id="bucketlist-name">{props.bucketListName}</span>
        </li>
    </>
  )
}

export default BucketListItem