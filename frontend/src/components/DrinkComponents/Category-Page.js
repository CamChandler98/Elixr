import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CategoryPage = () =>{
    let {categoryId} = useParams()
    const [drinkList, setDrinkList] = useState([])

    useEffect(()=>{
        async function fetchData(){
            let res = await fetch('/api/')
        }
    })

    return(
        null
    )
}

export default CategoryPage
