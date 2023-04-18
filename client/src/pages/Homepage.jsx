import '../styles/homepage.css'
import HeaderLogoNav from '../components/HeaderLogoNav'
import MostPopular from '../components/MostPopular'
import BucketListItem from '../components/BucketListItem'
import AddBucketList from '../components/AddBucketList'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'


const mockData = [
  {
    img: 'https://i.imgur.com/8IkVUkp.png',
    location: 'Denmark'
  },
  {
    img: 'https://i.imgur.com/YGXG1vC.png',
    location: 'Japan'
  },
  {
    img: 'https://i.imgur.com/D9jYbbs.png',
    location: 'Switzerland'
  },
  {
    img: 'https://i.imgur.com/8IkVUkp.png',
    location: 'Denmark'
  },
  {
    img: 'https://i.imgur.com/YGXG1vC.png',
    location: 'Japan'
  },
  {
    img: 'https://i.imgur.com/D9jYbbs.png',
    location: 'Switzerland'
  }
]

const HomePage = () => {
  const [bucketList, setBucketList] = useState([])

  const handleAddSubmit = (bucketItem) => {
    setBucketList(prevBucketList => [...prevBucketList, bucketItem])

  }
  console.log('THIS IS BUCKETLIST STATE', bucketList)



  useEffect(() => {
    const getAllBuckets = async () => {
      const response = await axios.get('http://localhost:3001/getallbuckets')
      setBucketList(response.data.allBuckets)
    }
    getAllBuckets()
  }, [])

 

  return (
    <div>
      <header id="header-container">
      <HeaderLogoNav />
      </header>
      <SearchBar bucketList={bucketList}/>


      <div id="mostpopular-container">
        <p className="section-title">Most Popular</p>
        <ul className="cardsandname-container" id="popular-container">
          {mockData.map((mockItem) => {
            return (
              <MostPopular img={mockItem.img} location={mockItem.location} />
            )
          })}
        </ul>
      </div>

      <div className="cards-container" id="bucketlist-container">
        <div id="textplus-container">
          <p id="bucketlist-text" className="card-name">
            My Bucket List
          </p>
          <p id="plus-sign">+</p>
          <AddBucketList onBucketItemSubmit={handleAddSubmit} />
        </div>

        <ul className="cardsandname-container" id="card-img">
          {bucketList.map((bucketItem) => {
            console.log("LOG BUCKET ITEM",bucketItem)
            return (
              <BucketListItem bucketListName={bucketItem.bucketListName} id={bucketItem._id} bucketId={bucketItem._id}/>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
