import './bucketlistdropdown.css'

const BucketListDropdown = () => {
  return (
    <div className="dropdown-container">
      <button className="choose-btn">Choose your bucket list <img src="https://i.imgur.com/4m4KsbO.png" id="dropdown-arrow"/></button>
      
      <div className="dropdown-content">
        <button type="submit" className="option-btn">Denmark</button>
        <button type="submit" className="option-btn">New Zealand</button>
        <button type="submit" className="option-btn">Japan</button>
        <button type="submit" className="option-btn">Denmark</button>
        <button type="submit" className="option-btn">New Zealand</button>
      </div>

    </div>
  )
}

export default BucketListDropdown