import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail =()=>{

    const[itemInfo, setItemInfo] = useState({});
    const{id} = useParams();

    useEffect(()=>{
        fetchDetail();
    },[])

    const fetchDetail = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products/"+id);
        const json = await data.json();
        console.log(json);
        setItemInfo(json);
    }

    return(
        <div>
            <h2>Item</h2>
            <img src={itemInfo.image}></img>
                  <h2>{itemInfo.title}</h2>
            <h3> Rs.{itemInfo.price}</h3>
            <h5>Category : {itemInfo.category}</h5>
            {/* <h4>Rating : {itemInfo.rating.rate} Star</h4> */}
            <p>{itemInfo.description}</p>
        </div>
    )
}
export default ItemDetail;