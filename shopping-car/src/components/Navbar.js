import { Component } from "react";
import Logo from './Logo'
import Car from './Car'

const styles ={
    navbar:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:'100px',
        position:'relative',
        padding:'0 50px',
        boxShadow:'0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component{
    render(){
        const {car, isVisibleCar, showCar} = this.props

        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Car 
                    car={car}
                    isVisibleCar={isVisibleCar}
                    showCar={showCar}
                />
            </nav>
        )
    }
}

export default Navbar