import React from 'react'
import './cta.css'
import university from './../../assets/university.svg'
import student from './../../assets/student.svg'

const Cta = () => {
    return (
        <div className='contact_container'>
            <div className='for_container'>
                <div className='university_card'>
                    <div className='card_image'>
                        <img src={university}></img>
                    </div>
                    <div className='card_content'>
                        <p className='university_card_heading'>For university</p>
                        <p className='university_card_content'>
                            One solution for developing a Learning Managembent
                            System for your institution
                        </p>
                        <br></br>
                        <button class="university_card_button">Get a Demo</button>
                    </div>
                </div>
                <div className='student_card'>
                    <div className='card_image'>
                        <img src={student}></img>
                    </div>
                    <div className='card_content'>
                        <p className='student_card_heading'>For Students</p>
                        <p className='student_card_content'>
                            One solution for analysing all your Academics and everything
                        </p>
                        <br></br>
                        <button class="student_card_button">Join Us</button>
                    </div>

                </div>
            </div>
            <div className='cta_container'>
                <p className='cta_heading'>Elevate your education with Upease</p><br></br>
                <p className='cta_content'>
                Discover how UpEase can transform your academic experience today. Book a demo or start a free trial now and see how our solution can optimize your student lifecycle management system and enhance your academic brand. Contact us for more information.
                </p>

            </div>
        </div>
    )
}

export default Cta