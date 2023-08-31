import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

import { Parallax } from "react-parallax";
import { Input, TextField, Button, TextareaAutosize } from '@mui/material';

import "./Contact.css"

const Contact = () => {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('cmb_gmail', 'template_17bz3jm', form.current, 'gOHpJHGH2n6Z1wBw1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <>
        <Parallax>
        <div className="list-page">
            <div className="content">
                <div className="contact-page">
                    <div className="contact-texts">
                        <div className="contact-title">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="contact-desc">
                            <p>Need to get in touch with us? Leave a message or call us today and we'll respond as soon as possible!</p>
                        </div>

                        
                        <div className="contact-info">
                            <div className="contact-title">
                                <h1>Contact Information</h1>
                            </div>
                            <div className="contact-desc">
                                <p>892 Horcajo Street, Milpitas, CA 95035</p>
                                <p>Phone: (408) 416-3963  |  Fax: (888) 258-9029</p>
                                <p>Email: cbui@comcast.net</p>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact-boxes">
                            <h2>Contact Form</h2>
                            <div className="contact-inputs">
                                <div className="contact-name">
                                    <TextField 
                                        type="text" 
                                        fullWidth
                                        id="standard-basic" 
                                        label="First Name"
                                        name="first_name" 
                                        variant="standard" 
                                        className="contact-input"/>
                                    <TextField 
                                        type="text"
                                        fullWidth
                                        id="standard-basic" 
                                        name="last_name"
                                        label="Last Name" 
                                        variant="standard" />
                                </div>
                                <br></br>
                                <TextField 
                                    type="text" 
                                    fullWidth
                                    id="standard-basic" 
                                    label="Subject" 
                                    name="subject"
                                    variant="standard" 
                                    className="contact-input"/>

                                <TextField 
                                    type="email" 
                                    fullWidth
                                    id="standard-basic" 
                                    label="Email" 
                                    name="email"
                                    variant="standard" 
                                    className="contact-input"/>
                                <br></br>
                                <TextareaAutosize
                                    type="text"
                                    label="Message"
                                    fullWidth

                                    required
                                    name="message"
                                    variant="outlined"
                                    placeholder='Message here...'
                                    style={{ width: "20em" , height:"17em", borderColor:"#909090", borderWidth:1.3, 
                                    margin: "5%"}}
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Parallax>
        </>
        
    )
}

export default Contact;