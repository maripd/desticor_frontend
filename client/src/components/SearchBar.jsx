import './searchbar.css'
import { useState } from 'react'
const google = window.google
const autocompleteService = new google.maps.places.AutocompleteService()
const placesService = new google.maps.places.PlacesService(document.createElement('div'))

const SearchBar = () => {
  const [inputValues, setInput] = useState('')
  const [predictions, setPredictions] = useState([])
  const [photo, setPhoto] = useState(null)

  const handleChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
    // get a list from google, array of strings
    autocompleteService.getPlacePredictions(
      { input: e.target.value, types: ['(cities)']},
      (predictions) => {
        console.log(predictions)
        // if predictions value is not null, then set the predictions
        // since there's no else, it will stay as is
        // filter out impurities early in your logic
        // the things we dont want to be a part of the state, we want to take it out
        // before we even set the state
        if (predictions !== null) {
          setPredictions(predictions)
        }
      }
    )
  }

  const handleCityClick = (placeId) => {
    placesService.getDetails(
      { placeId: placeId, fields: ['name', 'photos']},
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place.photos && place.photos.length > 0) {
          const photoUrl = place.photos[0].getUrl({
            maxWidth: 500,
            maxHeight: 600,
          })
          setPhoto(photoUrl)
        }
      }
    )
  }


  return (
    <div id="blurbsearch-container">
      <p id="intro-blurb">
        Explore the world <br /> with us!
      </p>
      <div id="searchbar-container">
        <input
          type="text"
          id="search-input"
          value={inputValues}
          onChange={handleChange}
        />
        {predictions.length > 0 && (
          <div className="search-panel">
            {predictions.map((predictionItem) => {
              return (
                <div className="cities-container">
                  <p
                    className="suggested-city"
                    onClick={() => {
                      setInput(predictionItem.description)
                      setPredictions([])
                      handleCityClick(predictionItem.place_id)
                    }}
                  >
                    {predictionItem.description}
                  </p>
                </div>
              )
            })}
          </div>
        )}
        {photo && <img src={photo} alt="city photo" />}
      </div>
    </div>
  )
}
export default SearchBar


