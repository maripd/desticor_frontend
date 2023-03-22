import './bucketlist.css'

const BucketList = (props) => {
  return (
    <>
        <li className="card">
          <img src={props.img} id="bucketlist-card" className="card-img" />
          <span className="card-text" id="bucketlist-name">{props.location}</span>
        </li>
    </>
  )
}

export default BucketList