import { useState } from "react";
import './lottery.css';
export default function Lottery() {
   let [ticket,setticket]=useState(0);
     let [won, setWon] = useState(false); // for tracking win status

   let  random=()=>{
       setticket(Math.round(Math.random()*1000));
       
    // let ticket=555;
    // let ticket = ran.toString().padStart(3, '0'); // ensures it's always 3 digits

    // setran[ran];
    console.log("random");
    console.log(ticket);
    let sum=0;
    while(ticket>0){
        let r=ticket%10;
        sum=sum+r;
        ticket=Math.floor(ticket/10);
    }
    console.log(sum);
    if(sum==15){
     console.log("you have wone the lottery");
setWon(true) ;  
 }
//  else{
//         console.log("sorry generate another ticket");
//         setWon(false) ;  

//     }
    };
    let style={backgroundColor:won===true?"rgb(225, 223, 223)":"#f3edeb",color:won===true?"F8F8F7":"e0795a"}

    return (<>
<div className="body">
    <h1>Lottery Ticket</h1>
    {won==true?<h3 className="lottrey">Lottery 'Congratulation you have won the lottery'</h3>:<p>Sorry Better Luck Next Time</p>}
    <h3>Lottery Ticket={ticket}</h3>
    <button onClick={random} disabled={won==true} style={style} >Get new Ticket</button>
</div>
    
    </>)
}