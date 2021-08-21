import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDrinks } from "../../store/drinks"
import { getUser } from "../../store/profile"
import { getUserReviews } from "../../store/reviews"
import DrinkDetails from "../DrinkComponents/DrinkDetailComponents/DrinkDetails"
import UserReviews from '../ReviewComponents/UserReviews'
import styled from "styled-components"

let ProfileSty = styled.div`
    .main-content{
        display: flex;
        flex-direction: column;
        margin: 3% 10%;
        max-width: 800px;
    }
    .heading{
        font-size: 30px;
        font-weight: bold;
        color: #fff;

    }
    h3{
        margin: .5% 0;
        font-size: 20px;
    }

    .profile-header{
        background: rgb(143,69,182);
        background: linear-gradient(180deg, rgba(143,69,182,1) 0%, rgba(169,140,209,1) 100%);
        color: #fff;
        padding: 3% 7%;
        display:flex;
        flex-direction: column;
        gap: -50px;
        margin-bottom: 15px
    }
    .focus-content{
        display: flex;
        flex-direction: column;
        max-width: 800px
    }
    .switch-bar{
        display: flex;
        height: 50px;
        align-items:center;
        gap: 15px;
    }
    .focused{
        color:red;
    }
`

const ProfilePage = () => {
    const [focus, setFocus] = useState('user')
    let {username} = useParams()
    console.log('username',username)

    const switchFocus = (target,e) =>{
        if( focus === target) return

        let barItems = document.querySelectorAll('.bar-item')

        for( let item of barItems){
            item.classList.remove('focused')
        }
        e.target.classList.add('focused')

        switch (target) {
            case 'user':
                setFocus('user')
                break;
            case 'drinks':
                setFocus('drinks')
            default:
                break;
        }
    }
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
        <ProfileSty>
        <div className = 'main-content'>
        <div className = 'profile-header'>
            {user && <h2 className = 'heading'>{user.username}</h2>}
            {reviews && <h3>Total Reviews: {reviews.length}
            </h3>}
            {drinks && <h3>Brewed {drinks.length} {drinks.length === 1   ? 'Potion': 'Potions'}</h3>}
        </div>
        <div className = 'switch-bar'>
            <span className ='bar-item' onClick = {(e)=> switchFocus('user',e)}>Your Reviews</span>
            <span className ='bar-item' onClick = {(e)=> switchFocus('drinks',e)}>Your Drinks</span>
        </div>
        <div className = 'focus-content'>
            {reviews && focus === 'user' && <UserReviews reviews = {reviews} />}
            {drinks && focus === 'drinks' && drinks.map(drink => {
                return (
                    <DrinkDetails key = {drink.id} drinkId = {drink.id}/>
                )
            })}

        </div>
        </div>
        </ProfileSty>
    )
}

export default ProfilePage
