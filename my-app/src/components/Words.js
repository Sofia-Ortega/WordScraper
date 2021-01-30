import React from 'react';

export default function Words({display}) {
  if(!display){
    return (
      <div>
        <p>Nothing</p>
      </div>
    )
  } else {
    return(
      <div>
        <p>Displaying</p>
      </div>
    )
  }
}