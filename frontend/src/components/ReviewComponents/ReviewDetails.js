import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getOneReview } from "../../store/reviews"


const ReviewDetails = ({reviewId}) => {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneReview(parseInt(reviewId)))
    },[])

    let review = useSelector(state => state.reviews[reviewId])

    return(
        <div className = 'review-details'>
            <div className = 'review-details-top'>
                <span className = 'review header'><NavLink to = {`/users/${review?.User.username}`}>{review?.User.username}</NavLink> is drinking <NavLink to = {`/drinks/${review?.drinkId}`}>{review?.Drink.name}</NavLink></span>
            </div>
        </div>
    )
}

export default ReviewDetails
