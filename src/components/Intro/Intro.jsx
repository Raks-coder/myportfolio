import React from 'react'
import './Intro.css'
import anime from '../../img/about_anime.gif'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Rakshit Malhotra</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> Developer </div>
                            <div className="i-title-item"> Gamer </div>
                            <div className="i-title-item"> Software Engineer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I work as a software engineer at Urjanet India . I have contributed to open source projects and have been working on data science projects as a hobby for the past few years. I am always enthusiastic about learning new technologies and solving problems.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={anime} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;
