import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'


const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_t7v02yo', 'template_azekgtb', e.target, 'c0XU5Lg01RfIQgEi5').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));

  }

  return (
    <div className='contact' id='contactme'>
        <h3>Contact Me</h3>
        <div>
           <form onSubmit={sendEmail}>
                <input className='name' type="text" placeholder='Name' name='name'/>
                <input className='email' type="email" placeholder='Email' name='email'/>
                <input className='sub' type="text" placeholder='Subject' name='subject'/>
                <input className='mes' type="textarea" placeholder='Message' name='message'/>
                <input className='subm' type="submit" placeholder='Message' />
           </form>
        </div>
    </div>
  )
}

export default Contact