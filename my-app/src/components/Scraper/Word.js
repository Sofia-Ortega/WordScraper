import React from 'react';

export default function Word({wordCombo, count}) {

  return(
    <p>{count}, {wordCombo.french}, {wordCombo.english}</p>
  )


}