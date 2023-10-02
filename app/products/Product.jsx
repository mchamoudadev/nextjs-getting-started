import React from 'react';

const items = [{ name: "producOne" }, { name: "pro" }];


const Product = () => {
    return (
        <div>{
            items.map(item => (
                <h1>{item.name}</h1>
            ))
        }</div>
    );
};

export default Product;