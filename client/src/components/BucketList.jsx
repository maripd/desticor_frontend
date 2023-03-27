import './bucketlist.css'


const BucketList = (props) => {
  return (
    <>
        <li id="listcard">
          <img src={props.img} id="bucketlist-card" className="card-img" />
          <span className="card-text" id="bucketlist-name">{props.location}</span>
        </li>
    </>
  )
}

export default BucketList