import React from 'react'

const heading = {
  'fontFamily': 'Comfortaa',
  'fontSize': '2.5vw',
  'textAlign': 'center',

  'padding': '5vh 1vw 5vh 1vw',
  'boxShadow': '10px 1px 0.5rem rgba(0,0,0,0.5)',
  'marginBottom': '5vh',
}

function Header() {
  return(
    <div style={heading}>
      <h1>Get Top 1000 Words</h1>
    </div>
  )
}

export default Header;