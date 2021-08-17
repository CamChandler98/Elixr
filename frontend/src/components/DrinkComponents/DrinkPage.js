import { useParams } from "react-router-dom"
const { useEffect } = require("react")
const { useSelector, useDispatch } = require("react-redux")

const DrinkPage = () =>{
    let drinkId = useParams()
    useEffect(()=>{
        dispatch(getOneDrink(parseInt(drinkId)))
    },[dispatch,drinkId])

    let drink = useSelector(state => state.drinks[drinkId])

    
}

export default DrinkPage
