import React, { Component } from "react";

class Otp extends Component {
    constructor() {
        super();
        this.state = { otp: "" }; 
    }

    generator = () => {
        let str = "0123456789";
        let str3 = "";
        for (let i = 1; i <= 6; i++) {
            let index = Math.floor(Math.random() * str.length); 
            str3 += str[index]; 
        }
        return str3; 
    };

   
    handler = () => {
        const newOtp = this.generator(); 
        this.setState({ otp: newOtp }); 
    };

    render() {
        return (
            <>
                <button onClick={this.handler} style={{marginLeft:"580px",marginTop:"90px"}}>Click to Generate OTP</button>
                <h1 style={{marginLeft:"580px",marginTop:"30px"}}>{this.state.otp}</h1>
            </>
        );
    }
}

export default Otp;


