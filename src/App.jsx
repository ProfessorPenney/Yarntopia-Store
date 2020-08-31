import React, { useState } from 'react'
import './App.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import ProductGrid from './components/ProductGrid'
import SearchBar from './ui/SearchBar'

function App() {
   const [totalInv, settotalInv] = useState(initialInventory)
   const [visibleInv, setvisibleInv] = useState(totalInv.slice(0, 6))

   return (
      <div>
         <div className='App'>
            <Header />
            <div className='container'>
               <SearchBar
                  settotalInv={settotalInv}
                  setvisibleInv={setvisibleInv}
                  inventory={initialInventory}
               />
               <ProductGrid
                  visibleInv={visibleInv}
                  totalInv={totalInv}
                  setvisibleInv={setvisibleInv}
               />
            </div>
         </div>
         <Footer />
      </div>
   )
}

const initialInventory = [
   {
      id: 1,
      title: 'Pin Cushion',
      img: '1',
      description: 'Adorable pin cushions to store all your pins!',
      price: 80,
      search: ['cute', 'pink', 'red', 'blue', 'pin cushion']
   },
   {
      id: 2,
      title: 'Yellow Sweater',
      img: '2',
      description: 'Hideous yellow sleeveless sweater',
      price: 200,
      search: ['ugly', 'sweater', 'yellow', 'clothing']
   },
   {
      id: 3,
      title: 'Gray Sweater, sleeveless',
      img: '3',
      description: 'this is an amazing product',
      price: 50,
      search: ['gray', 'grey', 'sweater', 'clothing', 'ugly']
   },
   {
      id: 4,
      title: 'Rainbow? socks',
      img: '4',
      description: 'Terrifying socks for you',
      price: 30,
      search: ['socks', 'rainbow', 'yellow', 'blue', 'red', 'green', 'clothing', 'ugly']
   },
   {
      id: 5,
      title: 'Bird',
      img: '5',
      description: 'Woodpecker-like bird',
      price: 60,
      search: ['bird', 'red', 'white', 'blue', 'cute', 'animal']
   },
   {
      id: 6,
      title: 'Hipster Octopus',
      img: '6',
      description: 'Super sophisticated octopus',
      price: 1000,
      search: ['octupus', 'brown', 'mustache', 'cute', 'hipster', 'animal']
   },
   {
      id: 7,
      title: 'Cat Lady',
      img: '7',
      description: 'Human feline monstrosity',
      price: 3,
      search: ['cat', 'red', 'blue', 'white', 'pink', 'animal', 'ugly']
   },
   {
      id: 8,
      title: 'Happy Meal',
      img: '8',
      description: 'Your life is complete now',
      price: 6.99,
      search: ['food', 'red', 'yellow', 'white', 'green', 'happy meal', 'burger', 'fries', 'cute']
   },
   {
      id: 9,
      title: 'Mask',
      img: '9',
      description: 'Furry goat? mask. What sweater is he wearing.. Possibly also handmade',
      price: 125,
      search: ['scary', 'blue', 'brown', 'red', 'animal', 'clothing']
   },
   {
      id: 10,
      title: 'Yellow Flower',
      img: '10',
      description: 'This flower is yellow',
      price: 12,
      search: ['cute', 'flower', 'yellow']
   },
   {
      id: 11,
      title: 'Baby Shoes',
      img: '11',
      description: 'Shoes for your favorite baby that will not protect their feet at all',
      price: 40,
      search: ['cute', 'clothing', 'shoes', 'pink', 'gray', 'grey', 'baby']
   },
   {
      id: 12,
      title: 'Dinosaur',
      img: '12',
      description: 'Triceratops',
      price: 150,
      search: ['cute', 'dinosaur', 'anima', 'blue', 'yellow', 'red', 'rainbow']
   },
   {
      id: 13,
      title: 'Bunnies',
      img: '13',
      description: 'A cute pair of bunnies with whiskers',
      price: 5,
      search: ['cute', 'rabbit', 'bunny', 'animal', 'gray', 'grey', 'pink']
   }
]

export default App
