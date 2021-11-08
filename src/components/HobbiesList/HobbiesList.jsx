import React from 'react'
import './HobbiesList.css'
import Hobby from '../Hobby/Hobby'
import { hobbies } from '../../data'

const HobbiesList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Hobbies & Interests</h1>
                <p className="pl-desc">
                    I love to play games, listen to music, read books, and watch football and cricket. I like to explore and travel to different places. I support FC Bayern Munchen , Delhi Capitals and Team India.
                </p>
            </div>
            <div className="pl-list">
                {hobbies.map((hobby) => {
                    return <Hobby key={hobby.id} img={hobby.img} link={hobby.link}/>
                })}
            </div>
        </div>
    )
}

export default HobbiesList
