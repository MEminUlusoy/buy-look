import { createContext,useReducer,useState } from "react";
import data from "./data";
import reducer from "./reducer";

const ShoppingContext = createContext();


export const ShoppingContextProvider = ({children}) => {

    const [baskets,setBaskets] = useState([]);
    const [sums,setSums] = useState(0);
    const [clicked,setClicked] = useState(1);
    const categoriesBrand = [...new Set(data.map((datas) => datas.brand))];
    const categoriesRam = [...new Set(data.map((datas) => datas.ram))]
    const [count, setCount] = useState(0);
    const [lists,setLists] = useState(data);
    const [brandClicked,setBrandClicked] = useState(true);
    const [filterClicked,setFilterClicked] = useState(true);

     

   

    const filterBrand = (brand) => {

        if(brandClicked){
            const filterItem = lists.filter((item) => item.brand === brand);
            setLists(filterItem); 
            setBrandClicked(false);
        }else{
            
            setLists(data);
            setBrandClicked(true);
        }

        
    }


    const filterRam = (ram) => {

        if(filterClicked){
            const filterR = lists.filter((item) => item.ram === ram);
            setLists(filterR); 
            setFilterClicked(false);
        }else{
            
            setLists(data);
            setFilterClicked(true);
        }

        
    }

    const emptyBasket = () => {
        return setBaskets([]);
        
    }

    const removeBasket = (id) => {
        const removeItem = baskets.filter((item) => item.id !== id);
        return setBaskets(removeItem);
    }


    const increase = (id) => {
        dispatch({type:'INCREASE', payload:id});

    }

    const decrease = (id) => {
        dispatch({type:'DECREASE', payload:id});

    }

       
    const initialState = {
        cart: data,
        total: 0,
        amount: 0,
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const values = {
        ...state,
        baskets,
        setBaskets,
        emptyBasket,
        removeBasket,
        sums,
        setSums,
        clicked,
        setClicked,
        categoriesBrand,
        lists,
        setLists,
        filterBrand,
        categoriesRam,
        filterRam,
        increase,
        decrease,
    };

    return(
        <ShoppingContext.Provider value={values}>{children}</ShoppingContext.Provider>
    );

}

export default ShoppingContext;