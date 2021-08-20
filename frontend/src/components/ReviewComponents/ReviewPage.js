import { useParams } from "react-router-dom"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getOneReview } from "../../store/reviews"
import DrinkDetailStyled from "../DrinkComponents/DrinkDetailComponents/DrinkOwnedDetails"
import { getOneDrink } from "../../store/drinks"
import ReviewRating from "./ReviewRating"
import './ReviewPage.css'
import EditReviewFormModal from "./EditReviewModal"
import DeleteReviewModal from "./DeleteReviewModal"


const ReviewPageSty = styled.div`
    .test{
        width:100%;
        background-color: #fbf6f0;
        height: 100vh;
        margin:0;
        position:fixed;
    }
    .full-review{
        display: flex;
        margin: 5% 20%;
        gap: 30px;
    }

    .review-image img{
        height: 500px;
        width:auto;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    }

    .review-content{
        background-color: white;
        display:flex;
        flex-direction: column;
        height: fit-content;
        padding-bottom:40px;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);

    }
    h1{
        font-size: 25px;
        padding:25px;
        border-bottom: 1px solid #bbb9bb
    }
    .review-bottom{
        padding: 25px;
        border-bottom: 1px solid #bbb9bb
    }
    .buttons{
        display: flex;
        gap:20px;
        padding-top:12px;
    }
    button:hover{
        cursor: pointer;
        background-color: rgb(198, 135, 231);
    }

`


const ReviewPage = () =>{
    console.log('you got here!')
    const dispatch = useDispatch()
    let {reviewId} = useParams()
    let [owner,setOwner] = useState(false)

    let userId = useSelector(state => state.session.user?.id)

    useEffect(()=>{
        if(reviewId){
        dispatch(getOneReview(reviewId))}
    },[])

    let review = useSelector(state => state.reviews[reviewId])

    useEffect(()=>{
        if(review){
            dispatch(getOneDrink(review?.drinkId))}
        },[review?.drinkId])

        useEffect(()=> {
            if(userId && review?.userId === userId){
                setOwner(true)
            }else{
                console.log('reviewId', review?.userId)
                console.log('userId', userId)
            }
        },[review, userId])

    let drink = useSelector(state => state.drinks[review?.drinkId])

    return(

        <ReviewPageSty>
        <div className = 'test'>
            {review &&
                <div className = 'full-review'>
                <div className = 'review-content'>
                <h1>{review?.User?.username}</h1>
                <div className = 'review-bottom'>
                {drink && <DrinkDetailStyled drink = {drink}></DrinkDetailStyled>}
                <p>{review?.content}</p>
                <ReviewRating rating = {review?.rating}/>
                <div className= "buttons">
                {owner && <EditReviewFormModal drinkId = {drink?.id} review = {review} />}
                {owner && <DeleteReviewModal reviewId = {review?.id}></DeleteReviewModal>}
                </div>
                </div>
                </div>
                <div className =' review-image'>
                <img src = {review?.imageUrl}/>
                </div>
                </div>
            }
        </div>
        </ReviewPageSty>
    )



}

export default ReviewPage
