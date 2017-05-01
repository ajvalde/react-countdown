import React, { Component } from 'react';
inport './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    render(){
        <div>
            <div className='clock-days'>{this.state.days} Days</div>
            <div className='clock-hours'>{this.state.hours} Hours</div>
            <div className='clock-minutes'>{this.state.minutes} Minutes</div>
            <div className='clock-seconds'>{this.state.seconds} Seconds</div>
       </div>
       
    }
}

export default Clock;