// import '../styles/destinationdetails.css'
// import BucketListDropdown from '../components/BucketListDropdown'
// import HeaderLogoNav from '../components/HeaderLogoNav'
// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const DestinationDetails = () => {
//   const [destinationData, setDestinationData] = useState([])
//   let { id } = useParams()

// useEffect(() => {
//   const getDestinationById = async () => {
//     const response = await axios.get(`http://localhost:3001/getdestination/${id}`)
//     console.log('This is line 15', response.data.destinationItem)
//     if (response.data.destinationItem._id === id) {
//       setDestinationData(response.data.destinationItem)
//     } else {
//       console.error(`Destination with ID ${id} not found!`)
//     }
//   }
//   getDestinationById()
// }, [id])



//   // return (
//   //   <div id="destinationpage-container">
//   //    <HeaderLogoNav />
//   //     <div id="toptext-container">
//   //     <h1>San Francisco, <br/>California</h1>
//   //     <h3>A little blurb here and there</h3>
//   //     </div>
      
//   //     <div className="details-background">
//   //       <p className="country-name">USA</p>
//   //       <p className="state-name">San Francisco, CA</p>
//   //       <p className="bucketlist-name">MY BUCKET LIST</p>
//   //       <BucketListDropdown />
//   //     </div>
//   //   </div>
//   // )



//   return (
//     <div>
//       {destinationData.map((destinationItem) => {
//         return (
//           <div key={destinationItem._id}>
//             <div id="toptext-container">
//               <h1>{destinationItem.destinationDesc}</h1>
//               <h3>{destinationItem.description}</h3>
//             </div>
  
//             <div className="details-background">
//               <p className="country-name">{destinationItem.destinationDesc}</p>
//               <p className="bucketlist-name">MY BUCKET LIST</p>
//               <BucketListDropdown />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   )
// }

// export default DestinationDetails



import '../styles/destinationdetails.css'
import BucketListDropdown from '../components/BucketListDropdown'
import HeaderLogoNav from '../components/HeaderLogoNav'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DestinationDetails = () => {
  const [destinationData, setDestinationData] = useState({})
  let { id } = useParams()

  useEffect(() => {
    const getDestinationById = async () => {
      const response = await axios.get(`http://localhost:3001/getdestination/${id}`)
      console.log('This is line 15', response.data.destinationItem)
      if (response.data.destinationItem._id === id) {
        setDestinationData(response.data.destinationItem)
      } else {
        console.error(`Destination with ID ${id} not found!`)
      }
    }
    getDestinationById()
  }, [id])

  return (
    <div id="destinationpage-container">
      <HeaderLogoNav />
      {destinationData && (
        <div>
          <div id="toptext-container">
            <h1>{destinationData.destinationDesc}</h1>
            <h3>{destinationData.description}</h3>
          </div>

          <div className="details-background">
            <p className="country-name">{destinationData.destinationDesc}</p>
            <p className="bucketlist-name">MY BUCKET LIST</p>
            <BucketListDropdown />
          </div>
        </div>
      )}
    </div>
  )
}

export default DestinationDetails
