// export function App () {
//   //document.createElement...
//   return (<h1>Hola Mundo!!!</h1>)
// }
import React from 'react'
import Proptypes from 'prop-types'



export const FirstApp = ({title, subtitle}) => {

  
  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
  )
}
FirstApp.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.number.isRequired,
}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  name: 'David Pizarro'
}
