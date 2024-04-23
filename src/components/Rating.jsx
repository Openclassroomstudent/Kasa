import React from 'react';
import GrayStar from "../assets/gray-star.png";
import RedStar from "../assets/red-star.png";

const Rating = (rating) => {
     //Initialize input
     rating = rating.rating

     //Initialize all stars
     const allStars = [1,2,3,4,5];
 
     //for each star display a red or grey star
     return(
         <div className="rating">
             {allStars.map((eachStar) =>
             rating >= eachStar ? 
             (<img key={eachStar} src={RedStar} alt="" />) :
             (<img key={eachStar} src={GrayStar} alt="" />)
             )}
         </div>
     )
  };

export default Rating;