import React from 'react'
import Foods from './foods'
const home = () => {
  return (
    <div className='home' >
      <div className="div">
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
            <h3 className='title-icon-text' >Mon - Sat(10AM - 8PM)</h3>
            <p className='paragraph' >Available Hours</p>
            </div>
            <div className="location">
            <i className="bi bi-geo-alt-fill"></i>
            <h3 className='title-icon-text' >Haryana, Faridabad</h3>
            <p className='paragraph' >Our Location</p>

            </div>
            <div className="contact-no">
            <i className="bi bi-telephone-outbound-fill"></i>
            <h3 className='title-icon-text' >91 8920353238</h3>
            <p className='paragraph' >Call us</p>

            </div>
        </div>
        <div className="round1">
      <img className='background1' src="img/left-round.png" alt="" />
      </div>
      <div className="pizza-section">
        <div className="pizza">
            <img className='pizza-img' src="img/pizza.png" alt="" />
        </div>
        <div className="pizza-text">
            <h2 className='Quality' >Quality</h2>
            <h1 className='Quality-title' >Exploring the Rich Flavors and Diverse of the World</h1>
            <p className='Quality=text' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora ratione ipsum autem. Architecto molestiae, ex amet dignissimos iste voluptatum harum quasi animi vel sit blanditiis odit perspiciatis labore magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis atque illo id quisquam aspernatur iste necessitatibus totam sunt ratione sapiente, aliquid ab perferendis velit. Numquam esse molestiae labore ut aspernatur.</p>
            <button className='Quick-Order1' >Discover More</button>
        </div>
       
      </div>
      </div>
      <Foods/>
    </div>
  )
}

export default home
