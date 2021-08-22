import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addDrink } from "../../store/drinks"
import {thumbImages} from "../DrinkComponents/image-handler"

let AddDrinkSty = styled.div`
    form{
        display:flex;
        flex-direction:column;
    }
    img{
        width:40px;
    }
    .select-category{
        display:flex;
    }
`

let AddDrinkForm = ({closeModal})=> {
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const[ categoryId, setCategoryId] = useState(null)
    const [errors, setErrors] = useState([]);
    const creatorId = useSelector( state => state.session.user.id)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addDrink({name,description,categoryId,creatorId})).catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) setErrors(data.errors);
        })

        if(!errors){
            closeModal()
        }
    }

    return(
        <AddDrinkSty>
        <>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = 'name'>
                </label>
                <input type = 'text' placeholder = 'What is your potion called' onChange ={e => setName(e.target.value)}></input>
                <label htmlFor = 'description'></label>
                    <textarea
                        id = 'description'
                        cols = '30'
                        rows ='5'
                        onChange= {e => setDescription(e.target.value)}
                        placeholder = 'Let us know what your potion is capable of'
                        value = {description}
                    >
                    </textarea>

                    <label htmlFor = 'category'>
                        <div class = 'select-category'>

                        <label htmlFor = 'conjuration'>
                            <input type = 'radio' name = 'category' value = '1' id = 'conjuration'>
                            </input>
                            <img src = {thumbImages[1]}></img>
                        </label>

                        <label htmlFor = 'evocation'>
                            <input type = 'radio' name = 'category' value = '2' id = 'evocation'>
                            </input>
                            <img src = {thumbImages[2]}></img>
                        </label>


                        <label htmlFor = 'enchantment'>
                            <img src = {thumbImages[3]}></img>
                            <input type = 'radio' name = 'category' value = '3' id = 'enchantment'>
                            </input>
                        </label>


                        <label htmlFor = 'transmutation'>
                            <img src = {thumbImages[4]}></img>
                            <input type = 'radio' name = 'category' value = '4' id = 'transmutation'>
                            </input>
                        </label>

                        <label htmlFor = 'illusion'>
                        <img src = {thumbImages[5]}></img>
                        <input type = 'radio' name = 'category' value = '5' id = 'illusion'>
                        </input>
                        </label>

              
                        <label htmlFor = 'enchantment'>
                            <img src = {thumbImages[6]}></img>
                            <input type = 'radio' name = 'category' value = '6' id = 'enchantment'>
                            </input>
                        </label>


                        <label htmlFor = 'divination'>
                            <img src = {thumbImages[7]}></img>
                            <input type = 'radio' name = 'category' value = '7' id = 'divination'>
                            </input>
                        </label>

                        <label htmlFor = 'other'>
                        <img src = {thumbImages[8]}></img>
                        <input type = 'radio' name = 'category' value = '8' id = 'other'>
                        </input>
                        </label>
                        </div>
                    </label>

            </form>
        </>
        </AddDrinkSty>
    )
}

export default AddDrinkForm
