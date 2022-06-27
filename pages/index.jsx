import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import Header from 'components/header'
import GridItem from 'components/GridItem'

let categories = [
    { name: "SOFA", category: "Design", className: "grid__item img1" },
    { name: "KeyBoard", category: "Branding", className: "grid__item img2" },
    { name: "Work Media", category: "Illustration", className: "grid__item img3" },
    { name: "DDDone", category: "Motion", className: "grid__item img4" },
    { name: "Abtract", category: "Design", className: "grid__item img5" },
    { name: "HandP", category: "Branding", className: "grid__item img6" },
    { name: "Architect", category: "Motion", className: "grid__item img7"},
    { name: "CalC", category: "Design", className: "grid__item img8" },
    { name: "Sport", category: "Branding", className: "grid__item img9" },
    // Load More
    { name: "A", category: "Motion", className: "grid__item img7"},
    { name: "C", category: "Design", className: "grid__item img8" },
    { name: "S", category: "Branding", className: "grid__item img9" },
    { name: "A", category: "Motion", className: "grid__item img7"},
    { name: "C", category: "Design", className: "grid__item img8" },
    { name: "S", category: "Branding", className: "grid__item img9" },
    { name: "A", category: "Motion", className: "grid__item img7"},
    { name: "C", category: "Design", className: "grid__item img8" },
    { name: "S", category: "Branding", className: "grid__item img9" },
];

const Index = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [visible, setVisible] = useState(9);

    useEffect(() => {
        setCategoryList(categories);
    }, []);
    var filteredList = useMemo(getFilteredList, [selectedCategory, categoryList]);

    const showMoreItems = () => {
        setVisible((visible) => visible + 9);
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    function getFilteredList() {
        if (!selectedCategory) {
          return categoryList;
        }
        return categoryList.filter((item) => item.category === selectedCategory);
    }
    
    return (
        <>
            <Head>
                <title>Jupiter Task</title>
            </Head>

            <div className="background-primary">
                <Header/>
                <div className="section__start">
                    <h1 className="section__start-header">Portfolio</h1>
                    <span className="section__start-text">Agency provides a full service range including technical skills, design, business <br></br> understanding.</span>
                </div>
            </div>
            <div className="background-secondary">
                <div className="tabs__menu">
                    <option className="tab" onClick={handleCategoryChange} style={{color: selectedCategory == "" ? "#4de248" : "" }} value="">Show All</option>
                    <option className="tab" onClick={handleCategoryChange} style={{color: selectedCategory == "Design" ? "#4de248" : "" }} value="Design">Design</option>
                    <option className="tab" onClick={handleCategoryChange} style={{color: selectedCategory == "Branding" ? "#4de248" : "" }} value="Branding">Branding</option>
                    <option className="tab" onClick={handleCategoryChange} style={{color: selectedCategory == "Illustration" ? "#4de248" : "" }} value="Illustration">Illustration</option>
                    <option className="tab" onClick={handleCategoryChange} style={{color: selectedCategory == "Motion" ? "#4de248" : "" }} value="Motion">Motion</option>
                </div>
                <div className="layout__grid-items">
                {filteredList.slice(0, visible).map((element, index) => (
                    <GridItem {...element} key={index} />
                ))}
                </div>              
                <div className="section-load__more">
                    <button className="load__more-button" onClick={showMoreItems}>Load More</button>
                </div>
            </div>
        </>
    )
}

export default Index;