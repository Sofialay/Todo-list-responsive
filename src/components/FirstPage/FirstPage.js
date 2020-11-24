import './FirstPage.scss'
import React from 'react'
import computer from '../../assets/computer.png'
import {Link} from 'react-router-dom';

function FirstPage() {
    return (
        <div className="first-page">
            <section className="first-page-introduction">
                <h1 className="first-page-introduction-title">To-do List</h1>
                <p className="first-page-introduction-sub">I made this to-do list web app using React JS, I hope you like it and use it.</p>
                <p className="first-page-introduction-sub"><a href="#">Here</a> is the code and you can send me a message <a href="#">here</a> for any feedback!</p>
            </section>

            <section className="first-page-img-and-button">
                <img className="first-page-img" src={computer}/>
                <button className="first-page-button"><Link to="/mainpage" className="first-page-button-link">Start</Link></button>
                
            </section>

        </div>
    )
}


export default FirstPage;
