export default function BookList() {
   let pageTitle = "Books Ive Read";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/TheLeftHandOfDarkness1stEd.jpg/220px-TheLeftHandOfDarkness1stEd.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/TheDispossed%281stEdHardcover%29.jpg/220px-TheDispossed%281stEdHardcover%29.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/TheNameoftheWind_cover.jpg/220px-TheNameoftheWind_cover.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Picture of the book cover of Left Hand of Darkness by Ursula K Leguin" />
         <img src={book2} alt="Picture of the book cover of The Dispossed by Ursula K Leguin" />
         <img src={book3} alt="Picture of the book cover of The Name of The Wind by Patrick Rothfuss" />
      </div>      
   );
}