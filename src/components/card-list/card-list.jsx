import React from 'react'
import './cardlist.css'
import Card from '../card/card'

const Cardlist = (props) => {
    
  return (
    <div className='card-list'>
        {props.monsters.map(monster=>(
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
  )
}

export default Cardlist