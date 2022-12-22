import React from 'react';
import "./brand.css";
import google from '../../assets/google.png'
import dropbox from '../../assets/dropbox.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='brand'>
      <img src={google} alt="brand images" />
      <img src={dropbox} alt="brand images" />
      <img src={slack} alt="brand images" />
      <img src={atlassian} alt="brand images" />
      <img src={shopify} alt="brand images" />
    </div>
  )
}

export default Brand