import './addbucketlist.css'
import { useState} from 'react'
import axios from 'axios'


const AddBucketList = () => {
  const [bucketListNameData, setBucketListName] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('submit button was clicked!')
  const response = await axios.post( '/createbucketlist', {
    bucketListName: bucketListNameData,
  })
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