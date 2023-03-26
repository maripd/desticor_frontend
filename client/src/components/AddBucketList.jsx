import './addbucketlist.css'
const AddBucketList = () => {

  return (
    <>
      <form id="addbucketform-container">
        <input type="text" placeholder="name of bucket list" id="addbucket-input"/>
        <button type="submit" id="submit-bucket">Submit</button>
      </form>
    </>
  )
}

export default AddBucketList