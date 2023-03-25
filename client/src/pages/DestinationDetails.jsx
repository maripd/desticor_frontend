import './destinationdetails.css'

const DestinationDetails = () => {

  return (
    <div id="destinationpage-container">
      <div id="nav-container">
        <img src="https://i.imgur.com/pPRVGLB.png" className="logo-icon"/>
        <img src="https://i.imgur.com/mnVheUL.png" className="nav-icon"/>
      </div>
      <div id="toptext-container">
      <h1>San Francisco, <br/>California</h1>
      <h3>A little blurb here and there</h3>
      </div>
      
      <div className="details-background">
        <p className="country-name">USA</p>
        <p className="state-name">San Francisco, CA</p>
      </div>
   {/* bucketlist dropdown component here */}
    </div>
  )
}

export default DestinationDetails