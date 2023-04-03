import '../styles/destinationdetails.css'
import BucketListDropdown from '../components/BucketListDropdown'
import HeaderLogoNav from '../components/HeaderLogoNav'

const DestinationDetails = () => {

  return (
    <div id="destinationpage-container">
     <HeaderLogoNav />
      <div id="toptext-container">
      <h1>San Francisco, <br/>California</h1>
      <h3>A little blurb here and there</h3>
      </div>
      
      <div className="details-background">
        <p className="country-name">USA</p>
        <p className="state-name">San Francisco, CA</p>
        <p className="bucketlist-name">MY BUCKET LIST</p>
        <BucketListDropdown />
      </div>
      
    </div>
  )
}

export default DestinationDetails