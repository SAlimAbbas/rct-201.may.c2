import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from './Components/eye.svg'
import { useState } from "react";

import './App.css';



function App() {
  const [value,setValue]=useState("")
  const [visible,SetVisible]=useState(true);
  const onChange=(e)=>{
    setValue(e.target.value);
  }

  const rightClick=()=>{
    SetVisible(!visible);
  }

  let sm=14;
  let md=16;
  let lg=20;
  let xl=32;

  return (
    <div className="App">
      <Input  type={visible?"text":"password"} size={xl}  rightLogo={Eye} varient={"filled"}  onChange={onChange} rightLogoOnClick={rightClick}/>

     <Image  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLEziy2FWAM6Z0NT0yTmsmD2VySobPG4y7eWSEd4heKgu-cU0WCZLxn5Poox0Y9KYmyc&usqp=CAU"} alt={"dummyImg"} borderRadius={100} width={75} height ={75} fit={"cover"}/>

     <Pagination total={11} />
    </div>
  );
}

export default App;
