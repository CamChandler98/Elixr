import { useParams } from "react-router-dom"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getOneReview } from "../../store/reviews"
import DrinkDetailStyled from "../DrinkComponents/DrinkDetailComponents/DrinkOwnedDetails"
import { getOneDrink } from "../../store/drinks"
import ReviewRating from "./ReviewRating"
import './ReviewPage.css'


const ReviewPageSty = styled.div`

    .full-review{
        display: flex;
        margin:20%;

    }

    .review-image img{
        height: 500px;
        width:auto;
    }
`


const ReviewPage = () =>{
    console.log('you got here!')
    const dispatch = useDispatch()
    let {reviewId} = useParams()

    useEffect(()=>{
        console.log('getting review')
        dispatch(getOneReview(reviewId))
    },[])

    let review = useSelector(state => state.reviews[reviewId])

    useEffect(()=>{
        dispatch(getOneDrink(review?.drinkId))
    },[review?.drinkId])

    let drink = useSelector(state => state.drinks[review?.drinkId])

    console.log(drink)
    return(

        <ReviewPageSty>
        <>
            {review &&
                <div className = 'full-review'>
                <div className = 'review-content'>
                <h1>{review?.User?.username}</h1>
                {drink && <DrinkDetailStyled drink = {drink}></DrinkDetailStyled>}
                <p>{review?.content}</p>
                <ReviewRating rating = {review?.rating}/>
                </div>
                <div className =' review-image'>
                <img src = {review?.imageUrl}/>
                </div>
                </div>
            }
        </>
        </ReviewPageSty>
    )



}

export default ReviewPage
