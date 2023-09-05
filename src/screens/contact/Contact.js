import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

import { Parallax } from "react-parallax";
import { ThemeProvider, createTheme, TextField, Button, TextareaAutosize, Fade} from '@mui/material';

import Footer from "../../components/footer/Footer";
import FadeInSection from "../../components/fadeinsection/FadeInSection";

import "./Contact.css"

import Christine from "../../images/christine-placeholder.jpg";
import Dan from "../../images/agents/DanTran1.jpg";
import Diana from "../../images/agents/DianaTran.jpg";
import Michael from "../../images/agents/Michael03.jpg";
import Tuong from "../../images/agents/TuongBui.jpg";
import Catherina from "../../images/agents/Catherina-Wong.jpg";
import Blank from "../../images/agents/BlankPhoto.gif";
import Annabelle from "../../images/agents/AnnabelleGoldenSmall.jpg";
import Janet from "../../images/agents/janet.jpg";

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
    
      const theme = createTheme({
        typography: {
          fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', Times, serif",
        },
        palette: {
            primary: {
                main: "rgb(134, 104, 28)", //this overide blue color
                light: "rgb(134, 104, 28)", //overides light blue
                dark: "rgb(134, 104, 28)", //overides dark blue color
            },
        },
      });
    
    return (
        <>
        <ThemeProvider theme={theme}>
        <Parallax>
        <div className="list-page">
            <div className="content">
                <div className="contact-page">
                    <div className="contact-texts">
                        <div className="contact-title">
                            <FadeInSection animationClassName="fade-in-section2">
                                <h1>Contact Us</h1>
                            </FadeInSection>
                        </div>
                        <div className="contact-desc">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Need to get in touch with us? Leave a message or call us today and we'll respond as soon as possible!</p>
                            </FadeInSection>
                        </div>

                        
                        <div className="contact-info">
                            <div className="contact-title">
                                <FadeInSection animationClassName="fade-in-section2">
                                    <h1>Contact Information</h1>
                                </FadeInSection>
                            </div>
                            <div className="contact-desc">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>892 Horcajo Street, Milpitas, CA 95035</p>
                                <p>Phone: (408) 416-3963</p>
                                <p>Fax: (888) 258-9029</p>
                                <p>Email: cbui@comcast.net</p>
                            </FadeInSection>
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
                                        size="large" 
                                        variant="standard" 
                                        className="contact-input"
                                        required
                                        borderColor="white"
                                        InputLabelProps={{
                                            className: "contact-input__props",
                                         }}
                                        InputProps={{
                                            style: {color: '#FBFCD4'}
                                        }}
                                        />
                                    <div className="space-between"></div>
                                    <TextField 
                                        type="text"
                                        fullWidth
                                        id="standard-basic" 
                                        name="last_name"
                                        label="Last Name" 
                                        required
                                        variant="standard"
                                        InputProps={{
                                            style: {color: '#FBFCD4'}
                                        }}
                                    />
                                </div>
                                <br></br>
                                <TextField 
                                    type="email" 
                                    fullWidth
                                    id="standard-basic" 
                                    label="Email" 
                                    name="email"
                                    size="large"
                                    required 
                                    variant="standard" 
                                    className="contact-input"
                                    InputProps={{
                                        style: {color: '#FBFCD4'}
                                    }}/>
                                <TextField 
                                    type="text" 
                                    fullWidth
                                    id="standard-basic" 
                                    label="Subject" 
                                    name="subject"
                                    size="large" 
                                    variant="standard" 
                                    className="contact-input"
                                    InputProps={{
                                        style: {color: '#FBFCD4'}
                                    }}
                                    />

                                <br></br>
                                <TextField 
                                    type="text" 
                                    fullWidth
                                    id="standard-basic" 
                                    label="Message" 
                                    name="message"
                                    required
                                    size="large" 
                                    variant="standard" 
                                    className="contact-input"
                                    multiline
                                    rows={6}
                                    maxRows={6}
                                    InputProps={{
                                        style: {color: '#FBFCD4'}
                                    }}/>
                            <div className="Button-position">
                                <Button type="submit" variant="outlined" sx={{':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="medium">Submit</Button> 
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Parallax>

        <div className="contact-page-color">
        <Parallax>
            <div className="contact-page-color">

                <FadeInSection animationClassName="fade-in-section">
                <div className="contact-agents-title">
                    <h1>Contact Our Agents</h1>
                </div>
                </FadeInSection>

                    <div className="agent-container">
                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Christine} alt="Christine" width="200px"></img>
                                <div className="agent-texts">
                                    <h2>Christine Minh Bui</h2>
                                    <p>Broker / President</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE # 01934309</p>
                                    <p>Fax: (888) 258-9029 | MNLS # 1079239</p>
                                    <p>Cell: (510) 673-5708</p>
                                    <p>Email: cbui@comcast.net</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Dan} alt="Dan" width="200px"></img>
                                <div className="agent-texts">
                                    <h2>Dan Hung Tran</h2>
                                    <p>Real Estate Agent / Operation Manager</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE # 01901911</p>
                                    <p>Fax: (888) 258-9029 | MNLS # 1079239</p>
                                    <p>Cell: (408) 560-6695</p>
                                    <p>Email: dan.tran@comcast.net</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Diana} alt="Diana" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Diana Thanh Thuy Tran</h2>
                                    <p>Broker Associate</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE # 01332809</p>
                                    <p>Fax: (888) 258-9029 | NMLS # 338600</p>
                                    <p>Cell: (510) 827-7872</p>
                                    <p>Email: dianatran99@hotmail.com</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Michael} alt="Michael" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Michael Manabu Yoshihara</h2>
                                    <p>Sr. Realtor</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE # 01396017</p>
                                    <p>Fax: (888) 258-9029</p>
                                    <p>Cell: (408) 712-9259</p>
                                    <p>Email: michael@yoshihara.org</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Catherina} alt="Catherina" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Catherina Wan Sum Wong</h2>
                                    <p>Realtor</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE # 01933002</p>
                                    <p>Fax: (888) 258-9029</p>
                                    <p>Cell: (916) 337-0591</p>
                                    <p>Email: cw@catherinahomes.com</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Tuong} alt="Tuong" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Tuong Viet Bui</h2>
                                    <p>Sr. Realtor</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE # 00926516</p>
                                    <p>Fax: (888) 258-9029</p>
                                    <p>Cell: (408) 425-2619</p>
                                    <p>Email: tuongs@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Janet} alt="Janet" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Janet H Tran</h2>
                                    <p>Sr. Realtor & Mortgage Loan Originator</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE: 01503182</p>
                                    <p>Fax: (888) 258-9029 | NMLS: 063799  </p>
                                    <p>Cell: (408) 858-8718   </p>
                                    <p>Email: janettran214@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Blank} alt="blank" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Annabelle Vo Golden</h2>
                                    <p>Realtor & Mortgage Loan Originatore</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE #: 02051093</p>
                                    <p>Fax: (888) 258-9029 | NMLS #: 968010  </p>
                                    <p>Cell: (408) 334-8388  </p>
                                    <p>Email: annabellevo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                        <FadeInSection animationClassName="fade-in-section">
                        <div className="agent-box">
                            <div className="agent-img">
                                <img src={Blank} alt="blank" width="200px" height="260.76"></img>
                                <div className="agent-texts">
                                    <h2>Angela Thuyanh Nguyen</h2>
                                    <p>Broker Associate</p>
                                    <br></br>
                                    <p>Office: (408) 416-3963 | BRE #: 01396020</p>
                                    <p>Fax: (888) 258-9029 | NMLS #: 333918  </p>
                                    <p>Cell: (916) 833-0321</p>
                                    <p>Email: anhduongn@hotmail.com</p>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>
                    </div>

            </div>
        </Parallax>
        </div>
        <Footer></Footer>
        </ThemeProvider>
        </>
        
    )
}

export default Contact;