import placeholder from './images/potion.jpg'
import './DrinkDetails.css'
const { useEffect } = require("react")
const { useSelector, useDispatch } = require("react-redux")
const { useParams, NavLink } = require("react-router-dom")
const { getOneDrink } = require("../../store/drinks")


const DrinkDetails = ({drinkId}) =>{
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneDrink(parseInt(drinkId)))
    },[dispatch,drinkId])

    let drink = useSelector(state => state.drinks[drinkId])



    return (
        <div className = 'drink-details'>
            <div className = 'drink-details-left'>
                <img src = {placeholder}></img>
                <div className = 'drink-detail-text'>
                    <NavLink to = {`/drinks/${drinkId}`}>
                    <h2>{drink?.name}</h2>
                    </NavLink>
                    <h3>TODO: Add Creator Name</h3>
                    <h3>TODO: Add Category Name</h3>
                </div>
            </div>
            <div className = 'drink-details-right'>
                <h2 className= 'total-ratings'>TODO: ADD RATING COUNT</h2>
                <span className = 'average-rating'>TODO ADD AVERAGE</span>
            </div>
        </div>
    )
}

export default DrinkDetails
