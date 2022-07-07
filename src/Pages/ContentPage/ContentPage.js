import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ProductList from '../../Components/Items/ProductList/ProductList';
import * as S from './style';



const ContentPage = ({ pageName, pageCategorie }) => {
    const [filteredProducts, setSilteredProducts] = useState([]);

    const { storeItems } = useContext(CartContext); 
    
    useEffect(() => {
        const filtered = storeItems.filter((product) => product.catagories.includes(pageCategorie));
        
        setSilteredProducts(filtered)

    }, [pageCategorie, storeItems])
    



    return (
        <S.ContentPageWrapper>
            <h1>{pageName}</h1>
            <ProductList productsData={filteredProducts} />
        </S.ContentPageWrapper>
    );
}

export default ContentPage;