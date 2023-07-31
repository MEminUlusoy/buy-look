import React, { useState } from 'react'

function Item({id,brand,ram,desc,cost,img,addBasket}) {

  const [show,setShow] = useState(false);
  // onMouseOver={()=>setShow(show ? show === true : show === false)} onMouseLeave={()=>setShow(show && show === false)}
  return (
    <div className="item-container" >
        <div className="item-image">
            <img src={img} alt="" />
        </div>
        <div className="item-desc">
            <p>{desc}</p>
        </div>
        <div className="item-cost">
            <p>{cost} TL</p>
        </div>
        <div className="button-cont">
            <button onClick={() => addBasket(id)}>Sepete Ekle</button>
        </div>
       {/*  {
            show &&
            <div className="button-cont">
                <button onClick={addBasket(id)}>Sepete Ekle</button>
            </div>
        }
         */}
    </div>
  )
}

export default Item