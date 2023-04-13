import '../styles/addbucketlist.css'
import { useState} from 'react'
import axios from 'axios'



const AddBucketList = ({ onBucketItemSubmit }) => {
  const [bucketItem, setBucketItem] = useState('')
  

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('submit button was clicked!')
  const bucketItemObject = {
    bucketListName: bucketItem,
  }
  const response = await axios.post( 'http://localhost:3001/createbucketlist', bucketItemObject)
  setBucketItem('')
  onBucketItemSubmit(bucketItemObject)
  
  console.log('TEST', bucketItem)
}

const handleAddBucketName = (e) => {
  setBucketItem(e.target.value)
  console.log('This is the new bucket!', e.target.value)
}
  return (
    <>
      <form id="addbucketform-container" onSubmit={handleSubmit}>
        <input type="text" value={bucketItem} onChange={(e) => handleAddBucketName(e, 'new bucket name')} placeholder="name of bucket list" id="addbucket-input"/>
        <button type="submit" id="submit-bucket" >Submit</button>
      </form>
    </>
  )
}

export default AddBucketList