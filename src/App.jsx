import './index.css'
import React from 'react'
import Item from './Components/item'
import Cart from './Components/Cart'
const App = () => {
  return (
    <div>
      <div className='app'>
        <Item name="Mac Book Pro" price={50000} />
        <Item name="HP Laptop" price={20000} />
        <Item name="Mobile" price={10000} />

      </div>
      <div>
        <Cart />
      </div>
    </div>
  )
}

export default App
