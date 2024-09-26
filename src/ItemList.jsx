import {useState,useEffect} from "react";
function Item({ name, isPacked = false }) {
    return (<li>
        {name} {isPacked && '🗹'}
    </li>);
}

export default function ItemList() {
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this component is lpaded!");

        return()=>{
              alert("component is uploaded")
        };
    }, );


    const items = [{ name: "Sunglasses", isPacked: false },
        {name:"Sunbath",isPacked:true},
        {name:"Swimming suit",isPacked:false},
        { name: "Powerbank", isPacked: true }];

    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()))   
    const itemsList = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);
    return (<>
        <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
        <ui>
            {itemsList}
    </ui></>)
}