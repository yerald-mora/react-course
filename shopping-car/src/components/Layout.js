import { Component } from "react";

const style={
    layout:{
        backgroundColor:'#fff',
        console:'#0a283e',
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
    },

    container:{
        witdth:'1200px',
    }
}

class Layout extends Component{
    render(){
        return(
        <div style={style.layout}>
            <div style={style.container}>
                {this.props.children}
            </div>
        </div>
        )
    }
}

export default Layout