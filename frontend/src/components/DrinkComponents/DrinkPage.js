import { useParams } from "react-router-dom"
const { useEffect } = require("react")
const { useSelector, useDispatch } = require("react-redux")
const { getOneDrink } = require("../../store/drinks")

const DrinkPage = () =>{
    let {drinkId} = useParams()
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneDrink(parseInt(drinkId)))
    },[dispatch,drinkId])

    let drink = useSelector(state => state.drinks[drinkId])

    return (
        null
    )
}

export default DrinkPage
