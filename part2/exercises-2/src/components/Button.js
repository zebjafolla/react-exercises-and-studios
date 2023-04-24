function Button() {

   function onLearnMore(){
      alert("Splish Splash!");
      };   

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

// function Button() {

//    return ( 
//          <button>
//             Learn More
//          </button>
//    );
// }

export default Button;


//why did i write this that way?
//https://react.school/ui/button