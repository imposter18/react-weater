import React,{useRef, useEffect, useState} from "react";
import SearchList from "./searchList";

 
export default function Header ({updateItem,cityData, updateCurrentCity}){
    
    let[ searchVisible, updateSearchVisible] = useState(false)
    // console.log(searchVisible)

    let data = []
    for( let i = 0; i < cityData.length ; i++){
        data.push(cityData[i])
    }
    let searchRef = useRef();

    const updateVisible = () => {
        updateSearchVisible(!searchVisible)
    }

    const clickOutSide = (e) =>{
        if(!e.path.includes(searchRef.current)){
            updateSearchVisible(false)
            // console.log('outside')
        }
    }
    useEffect(()=>{
        document.body.addEventListener('click', clickOutSide)
    }, [])
    return(
        
        <div className="headerWrapper">
        <header>
            <div className="header">
                <div className="haeder__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF6347"
                        className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                    </svg>
                </div>
                <nav  className="header__nav">
                    <div ref={searchRef} class="input-group rounded">
                        <input id='cityInput' onInput={(e)=>updateItem(e.target.value)} 
                        onClick={updateVisible}
                        type="text" className="form-control rounded" placeholder="Search" 
                        aria-label="Search" aria-describedby="search-addon" />
                        <span  id="search-addon">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>

                    {searchVisible && <div className={`list-group fallOfMenu ${data.length > 2 ? "isActive" : ""}`}>
                        {data.map((data, index) => 
                            <SearchList onClick={(lat,lon)=>updateCurrentCity([lat, lon])}
                            className="searchList" 
                            key={`${data.name}_${index}`} data={data}></SearchList>
                        )} 
                    </div>}

                </nav>
                <div className="header__choose">
                        
                    <div className="header__choose--lang">
                        RU |
                    </div>
                    <div className="header__choose--deg">
                        C
                    </div>
                </div>
            </div>
        </header>
    </div>
    )
}