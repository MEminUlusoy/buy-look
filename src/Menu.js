import React, { useContext } from 'react'
import Item from "./Item";
import data from "./data";
import { useState } from 'react';
import Navigation from './Navigation';
import BasketPage from './BasketPage';
import ShoppingContext from './Context';


function Menu() {
  
   
   const {baskets,setBaskets,categoriesBrand,lists,setLists,filterBrand,categoriesRam,filterRam} = useContext(ShoppingContext);
  
   const addBasket = (id) => {
        const newList = lists.find((item) => item.id === id);
        setBaskets([...baskets, newList]);   
    }
    

  return (
    <>
        
        <div className='outter-container'>
            <div className="inner-container">
                <div className="inner-left">
                    <div className="brand-container">
                        <div className="category-name">
                            <h3>Marka</h3>
                        </div>
                        <div className="category-list">
                            <ul>
                                {
                                    categoriesBrand.map((datas,index) => {
                                        
                                        return(
                                            
                                            <li> <input onClick={() => filterBrand(datas)} type="checkbox" name="" key={index} id={index}/> <label htmlFor={index}>{datas}</label> </li>
                                        );
                                    })
                                }
                                
                            
                            </ul>
                        </div>
                    </div>
                    <div className="ram-container">
                        <div className="category-name">
                            <h3>Ram Kapasitesi</h3>
                        </div>
                        <div className="category-list">
                            <ul>
                                {
                                    categoriesRam.map((ram,indRam) => {
                                        
                                        return(
                                            
                                            <li> <input onClick={() => filterRam(ram)} type="checkbox" name="" key={indRam} id={indRam + categoriesBrand.length }/> <label htmlFor={indRam + categoriesBrand.length}>{ram}</label> </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="inner-right">

                    {
                        lists.map((list)=>{
                        return(
                            <Item key={list.id} {...list} addBasket = {addBasket}/>
                        );
                        })
                    }
                
                
                </div>
            </div>
        </div>
        {/* {
            baskets.map((basket) => {
                return(
                    <BasketPage key={basket.id} {...basket}/>
                );
            })
        } */}
       
    </>
  )
}

export default Menu