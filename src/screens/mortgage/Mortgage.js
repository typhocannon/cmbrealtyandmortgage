import React, {useState} from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Parallax } from "react-parallax";
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import sunset from "../../images/cottoncandy_sunset.jpg";
import mtsummit from "../../images/GOPR0260.jpg";
import Footer from "../../components/footer/Footer";

import "./Mortgage.css"

const Mortgage = () => {
    const theme = createTheme({
        typography: {
          fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', Times, serif",
        },
      });

    // State variables for input values and calculated result
    const [loanAmount, setLoanAmount] = useState(2000);
    const [nMonths, setNMonths] = useState(2000);
    const [monthlyInterest, setMonthlyInterest] = useState(0.01); // Initial monthly interest rate
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    
    const calculateMonthly = () => {
        const helper = Math.pow(1 + monthlyInterest, nMonths);
        const payment = loanAmount * ((monthlyInterest * helper) / (helper - 1));
        setMonthlyPayment(payment.toFixed(2)); // Round to two decimal places
    };

    return (
        <>
        <Parallax strength='600' bgImage={mtsummit}>
                <div className="content4">
                    <div className="title-list2">
                        <FadeInSection animationClassName="fade-in-section">
                            <h1>Mortgage</h1>
                        </FadeInSection>
                    </div>
                </div>
        </Parallax>

        <Parallax>
            <div className="list-page">
                <div className="content">
                    <div className="mort-row">

                    <div className="mort-container">
                    <FadeInSection animationClassName="fade-in-section">
                        <div className="mort-title">
                            <h1>General Mortgage Information</h1>
                        </div>
                    </FadeInSection>
                    
                        <div className="mort-desc">
                            <FadeInSection animationClassName="fade-in-section">
                                <h2>Types of Mortgages</h2>
                            </FadeInSection>
                        
                            <FadeInSection animationClassName="fade-in-section">
                                <p>There are many types of mortgages you can choose from. Which type you choose usually depends on the length of time you think you'll be in your home or the other financial obligations you have. If you think you'll be there for the long haul, then you may want a fixed rate mortgage with the lowest interest rate you can get.
    There may be other considerations, however. What if you have kids who are going to be entering college in 10 years? In that case, you might consider getting an adjustable rate mortgage or a mortgage with a balloon payment so you can keep your payments low for the first few years in order to save for college. Once the kids are out of college, you can refinance at the current rate. If you don't think you'll be in your home for that long, then you may also want to look at other options.</p>
                            </FadeInSection>

                        </div>

                    </div>
                    <div className="mort-img">
                        <img src="https://images.pexels.com/photos/8292793/pexels-photo-8292793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width='75%' height='50%'></img>
                    </div>
                    </div>
                </div>
            </div>
        </Parallax>

        <Parallax>
        <div className='list-page-color'>
            <div className="content">
                <FadeInSection animationClassName="fade-in-section">
                    <div className="mort-title">
                        <h1>Monthly Mortgage Calculator & Resources</h1>
                    </div>
                </FadeInSection>
                <div className="calc-row">
                    <div className="calculator">
                        <div className="top">
                            <h2>Monthly Mortgage Calculator</h2>
                        <form action="#">
                        <div className="group">
                            <div className="calc-title">Loan Amount</div>
                            <input
                                type="number"
                                value={loanAmount}
                                className="loan-amount"
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />
                        </div>

                        <div className="group">
                            <div className="calc-title">Months</div>
                            <input
                                type="number"
                                value={nMonths}
                                className="months-amt"
                                onChange={(e) => setNMonths(e.target.value)}
                            />
                        </div>

                        <div className="group">
                            <div className="calc-title">Monthly Interest Rate</div>
                            <input
                                type="number"
                                value={monthlyInterest}
                                className="interest-rate"
                                onChange={(e) => setMonthlyInterest(e.target.value)}
                            />
                        </div>
                        </form>
                        </div>

                        <div className="result">
                            <div className="calculated-rate">
                                <h2>Your Monthly Payment</h2>
                                <div className="value">{monthlyPayment}</div>
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button variant="outlined" sx={{':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="large" onClick={calculateMonthly}>Calculate</Button> 
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className="resources">
                        <div className="resource-container">
                            <h1>Other Resources:</h1>
                            <ul>
                                <li><a href="https://www.bankrate.com/mortgages/mortgage-calculator/">Indepth Mortgage Calculator</a></li>
                                <li><a href="https://www.bankrate.com/mortgages/mortgage-rates/#mortgage-industry-insights">Mortgage Rates</a></li>
                                <li><a href="https://www.bankrate.com/mortgages/refinance-rates/">Refiance Rates</a></li>
                                <li><a href="https://www.bankrate.com/real-estate/new-house-calculator/">Home Affordability Calculator</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Parallax>
        <Footer></Footer>
        </>
    )
}

export default Mortgage;