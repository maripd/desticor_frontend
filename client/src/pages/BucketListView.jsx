import './bucketlistview.css'
const BucketListView = () => {
  return (
    <div className="bucketlist-container">
      <div id="nav-container">
        <img src="https://i.imgur.com/pPRVGLB.png" className="logo-icon" />
        <img src="https://i.imgur.com/mnVheUL.png" className="nav-icon" />
      </div>
      <h5 id="title">Bucket List Name</h5>
      
      <div className="card-container">
        <img src="https://i.imgur.com/eoRserg.png" className="bucketlist-img"/>
        <p className="img-text">Denmark</p>

        <img src="https://i.imgur.com/YGXG1vC.png" className="bucketlist-img"/>
        <p className="img-text">Hokkaido</p>

        <img src="https://i.imgur.com/D9jYbbs.png" className="bucketlist-img"/>
        <p className="img-text">Switzerland</p>

        <img src="https://i.imgur.com/bzOxL6z.png" className="bucketlist-img"/>
        <p className="img-text">Tokyo</p>
      </div>
      
    </div>
  )
}

export default BucketListView
