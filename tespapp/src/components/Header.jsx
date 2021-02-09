import React from 'react'

export default function Header() {
  return (
    <div className='container'>
      <div className='leftContainer'>
        <button><img alt='Stream'/></button>
        <p>8 people listening you</p>
      </div>
      <div className='rightContainer'>
        <div className='textContainer'>
          <p className='artistName'></p>
          <p className='artistStatus'></p>
        </div>
        <button><img alt='Avatar'/></button>
        <button><img alt='dropArrow'/></button>
        <img alt='separator' />
        <button><img alt='Notification'/></button>
        <button><img alt='LogOut'/></button>
      </div>
    </div>
  )
}

