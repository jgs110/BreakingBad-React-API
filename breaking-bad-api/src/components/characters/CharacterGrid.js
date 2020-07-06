import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => { // Destructured from the props passed from App.js in the CharacterGrid component
    return isLoading ? (<Spinner />) : (<section className="cards">
        {items.map(item => ( // For each item in items...
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>)
}

export default CharacterGrid
