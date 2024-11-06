// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {

    const [category, setCategiory] = useState("all")

    return (

        <div><Header/>
            <ExploreMenu category={category} setCategiory={setCategiory}></ExploreMenu>
            <FoodDisplay category={category}> </FoodDisplay>
        </div>
    )
}

export default Home