import '../styles/bucketlistview.css'
import '../styles/headerlogonav.css'
import HeaderLogoNav from '../components/HeaderLogoNav'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import React from 'react'

const BucketListView = (props) => {
  const navigate = useNavigate()
  const [allDestinations, setAllDestinations] = useState([])
  let { id } = useParams()
  console.log('THIS IS LINE 14', id)

  const handleCard = (e) => {
    navigate(`/destinationdetails/${id}`)
  }

useEffect(() => {
  const getDestinationsData = async () => {
    console.log('This is line 22 bucketlistview')
    if (id !== undefined) {
      console.log('THIS IS LINE 24',`${id}`)
      let response = await axios.get(`http://localhost:3001/getalldestinations/${id}`)
      console.log('Line 19 bucketlist view component!', response.data)
      console.log('ALL DESTINATIONS', allDestinations)
      setAllDestinations(response.data.allDestinationsById)
    }
  }
  getDestinationsData()
}, [id])


console.log('This is line 35', props.bucketListName)

return (
  <div className="bucketlist-container">
    <HeaderLogoNav />
    <h5 id="title">{props.bucketListName}</h5>
    <ul className="card-list">
     {allDestinations.map((destination) => (
      <li  className="card-container" onClick={handleCard}>
        <img src={destination.destinationImage} className="bucketlist-img"/>
        <p className="img-text">{destination.destinationDesc}</p>
      </li>
    ))}
    </ul>
  </div>
)

}

export default BucketListView
