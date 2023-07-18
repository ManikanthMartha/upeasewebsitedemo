import React from 'react'
import './features.css'
import product from './../../assets/product.png'
import Accordion from '../../components/Accordion/Accordion'
const Features = () => {
  return (
    <div>
        <div className='content_container'>
            <h1 className='content_header'>How Upease Works</h1>
            <br></br>
            <p className='content_info'>As a B2B EdTech startup, we provide comprehensive solutions and services to higher education institutions. Our extensive range of offerings includes student lifecycle management systems, learning management systems, institute data management systems, managed IT services, Microsoft licensing, and goodwill marketing to boost academic brands.</p>
        </div>
        <div className='product'>
            <div className='accordion'>
                <Accordion></Accordion>
            </div>
            <div className='product_image'>
                <img src={product}></img>
            </div>
        </div>
    </div>
  )
}

export default Features