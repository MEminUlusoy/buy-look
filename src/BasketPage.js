import React, { useContext } from 'react'
import ShoppingContext from './Context';
import Navigation from './Navigation';
import Message from './Message';

function BasketPage() {

  const {baskets,emptyBasket,removeBasket,sums,increase,decrease,amount} = useContext(ShoppingContext);



  return (
    <div>
      <div className="basket-header">
        <h3>Sepetim <span>({baskets.length} ürün)</span></h3>
        <p onClick={emptyBasket}>Ürünleri Sil</p>
      </div>

      <div className="basket-main-container">
        
        <div className="basket-container">
          {
            baskets.length === 0 ? <Message/> :

            baskets.map((basket,ind) => {
              const {id,ram,desc,cost,img,color} = basket;
              return(
                <div key={ind} className="basket-item-container" >

                  <div className="basket-item-left">
                  
                    <div className="button-container">
                      <button className='inc-button'  onClick={() => increase(id)}>+</button>
                      <p>{amount}</p>
                      <button className='dec-button' onClick={() => decrease(id)}>-</button>
                    </div>

                    <div className="basket-item-image">
                      <img src={img} alt="" />
                    </div>

                  </div>

                  <div className="basket-item-right">

                    <div className="basket-item-right-top">
                      <div className="basket-item-desc">
                        <p>{desc}</p>
                        <p className='small-p'>{color}/{ram}</p>
                        
                      </div>
                    </div>
                    <div className="basket-item-right-bottom">
                      
                      <p>{cost}</p> 
                      <button onClick={() => removeBasket(id)}>Sepetten Çıkar</button>    

                    </div>
                  </div>  
                 
                </div>

              );
            })
            
          }
          

        </div>
        
        {baskets.length > 0 &&
          <div className="cost-card-outter-container">
         
            <div className="cost-card-container">
              <div className="cost-select">
                <p>SEÇİLEN ÜRÜNLER ({baskets.length})</p>
              </div>
              <div className="cost">
  
                <p>{sums}<span>TL</span></p>
                  
                
              </div>
              <div className="cost-button">
                <button>Alışverişi tamamla</button>
              </div>
            </div>
          </div>   
        }
         
        

      </div>
 
    </div>
  )
}

export default BasketPage