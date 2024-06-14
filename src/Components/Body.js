import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";



const Body = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(items); // Log items whenever they change
    }, [items]);

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        console.log(json); // Log the fetched data
        setItems(json);
    };

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="item-container">
                {items.map((item) => (
                  <Link to={"/items/1"}  key={item.id} ><ItemCard  item={item.title} /></Link>
                ))}     
            </div>
        </div>
    );
};

export default Body;





// import { useEffect, useState } from "react";
// import ItemCard from "./ItemCard"

// const Body = ()=>{

//     const[items, setItems] = useState([]);

//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const fetchData = async() =>{
//         const data = await fetch("https://fakestoreapi.com/products");

//         const json = await data.json();
//         console.log(json);
        
//         setItems(json);
        
//     }
//     console.log(items);
    
//     return(
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="item-container">
//                 {items.map((item)=>(
//                     <ItemCard key={item.id} items={item} />
//                 ))}
                
//                 <ItemCard itemName="Shirt" />
//             </div>
//         </div>
//     )
// }

// export default Body;






// /*









// import { useEffect, useState } from "react";
// import ItemCard from "./ItemCard";

// const Body = () => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     useEffect(() => {
//         console.log(items); // Log items whenever they change
//     }, [items]);

//     const fetchData = async () => {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const json = await response.json();
//         console.log(json); // Log the fetched data
//         setItems(json);
//     };

//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="item-container">
//                 {items.map((item) => (
//                     <ItemCard key={item.id} item={item} />
//                 ))}
//                 <ItemCard itemName="Shirt" /> 
//                 </div>
//                 </div>
//             );
//         };
        
//         export default Body;
        
        
// */