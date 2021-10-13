import { Component } from "react";
import Product from './Product'

const styles={
    products:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
}

class Products extends Component{
    render(){
        const {products, addToCar} = this.props

        return(
            <div style={styles.products}>
                {products.map(p=>
                    <Product
                        addToCar={addToCar}
                        key={p.name}
                        product={p}
                        />
                    )}
            </div>
        )
    }
}

export default Products