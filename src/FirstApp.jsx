// export function App () {
//   //document.createElement...
//   return (<h1>Hola Mundo!!!</h1>)
// }
import React from 'react'
import Proptypes from 'prop-types'



export const FirstApp = ({title, subtitle, name}) => {

  
  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <p>{name}</p>
    </>
  )
}
FirstApp.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay titulo',
  name: 'David Pizarro'
}
