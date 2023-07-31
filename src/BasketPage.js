import React, { useContext } from 'react'
import ShoppingContext from './Context';
import Navigation from './Navigation';
import Message from './Message';

function BasketPage() {

  const {baskets,setBaskets,emptyBasket,removeBasket,sums,setSums,shoppingSum,clicked,setClicked} = useContext(ShoppingContext);


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
              const {id,brand,ram,desc,cost,img,color,clicked,setClicked} = basket
              return(
                <div key={ind} className="basket-item-container" >

                  <div className="basket-item-left">

                    <input type="checkbox" onClick={()=> {
                      shoppingSum(id);
                     }}  
                    name="" 
                    id={id} 
                    />
                    
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