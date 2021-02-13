import React from 'react';

export default function Words({display, data}) {

  if(!display){
    return (
      <div>
        <p>Nothing</p>
      </div>
    )
  } else {

    return (
      <p>{data ? data : 'Please hold'}</p>
    )
  }
}