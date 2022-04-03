export default  function SearchList({className, data, onClick}){
    let name
     if(data.hasOwnProperty("local_names") && data.local_names.hasOwnProperty("ru") ){
        name = data.local_names.ru
    } else {
        name = data.name
    }
    return(
        <button href="#" className={`list-group-item list-group-item-action ${className}`} onClick={()=> onClick(data.lat, data.lon)} >
            <span>
            {name}
            </span>
            <span>
            {data.country}
            </span>
        </button>
    )

}
