import React from 'react'
import loadingImage from './images/loader.gif'

const Loader = () =>{
  return(
    <div style={{textAlign :'center', marginTop: '65px'}}>
      <img src={loadingImage} alt='Loading'/>
    </div>
  )
}

export default Loader