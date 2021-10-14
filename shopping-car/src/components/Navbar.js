import { Component } from "react";

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
        return(
            <nav style={styles.navbar}>
                <p>Logo</p>
                <p>Car</p>
            </nav>
        )
    }
}

export default Navbar