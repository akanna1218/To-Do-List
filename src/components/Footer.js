import React from 'react'

const Footer = ({Items}) => {
  return ( 
<footer>

    <p>
      {` You Have  ${Items.length} pending task .`}
    </p>

  </footer>  )                                             }

export default Footer