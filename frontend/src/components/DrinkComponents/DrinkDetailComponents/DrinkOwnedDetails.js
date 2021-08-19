import styled from 'styled-components'
// import './DrinkDetails.css'
// const { useEffect } = require("react")
// const { useSelector, useDispatch } = require("react-redux")
import { thumbImages } from '../image-handler'
const { NavLink } = require("react-router-dom")
// const { getOneDrink } = require("../../../store/drinks")


let OwnedSty = styled.div`
    .drink-detail{
        display:flex;
        align-items: center;
        margin-right: 150px;
        width: 300px;
        box-sizing: border-box;
    }
    img{
        width: 90px;
        height: auto;
    }
    h2{
        font-size: 16px;
    }
`
const DrinkTextDetails = ({drink}) =>{

    return (
                <div className = 'drink-detail'>
                    <img src = {thumbImages[drink?.categoryId]} alt ={`${drink?.Category.name} thumbnail`}></img>
                    <div className = 'text-details'>
                    <NavLink to = {`/drinks/${drink?.id}`}>
                    <h2>{drink?.name}</h2>
                    </NavLink>
                    <h3>by {drink?.User.username}</h3>
                    <h3>{drink?.Category.name}</h3>
                    </div>
                </div>
    )
}

const DrinkDetailStyled = ({drink}) => {
    return(
        <OwnedSty>
            <DrinkTextDetails drink = {drink}/>
        </OwnedSty>
    )
}

export default DrinkDetailStyled
