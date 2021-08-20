import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews } from "../../store/reviews"
import ReviewDetails from "./ReviewDetails"
import styled from "styled-components"


let ReviewSty = styled.div`
    .reviews{
        display:flex;
        margin: 15%;
        flex-direction: column;
    }
`
const LatestReviews = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllReviews())
    },[])
    let reviewsState = useSelector(state => state.reviews)
    let allReviews = Object.values(reviewsState).reverse()
    console.log(allReviews)
        return(
            <ReviewSty>
            <div className = 'reviews'>
                {allReviews && allReviews.map(review => {
                return (
                    <ReviewDetails key = {review.id} reviewId= {review.id}></ReviewDetails>
                )
             })}
            </div>
            </ReviewSty>
        )
}

export default LatestReviews
