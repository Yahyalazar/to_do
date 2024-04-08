import React from 'react'
function FirstComp({data,fn}) {
  return (
    <div>
        <button onClick={()=>fn(data+10)}>inc10</button>
        <button onClick={()=>fn(data-10)}>dec10</button>
        <h4>{data}</h4>
    </div>
  )
}

export default FirstComp;