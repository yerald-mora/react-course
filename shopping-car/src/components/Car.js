import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import CarDetails from './CarDetails'

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
        const {car, isVisibleCar, showCar} = this.props;
        const quantity = car.reduce((acc,el) => acc + el.quantity,0);
        const showBubble = (quantity!==0)

        console.log(isVisibleCar);

        return(
            <div>
                <span style={styles.bubble}>
                    {showBubble ? <BubbleAlert value={quantity}/> : null}
                </span>
                <button onClick={showCar} style={styles.car}>
                    Car
                </button>
                {isVisibleCar ? <CarDetails car={car}/>: null}
            </div>
        )
    }
}

export default Car