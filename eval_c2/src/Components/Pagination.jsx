import { useRef } from "react";


export const Pagination = ({ total, selected, onPageChange }) => {
  
  const inputRef=useRef([]);
  return <div className="pageContainer" style={{display:"flex"}}>
    {/* <div style={{width:"100px",height:"50px",border:"solid black 1px"}} onClick={()=>{}}>
       
        {"<"}
    </div> */}

    { new Array(total+1).fill(0).map((elem,i)=>(
        <div style={{width:"100px",height:"50px",border:"solid black 1px"}} ref={(element)=>{inputRef.current[i]=element}}>{i==0?"<":i==total+1?">":i}</div>
    ))}


    <div style={{width:"100px",height:"50px",border:"solid black 1px"}}>{">"}</div>
  </div>;
};
