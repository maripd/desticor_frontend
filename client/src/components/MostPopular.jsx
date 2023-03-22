import './mostpopular.css'
const MostPopular = (props) => {
  return (
    <>
        <li className="card">
          <img src={props.img} id="popular-card" className="card-img"/>
          <span className="card-text">{props.location}</span>
        </li>
    </>
  )
}

export default MostPopular
