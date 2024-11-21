import { collection,  getDocs } from 'firebase/firestore';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { firestore } from '../Firebase/Firebase';

const ProductContext = createContext();

const useProduct = () => {
    return useContext(ProductContext);
};


const ProductProvider = ({ children }) => { 

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const prodDocRef = collection(firestore, "products");
                const prodDocs = await getDocs(prodDocRef);
                const prodList = prodDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
                const brandDocRef = collection(firestore, "brands");
                const brandDocs = await getDocs(brandDocRef);
                const brandList = brandDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
                const categoryDocRef = collection(firestore, "categories");
                const categoryDocs = await getDocs(categoryDocRef);
                const categoryList = categoryDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
                setProducts(prodList);
                setBrands(brandList);
                setCategories(categoryList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchAllData();
    }, []);
    

    
    return (
        <ProductContext.Provider value={{products, brands, categories}}>
            {children}
        </ProductContext.Provider>
    );

}

export {useProduct, ProductProvider}