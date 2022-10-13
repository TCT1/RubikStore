import { data } from 'autoprefixer';
import axios from 'axios';
import {useEffect, useState} from 'react'
import Cliker from '../Cliker';

import React from 'react'

const RMContainer = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople()
    }, [])
    
    const getPeople = () => {
        const URL = 'https://rickandmortyapi.com/api/character'
        axios.get(URL).then(data => {
            setPeople(data.data.results);
        })
    }

    return (
        <div>
            <h1>Rick and Morty Container</h1>
            {people.map(personas => <li key={personas.url}>
                                        {personas.name}
                                        <img src={personas.image}></img>
                                        <Cliker></Cliker>
                                    </li>)}
        </div>
    )
}

export default RMContainer