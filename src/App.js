import React, { Fragment, useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Popup from './Components/Popup/Popup';

function App() {

  const [popup,setPopup]=useState(false);
  

  useEffect(()=>{
    const popupTimer = setTimeout(()=>{
      setPopup(true);
    },5000)

    return ()=>{
      clearTimeout(popupTimer)
    }

  },[])

  return (
    <Fragment>
      <Header/>
      {popup && <Popup onClick={setPopup}/>}
    </Fragment>
  )
}

export default App
