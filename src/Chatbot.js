import React, { useState } from 'react';
import img1 from './images/icon2.png';
import ChatMessages from './ChatMessages';
import { analyze } from './Util';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi, may I know your name?"
    }
  ]);

  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');

  const onSend = () => {
    let list = [...messages, { message: text, user: true }];

    if (text.toLowerCase().includes('bye')||text.toLowerCase().includes('thanks') ||text.toLowerCase().includes('thank')) {
      list = [
        ...list,
        { message: `Thanks for contacting us, ${userName} !👋🏼` }
      ];
    } else if (list.length === 2) {
      setUserName(text);
      list = [
        ...list,
        {
          message: `Hi, ${text}`
        },
        {
          message: (
            <p><h5>Welcome to Collins College, I can help you with these:</h5>
              <ul>
                <li>Our Branches</li>
                <li>Contact Details</li>
                <li>Courses Available</li>
                <li>Payment details</li>
              </ul>
            </p>
          )
        }
      ];
    } else {
      const reply = analyze(text);
      list = [
        ...list,
        { message: reply }
      ];
    }

    setMessages(list);
    setText('');
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    }, 1);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img src={img1} alt="logo" height={200} width={200} />
        <h2 className='text' style={{ color: '#6699CC' }}>Chatbot</h2>
      </div>
      <div className='chat-message'>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessages key={index} {...data} />
          ))}
        <div className='d-flex '>
          <input
            type="text"
            className='form-control'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="primary" className="btn btn-primary ms-3" onClick={onSend}>Send</button>
        </div>
        <div id='copyright' className='mt-2'>
          Copyright Reserved
        </div>
      </div>
    </div>
    
  );
 
  
}
