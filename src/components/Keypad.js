
 function EnteringPassword(){
     console.log('Entering password...')
 }

 function Keypad (){
     return (
         <div>
             <input type="password" onChange={EnteringPassword}></input>
         </div>
     )
 }

export default Keypad;
