import { useParams, NavLink } from "react-router-dom"
import styled from "styled-components"
import DrinkReviews from "../ReviewComponents/DrinkReviews"
import DrinkDetails from "./DrinkDetailComponents/DrinkDetails"
const { useEffect } = require("react")
const { useSelector, useDispatch } = require("react-redux")

const { getOneDrink } = require("../../store/drinks")

let DrinkPageDetailsSty = styled.div`
    h2{
        font-size: 30px;
        font-weight: 400

    }
    span{

    }
    a{
        text-decoration: none
    }
    img{
        width:120
        px;
    }
    h3{
        margin: 2% 0;
        font-size: 17px;
    }
`

let DrinkPageSty = styled.div`
    .drink-page: 
`


const DrinkPage = () =>{
    let {drinkId} = useParams()

    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneDrink(parseInt(drinkId)))

    },[dispatch,drinkId])

    let drink = useSelector(state => state.drinks[drinkId])

    return (
        <DrinkPageSty>
        <div className = 'drink-page'>
        <div className = 'drink-details'>
            <DrinkPageDetailsSty> <DrinkDetails drinkId = {drinkId}/></DrinkPageDetailsSty>

        </div>
        <div className = 'reviews'>
        <DrinkReviews drinkId={drink?.id} />
        </div>
        </div>
        </DrinkPageSty>

    )
}

export default DrinkPage
