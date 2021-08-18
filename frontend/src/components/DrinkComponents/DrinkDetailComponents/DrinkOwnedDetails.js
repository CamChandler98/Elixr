import styled from 'styled-components'
// import './DrinkDetails.css'
// const { useEffect } = require("react")
// const { useSelector, useDispatch } = require("react-redux")
import { thumbImages } from '../image-handler'
const { useParams, NavLink } = require("react-router-dom")
// const { getOneDrink } = require("../../../store/drinks")


let OwnedSty = styled.div`
    .drink-detail{
        display:flex;
        align-items: center;
    }
`
const DrinkTextDetails = ({drink}) =>{

    return (
                <div className = 'drink-detail'>
                    <img src = {thumbImages[drink?.categoryId]}></img>
                    <div className = 'text-details'>
                    <NavLink to = {`/drinks/${drink?.id}`}>
                    <h2>{drink?.name}</h2>
                    </NavLink>
                    <h3>{drink?.User.username}</h3>
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
