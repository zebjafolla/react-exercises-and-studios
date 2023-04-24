import Button from './Button';
import oceans from './oceans.json';

function Profile()
{
   const listItem = oceans.map(ocean =>
      <div key={ocean.id} className="profile" >
      
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h1>{ocean.name}</h1>

      <h3>Fun Facts:</h3>
      <ul>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ul>
      <Button />
      </div>
      );
   return(
      <ul>
         {listItem}
      </ul>  
   );
}

// function Profile()
// {
//    return(
//       <>
//          <h3>Coming Soon! Profiles of Ocean creatures</h3>
//          <Button />
//       </>  
//    );
// }

export default Profile;