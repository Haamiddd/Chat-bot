import React from 'react'
import img2 from './images/chat-left-dots.svg'
import img3 from './images/person.svg'

export default function ChatMessages(props) {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
        {props.user ?(
                <span className='message-right'>
                    <span className='message-text' >{props.message}</span>
                    <img src={img3} alt="user" className='message-icon2'/>
                </span>
                
            ): 
            (
               <span className='message-left'>
                    <img src= {img2} alt="system" className='message-icon'/>
                    <span className='message-text'>{props.message}</span>
                </span>
                
            )}

    </div>
  );
}

