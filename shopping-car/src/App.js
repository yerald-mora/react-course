import { Component } from 'react'
import Products from './components/Products'
class App extends Component{
  state = {
    products:[
      {name:'Tomatoe', price: 1500, img:'/products/tomatoe.jpg'},
      {name:'Pea', price: 1500, img:'/products/pea.jpg'},
      {name:'Lettuce', price: 1500, img:'/products/lettuce.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <Products
          addToCar={()=>console.log('No hace nada')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
