import '../App.css'

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
    </div>
  )
}

export default HomePage
