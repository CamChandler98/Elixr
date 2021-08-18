
import './DrinkDetails.css'
// const { useEffect } = require("react")
// const { useSelector, useDispatch } = require("react-redux")
const { useParams, NavLink } = require("react-router-dom")
// const { getOneDrink } = require("../../../store/drinks")


const DrinkTextDetails = ({drink}) =>{

    return (
                <div className = 'drink-detail-text'>
                    <NavLink to = {`/drinks/${drink?.id}`}>
                    <h2>{drink?.name}</h2>
                    </NavLink>
                    <h3>{drink?.User.username}</h3>
                    <h3>{drink?.Category.name}</h3>
                </div>
    )
}

export default DrinkTextDetails
