import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDrinkReviews } from "../../store/reviews"
import ReviewDetails from "./ReviewDetails"
const DrinkReviews = ({drinkId}) => {
    let dispatch = useDispatch()

    // let userId = useSelector(state => state.session.user.id)
    // console.log('UserId', userId)
    useEffect(()=>{
        dispatch(getDrinkReviews(drinkId))
    },[])


    let reviews = useSelector(state => state.reviews.drinkReviews)

    return(
        <div>
            {reviews && reviews.map(review => {
                return (
                    <ReviewDetails reviewId={review.id}></ReviewDetails>
                )
            })}
        </div>
    )
}
export default DrinkReviews
