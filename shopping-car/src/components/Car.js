import { Component } from "react";
import BubbleAlert from './BubbleAlert'

const styles = {
    car:{
        backgroundColor:'#359a2c',
        color:'#fff',
        border:'none',
        padding:'15px',
        borderRadius:'15px',
        cursor:'pointer'
    },
    bubble:{
        position:'relative',
        left:12,
        top:20
    }
}

class Car extends Component{
    render(){
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert/>    
                </span>
                <button style={styles.car}>
                    Car
                </button>
            </div>
        )
    }
}

export default Car