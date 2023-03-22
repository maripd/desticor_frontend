import '../App.css'
import MostPopular from '../components/MostPopular'

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
  return (
    <div>
      <header id="header-container">
        <div id="navlogo-container">
          <img src="https://i.imgur.com/QWVRsKl.png" id="logo" />
          <div id="nav-container">
            <img src="https://i.imgur.com/P9U6WKW.png" id="menu-icon" />
          </div>
        </div>
      </header>
      <div id="blurbsearch-container">
        <p id="intro-blurb">
          Explore the world <br /> with us!
        </p>
        {/* use background on css, for the search icon in input */}
        <div id="searchbar-container">
          <input type="text" id="search-input" />
        </div>
      </div>

      <div id="mostpopular-container">
        <p className="section-title">Most Popular</p>
       <ul className="cardsandname-container" id="popular-container">
        {mockData.map((mockItem) => {
          return (
            <MostPopular
            img={mockItem.img}
            location={mockItem.location}/>
          )
          
        })}
       </ul>
      </div>
      {/* <div className="cards-container" id="bucketlist-container">
        <div id="textplus-container">
          <p id="bucketlist-text" className="card-name">
            My Bucket List
          </p>
          <p id="plus-sign">+</p>
        </div>
        <div className="cardsandname-container">
          <img
            src="https://i.imgur.com/YGXG1vC.png"
            id="bucketlist-card"
            className="card"
          />
        </div>
      </div> */}
    </div>
  )
}

export default HomePage
