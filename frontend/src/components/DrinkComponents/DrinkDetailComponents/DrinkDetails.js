
import './DrinkDetails.css'
import DrinkTextDetails from './DrinkOwnedDetails'
const { useEffect } = require("react")
const { useSelector, useDispatch } = require("react-redux")
const { useParams, NavLink } = require("react-router-dom")
const { getOneDrink } = require("../../../store/drinks")


const DrinkDetails = ({drinkId}) =>{
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneDrink(parseInt(drinkId)))
    },[dispatch,drinkId])

    let drink = useSelector(state => state.drinks[drinkId])



    return (
        <div className = 'drink-details'>
                <DrinkTextDetails drink = {drink}></DrinkTextDetails>
            <div className = 'drink-details-right'>
                <h2 className= 'total-ratings'>Total ratings {drink?.count}</h2>
                <span className = 'average-rating'>Average rating: {drink?.avg}</span>
            </div>
        </div>
    )
}

export default DrinkDetails
