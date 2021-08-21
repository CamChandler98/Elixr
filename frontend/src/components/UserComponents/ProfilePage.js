import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUser } from "../../store/profile"
import { getUserReviews } from "../../store/reviews"

const ProfilePage = () => {

    let {username} = useParams()
    console.log('username',username)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUser(username))
    })

    let userId = useSelector(state => state.profile.user.id)
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
