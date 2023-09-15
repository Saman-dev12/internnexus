import React, { Fragment, useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Popup from './Components/Popup/Popup';
// import Tech from './Components/Tech/Tech';
import Technology from './Components/Technology/Technology';
import Works from './Components/Works/Works';

function App() {

  const [popup,setPopup]=useState(false);
  

  useEffect(()=>{
    const popupTimer = setTimeout(()=>{
      setPopup(true);
    },8000)

    return ()=>{
      clearTimeout(popupTimer)
    }

  },[])

  return (
    <Fragment>
      <Header/>
      {popup && <Popup onClick={setPopup}/>}
      <Technology/>
      <Works/>
    </Fragment>
  )
}

export default App
