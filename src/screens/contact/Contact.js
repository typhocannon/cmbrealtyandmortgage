import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

import { Parallax } from "react-parallax";
import { ThemeProvider, createTheme, TextField, Button} from '@mui/material';

import Footer from "../../components/footer/Footer";
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import AgentContact from "../../components/agentContact/AgentContact";
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

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        alert("Email Sent!");
      };
    
      const theme = createTheme({
        typography: {
          fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', Times, serif",
        },
        palette: {
            primary: {
                main: "rgb(134, 104, 28)", 
                light: "rgb(134, 104, 28)",
                dark: "rgb(134, 104, 28)", 
            },
        },
      });

    const agents = [
        {imgSrc: Christine, name:"Christine Minh Bui", title:"Broker / President", office:"Office: (408) 416-3963 | BRE # 01934309", fax:"Fax: (888) 258-9029 | MNLS # 1079239", cell:"Cell: (510) 673-5708", email:"Email: cbui@comcast.net"},
        {imgSrc: Dan, name:"Dan Hung Tran", title:"Real Estate Agent / Operation Manager", office:"Office: (408) 416-3963 | BRE # 01901911", fax:"Fax: (888) 258-9029 | MNLS # 1079239", cell:"Cell: (408) 560-6695", email:"Email: dan.tran@comcast.net"},
        {imgSrc: Diana, name:"Diana Thanh Thuy Tran", title:"Broker Associate", office:"Office: (408) 416-3963 | BRE # 01332809", fax:"Fax: (888) 258-9029 | NMLS # 338600", cell:"Cell: (510) 827-7872", email:"Email: dianatran99@hotmail.com"},
        {imgSrc: Michael, name:"Michael Manabu Yoshihara", title:"Sr. Realtor", office:"Office: (408) 416-3963 | BRE # 01396017", fax:"Fax: (888) 258-9029", cell:"Cell: (408) 712-9259", email:"Email: michael@yoshihara.org"},
        {imgSrc: Catherina, name:"Catherina Wan Sum Wong", title:"Realtor", office:"Office: (408) 416-3963 | BRE # 01933002", fax:"Fax: (888) 258-9029", cell:"Cell: (916) 337-0591", email:"Email: cw@catherinahomes.com"},
        {imgSrc: Tuong, name:"Tuong Viet Bui", title:"Sr. Realtor", office:"Office: (408) 416-3963 | BRE # 00926516", fax:"Fax: (888) 258-9029", cell:"Cell: (408) 425-2619", email:"Email: tuongs@gmail.com"},
        {imgSrc: Janet, name:"Janet H Tran", title:"Sr. Realtor & Mortgage Loan Originator", office:"Office: (408) 416-3963 | BRE: 01503182", fax:"Fax: (888) 258-9029 | NMLS: 063799", cell:"Cell: (408) 858-8718", email:"Email: janettran214@gmail.com"},
        {imgSrc: Annabelle, name:"Annabelle Vo Golden", title:"Realtor & Mortgage Loan Originatore", office:"Office: (408) 416-3963 | BRE #: 02051093", fax:"Fax: (888) 258-9029 | NMLS #: 968010", cell:"Cell: (408) 334-8388", email:"Email: annabellevo@gmail.com"},
        {imgSrc: Blank, name:"Angela Thuyanh Nguyen", title:"Broker Associate", office:"Office: (408) 416-3963 | BRE #: 01396020", fax:"Fax: (888) 258-9029 | NMLS #: 333918", cell:"Cell: (916) 833-0321", email:"Email: anhduongn@hotmail.com"},
    ]

    const agentList = agents.map((agent) => (
        <AgentContact
            imgSrc={agent.imgSrc}
            name={agent.name}
            title={agent.title}
            office={agent.office}
            fax={agent.fax}
            cell={agent.cell}
            email={agent.email}
        />
    ))
    
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
                        {agentList}
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