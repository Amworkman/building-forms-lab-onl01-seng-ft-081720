import React from 'react';

const Bands = props => {
  debugger
  const bandList = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>
  })

  return(
    <div>
      {bandList}
    </div>
  )
}

export default Bands;
