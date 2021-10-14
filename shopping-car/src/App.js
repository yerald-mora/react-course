import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'

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
        <Layout>
          <Products
            addToCar={()=>console.log('No hace nada')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
