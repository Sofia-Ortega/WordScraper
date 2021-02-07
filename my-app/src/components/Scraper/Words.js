import React from 'react';

export default function Words({display, getWords, data}) {

  if(!display){
    return (
      <div>
        <p>Nothing</p>
      </div>
    )
  } else {

    getWords();

    return (
      <p>{data ? data : 'Please hold'}</p>

    )
  }
}