import React from 'react'
import {  Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
 <Container>
      <div className="hero">
      <div className='heroleft'>
        <div className='deal'>
        <i className="fa-solid fa-fire pink"  />
            <h3  className='pink'style={{fontSize:"14px"}}>Hot Deal In This Week</h3>
        </div>
        <h1>
          Smart Digital <br /> watch
        </h1>
        <LinkContainer to="/shop">
  <Link>
    <button type="button" className="btn btn-light">Shop now</button>
  </Link>
</LinkContainer>
    </div>
    <div className='heroright'> 
          <div className="img1">
              <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" alt="" />
          </div>
          <div className="img2 align-items-end">
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png" alt="" />
          </div>
    </div>
      </div>
 </Container>
  )
}

export default Hero