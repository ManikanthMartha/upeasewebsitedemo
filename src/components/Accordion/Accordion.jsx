import React from 'react'
import { useState } from 'react'
import { accordian_data } from '../../constants/accorddata'
import './Accordion.css'
import arrowup from './../../assets/arrowup.svg'
import arrowdown from './../../assets/arrowdown.svg'



const Accordion = () => {
    const [clicked, setClicked] = useState(null)

const toggle = (i) => {
    if (clicked === i){
        return setClicked(null)
    }

    setClicked(i)
} 
  return (
    <div className='accordion'>
        {accordian_data.map(
            (items, i) => (
                <div className='item'>
                    <div className='accordion_heading' onClick={() => toggle(i)}>
                        <p>{items.heading}</p>
                        <span>{clicked === i ? <img src= {arrowup} className='arrow'></img> : <img src= {arrowdown} className='arrow'></img> }</span>
                    </div>
                    <div className={clicked === i ? 'accordion_info show' : 'accordion_info'}>
                        <p>{items.info}</p>
                    </div>
                </div>
            )
        )}
    </div>
  )
}

export default Accordion