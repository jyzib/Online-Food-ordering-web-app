import React from 'react'

const ourservice = () => {
  return (
    <div className='service' >
      <div className="service-text">
      <h2 className='Quality' >Service</h2>
      <h1 className='Quality-title' >Our Service</h1>
      <p className='service-dip' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam earum quos nesciunt nam iure? Ducimus deleniti quidem consequuntur, nesciunt sint qui tempora, officiis, voluptas ipsum doloribus aliquam.</p>
      </div>
      <div className="service-card">
        <div className="service-allcard">
         <div className="service-img">
            <img className='service-image' src="img/meal.png" alt="" />
         </div>
         <div className="service-text1">
            <h4>Pick Meals</h4>
            <p className='service-dip'  > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores incidunt id .</p>
         </div>
        </div>
        <div className="service-allcard">
         <div className="service-img">
            <img className='service-image1' src="img/scoter.png" alt="" />
         </div>
         <div className="service-text1">
            <h4>Fast Delivery</h4>
            <p className='service-dip'  > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores incidunt id .</p>
         </div>
        </div>
        <div className="service-allcard">
         <div className="service-img">
            <img className='service-image' src="img/payment-icon.png" alt="" />
         </div>
         <div className="service-text1">
            <h4>Make Payment</h4>
            <p className='service-dip'  > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores incidunt id .</p>
         </div>
        </div>
        
      </div>

    </div>
  )
}

export default ourservice
