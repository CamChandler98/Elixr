import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import splashImage from '../DrinkComponents/images/thumbnail/logo.svg'
import background from '../DrinkComponents/images/thumbnail/background.svg'

let SplashSty =styled.div `
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
    .container{
        display: flex;
        height:100vh;
    }
    img{
        height:350px;
        width:auto;
        padding-left: 25px;
    }
    .left-side{
        display: flex;
        flex-direction: column;
        align-items:center;
        width:50%;
    }
    .right-side{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        margin: 0;
        background: rgb(143,69,182);
        background: linear-gradient(330deg, rgba(143,69,182,1) 0%, rgba(169,140,209,1) 100%);
        width:50%;
        height:100vh;

    }
    .link-container{
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items:center;
        background-color: white;
        width: 300px;
        padding: 3%;
        gap:25px;
    }
    h1{
        font-size:80px;
    }
    .logo{
        font-family: "Monoton";
    }
    .grey{
        color: grey;
    }
    .form-button {
        margin-top: 10px;
        margin-bottom: 5px;
        height: 40px;
        color: #fff;
        border: none;
        outline: none;
        background-color: #5F1A37;
        font-size: 14px;
        border-radius: 6px;
        text-justify: center;
    }
    NavLink{

        background-color: #5F1A37;
    }

`
let SpalshPage = ({isLoaded}) => {

    const sessionUser = useSelector(state => state.session.user);

    if(sessionUser){
        return(
            <Redirect to ='/categories'/>
        )
    }
    let body = document.body


    body.style.margin = 0
    body.style.height =`100%`



    return(
        <SplashSty>
            {isLoaded &&
            <div className = 'container'>
            <div className = 'left-side'>
            <h1 className = 'logo'>Welcome!</h1>
            <img src = {splashImage}>
            </img>
            <h1 className = 'logo'>
                Elixr
            </h1>
            <h2 className = 'grey'>
                Explore an Ocean of Potions
            </h2>
            </div>
            <div className = 'right-side'>
                <div className = 'link-container'>
                <NavLink to = '/login'>
                    Login
                </NavLink>
                <NavLink to = '/signup'>
                    Signup
                </NavLink>
                </div>
            </div>
            </div>
        }
        </SplashSty>
    )
}

export default SpalshPage
