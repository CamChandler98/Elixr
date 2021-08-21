import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserReviews } from "../../store/reviews"

const ProfilePage = () => {

    let {userId} = useParams

    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getUserReviews(userId))
    })

    let reviewsState = useSelector (state => state.reviews)
    let allReviews = Object.values(reviewsState)
    let reviews = allReviews.filter( review => review.userId === + userId).reverse()
    console.log(reviews)
    return (
        <>
        <h1>Hi</h1>
        </>
    )
}

export default ProfilePage
