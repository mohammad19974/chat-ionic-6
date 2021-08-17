import React from 'react'

const BalonMe:React.FC<any>=({message,file,showImgZoom,location,showModelMap})=>{

return(      <div className="card bg-sohbet border-0 m-0 p-0">
<div
  id="sohbet"
  className="card border-0 m-0 p-0 position-relative bg-transparent"
>

    <div
      className="balon1 p-2 m-0 position-relative"
      style={{position:"relative"}}
 /*      data-is={moment(props.DataMesg.created_at).format(
        "MMM Do YYYY, h:mm:ss"
      )} */
    >
      <a className="float-right">
        mohammad
        </a>
    </div>
 

    </div>


</div>)

}
export default React.memo(BalonMe)