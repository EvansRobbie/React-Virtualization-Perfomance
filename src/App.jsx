
import { useState } from 'react'
import './App.css'



function App() {
  const [count, _setCount] = useState(1_000)
  const [scrollTop, setScrollTop] = useState(0)
  const itemHeight = 30
  const windowHeight = 500
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) -3)
  const endIndex = Math.min(Math.floor((scrollTop + windowHeight)/ itemHeight) + 3, count)
  const innerHeight = count* itemHeight
  const items = Array.from({length :count}, (_, i) =>{
  return{
    index: i+1,
    name: `movie ${i + 1}`,
  }
  } )
  const displayItems = items.slice(startIndex, endIndex)
  const displayMovies = displayItems.map((item)=>{
    return(
      <div 
      key = {item.index} 
      style={{
        height: itemHeight,
        position: 'absolute', 
        width: '100%',
        top: `${item.index * itemHeight}px `
        }}>
        {item.name}
      </div>
    )
  })
  const onScroll = (e) =>{
    // console.log(e.currentTarget.scrollTop)
    setScrollTop(e.currentTarget.scrollTop)
  }
  return (
    <div className="App">
      <div 
      className='outerbox' 
      style={{
        width:300,
        height: windowHeight ,
        overflowY: 'scroll',
        margin : '0 auto'
        }} onScroll = {onScroll}>
        <div className='innerbox' style={{position: 'relative', height: innerHeight}}>

           {displayMovies}
        </div>
      </div>
      
    </div>
  )
}

export default App
