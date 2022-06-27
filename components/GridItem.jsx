import React from "react";

const GridItem = ({name, category, className}) => {			
    return (
    <div className={className}>
        <div className="grid__item-category">{category}</div> 
        <div className="grid__item-name">{name}</div> 
    </div>						
    );
};

export default GridItem;