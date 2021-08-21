import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDrinks } from "../../store/drinks"
import { getUser } from "../../store/profile"
import { getUserReviews } from "../../store/reviews"
import DrinkDetails from "../DrinkComponents/DrinkDetailComponents/DrinkDetails"
import UserReviews from '../ReviewComponents/UserReviews'

const ProfilePage = () => {
    const [focus, setFocus] = useState('drinks')
    let {username} = useParams()
    console.log('username',username)

    let dispatch = useDispatch()
    useEffect(()=>{
        console.log('getting name')
        dispatch(getUser(username))
    },[])

    let user = useSelector(state => state?.profile)

    useEffect(()=> {
        console.log('getting reviews')
        if(user.id){
        dispatch(getUserReviews(user.id))
        }
    },[user.id])

    let reviews = useSelector (state => state.reviews.userReviews)

    useEffect(()=> {
        console.log('getting drinks')
        dispatch(getDrinks())
    },[])

    let drinksState = useSelector( state => state.drinks)

    let drinks = Object.values(drinksState).filter(drink => drink.creatorId === user.id)

    console.log('drinks', drinks)
    return (
        <>
        <div>
            {user && <h1>{user.username}</h1>}
            {reviews && <h2>Total Reviews: {reviews.length}
            </h2>}
            {drinks && <h2>Brewed {drinks.length} {drinks.length > 1 ? 'Potions': 'Potion'}</h2>}
        </div>
        <div>
            {reviews && focus === 'user' && <UserReviews reviews = {reviews} />}
            {drinks && focus === 'drinks' && drinks.map(drink => {
                return (
                    <DrinkDetails key = {drink.id} drinkId = {drink.id}/>
                )
            })}

        </div>
        </>
    )
}

export default ProfilePage
