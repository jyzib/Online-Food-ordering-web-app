import React from 'react'

const home = () => {
  return (
    <div className='home' >
        <div className="home1">
        <div className="round">
      <img className='background' src="img/background.png" alt="" />
      </div>
      <div className="home-left">
        <h1 className='title' >We are ready to deliver your favorite food items</h1>
       <p className='title-dep' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quia, nihil aspernatur libero, excepturi nobis facilis neque aliquam minima molestias, amet veritatis dicta praesentium error maiores consequuntur est eius quidem?</p>
       <button className='Quick-Order' >Quick Order  <i className="bi bi-arrow-right"></i> </button>
      </div>
      <div className="home-rigth">
        <img className='food-plate' src="img/food-plate.png" alt="" />
      </div>
        </div>
        <div className="leaves">
            <img className='leaves-img' src="img/leaves.png" alt="" />
        </div>
        <div className="time">
            <div className="date">
            <i className="bi bi-clock"></i>
            <h3>Mon - Sat(10AM - 8PM)</h3>
            <p>Available Hours</p>
            </div>
            <div className="location">
            <i className="bi bi-geo-alt-fill"></i>
            <h3>Haryana, Faridabad</h3>
            <p>Our Location</p>

            </div>
            <div className="contact-no">
            <i className="bi bi-telephone-outbound-fill"></i>
            <h3>91 8920353238</h3>
            <p>Call us</p>

            </div>
        </div>
     
    </div>
  )
}

export default home
