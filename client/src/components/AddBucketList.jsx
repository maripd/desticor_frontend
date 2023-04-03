import '../styles/addbucketlist.css'
import { useState} from 'react'
import axios from 'axios'


const AddBucketList = () => {
  const [bucketListNameData, setBucketListName] = useState('')
  const [cityNameData, setCityName] = useState('')
  const [countryNameData, setCountryName] = useState('')
  const [userIdData, setId] = useState('')
  const [destinationIdData, setdestination] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('submit button was clicked!')
  const response = await axios.post( 'http://localhost:3001/createbucketlist', {
    bucketListName: bucketListNameData,
    cityName: cityNameData,
    countryName: countryNameData,
    userId: userIdData,
    destinationId: destinationIdData
  })
  setBucketListName('')
  console.log('TEST')
}

const handleAddBucketName = (e) => {
  setBucketListName(e.target.value)
  console.log('This is the new bucket!', e.target.value)
}
  return (
    <>
      <form id="addbucketform-container">
        <input type="text" value={bucketListNameData} onChange={(e) => handleAddBucketName(e, 'new bucket name')} placeholder="name of bucket list" id="addbucket-input"/>
        <button type="submit" id="submit-bucket" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default AddBucketList