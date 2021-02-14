import React from 'react';
import Word from './Word';

export default function Words({display, data}) {
  let count = 0;

  if(!data){
    return (
      <div>
        <p>Nothing</p>
      </div>
    )
  } else  {
    return(
      <div>
        <p>in the else statement</p>
        <div>
          { data.map((wordCombo) => (
            count = count + 1,
            <Word key={count} wordCombo={wordCombo} count={count}/>

          ))
          }
        </div>

      </div>
    );
  }
}