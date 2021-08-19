import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { current } from "../../store/drinks"
import { getDrinkReviews} from "../../store/reviews"
import ReviewDetails from "./ReviewDetails"
const DrinkReviews = () => {
    const dispatch = useDispatch()

    let {drinkId} = useParams()

    let reviews = useSelector(state => state.reviews.drinkReviews)
    useEffect(() =>{
        dispatch((getDrinkReviews(drinkId)))
    },[dispatch, drinkId])






    return(
        <div>
            {reviews && reviews.map(review => {
                return (
                    <ReviewDetails key = {review.id}reviewId={review.id}></ReviewDetails>
                )
            })}
        </div>
    )
}
export default DrinkReviews
