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
    isVisbleCar:false
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
  
  showCar = () => {
    if(!this.state.car.length){
      return
    }
    this.setState({isVisbleCar:!this.state.isVisbleCar});
  }

  render(){
    const{products, car, isVisbleCar: isVisibleCar} = this.state;

    return(
      <div>
        <Navbar 
          car={car} 
          isVisibleCar={isVisibleCar} 
          showCar = {this.showCar}
          />
        <Layout>
          <Title/>
          <Products
            addToCar={this.addToCar}
            products={products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
