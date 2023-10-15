
import { createContext, useEffect, useState } from "react";
import useLocalStorageState from 'use-local-storage-state';
export const ProductsContext = createContext({});

export function AddTocartContext({ children }) {

  const [cart, setCart] = useState(0);

    return (<>   
      <ProductsContext.Provider value={{cart}}>{children}</ProductsContext.Provider>
      
      </>
    );
  };
  