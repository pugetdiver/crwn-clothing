import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categories = await getCollectionAndDocuments();
           setCategoriesMap(categories);      
        }
        getCategoriesMap();
      
    }, [])

    const value = { categoriesMap };



    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}