import { useParams, NavLink } from "react-router-dom"
import styled from "styled-components"
import DrinkReviews from "../ReviewComponents/DrinkReviews"
import DrinkDetails from "./DrinkDetailComponents/DrinkDetails"
import reviewButton from '../DrinkComponents/images/thumbnail/check-in-button.svg'
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
    span{
        font-size: 20px;
        margin: 2% 0;
    }
    `

    let DrinkPageSty = styled.div`
    .drink-page{
        margin: 3% 10%
    }

        .drink-description{
            margin-left: 1.1%;
            width: 55%;
            border-bottom: 1px solid rgba(128,128,128,0.692);
            box-sizing: border-box;
            display:flex;
        }

        .drink-description > p {
            margin-left: 2%;
        }

        .review-button{
            width: 70px;
            transform: rotate(10deg)
        }
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
        <div className = 'drink-description'>
            <p>{drink?.description}</p>
            <img className = 'review-button' src = {reviewButton}/>
        </div>
        <div className = 'reviews'>
        <DrinkReviews drinkId={drink?.id} />
        </div>
        </div>
        </DrinkPageSty>

    )
}

export default DrinkPage
