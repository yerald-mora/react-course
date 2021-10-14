import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    products:[
      {name:'Tomatoe', price: 1500, img:'/products/tomatoe.jpg'},
      {name:'Pea', price: 1500, img:'/products/pea.jpg'},
      {name:'Lettuce', price: 1500, img:'/products/lettuce.jpg'},
    ],

    car:[],
  }

  addToCar = (product) => {
    const {car} = this.state

    if(car.find(i => i.name === product.name)){
      const newCar = car.map(x=> x.name === product.name ? ({
        ...x,
        quantity: x.quantity +1
      })
      :x
      );

      return this.setState({car:newCar})
    }

    return this.setState({
      car: this.state.car.concat({
        ...product,
        quantity:1,
      })
    })
  }

  render(){
    return(
      <div>
        <Navbar car={this.state.car}/>
        <Layout>
          <Title/>
          <Products
            addToCar={this.addToCar}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
