

// let plusone=function(number){
//  let nums=  Number(number.join(""))+1
//  console.log(nums);
 
//   return nums.toString().split("").map(Number)
// }

// console.log(plusone([1,2,3]))


// var reverseWords = function(s) {
//   return s.trim().split(/\s+/).reverse().join(" ");

// };


// function findLUSlength(a, b) {
//   return a === b ? -1 : Math.max(a.length, b.length);
// }
 
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextContext from "./Textcontext"; 

function Text() {
  const navigate = useNavigate();
  const { setText } = useContext(TextContext); 
  const {setdata}=useContext(TextContext)
  return (
    <div>
      <input 
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <textarea rows={4} placeholder="Type something"
      
      onChange={(e)=>setdata(e.target.value)}
      ></textarea>
      <button onClick={() => navigate("/")}>Submit</button>
    </div>
  );
}

export default Text;

