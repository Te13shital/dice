import React, { Component } from 'react'
import Die from './Die';
import './rollDice.css';



class RolleDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"],
        options: [
            "angry",
            "grin-beam",
            "grin-tongue-wink",
            "kiss-wink-heart",
            "laugh-beam",
            "sad-tear",
            "surprise",
            "meh-rolling-eyes",
            "grimace",
            "dizzy",
            "flushed",
            "grin-stars",
            "smile-wink",
            "meh-blank",
            "tired"
        ]
    }

    constructor(props) {
        super(props)
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false,
            icons: ["grin-beam"]
        }
    }

    roll = () => {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({
            die1: newDie1,
            die2: newDie2,
            rolling: true
        })
        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }

    addIcon=()=>{
        let id=Math.floor(Math.random()*this.state.icons.length)
        let newIcon=this.props.options[id] 
        //following is not right way to mutate/upaate state
        // let icon =this.state.icons
        // icon.push(newIcon)
        // this.setState({icons:icon})

        //right way to update state
        this.setState({icons:[...this.state.icons,newIcon]})
    }

    render() {
        const icon = this.state.icons.map((icon) => { return <i className={`fas fa-${icon}`} style={{padding:'10px', fontSize: '25px', color: 'black' }}></i> })
        return (
            <div className="rollDice">
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <div>
                    <button
                        onClick={this.roll}
                        disabled={this.state.rolling}>{this.state.rolling ? 'Rolling......' : 'Roll Dice!!!'}</button>
                </div>
                <div style={{margin:'20px'}}>
                    ICONS:{icon}
                </div>
                <div>
                    <button
                    onClick={this.addIcon}
                    > ADD ICONS...</button>


                </div>
            </div>

        )
    }
}

export default RolleDice