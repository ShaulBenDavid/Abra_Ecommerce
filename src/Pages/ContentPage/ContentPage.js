import React, { useEffect, useState } from 'react';
import ProductList from '../../Components/Items/ProductList/ProductList';
import * as S from './style';



const ContentPage = ({ productsData, pageName, pageCategorie }) => {
    const [filteredProducts, setSilteredProducts] = useState([]);
    
    useEffect(() => {
        const filtered = productsData.filter((product) => product.catagories.includes(pageCategorie));
        
        setSilteredProducts(filtered)

    }, [pageCategorie, productsData])
    



    return (
        <S.ContentPageWrapper>
            <h1>{pageName}</h1>
            <ProductList productsData={filteredProducts} />
        </S.ContentPageWrapper>
    );
}

export default ContentPage;