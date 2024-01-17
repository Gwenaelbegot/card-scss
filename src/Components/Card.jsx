import './Card.scss'
import shoes from '../assets/air-force.jpg'

function Card () {
return (

    <div className="card">
        <div className="card2">
        <h1><span className='af'>Air force</span> <span className='nd'> Neon Dragon</span></h1>  
        <img className='pdp' src={shoes} />
        <h2>350 $</h2>
        <button className='btn'>Order</button>
        <div className="loader">
    </div>
        </div>
    </div>
)
}

export default Card;