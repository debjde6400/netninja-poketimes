import React from "react";
import Rainbow from "../hoc/Raindow";

const Contact = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">
          Contact
        </h4>

        <p>
        The world of Pokémon connects people across the globe, beloved by kids, adults, and every Trainer in between! These incredible creatures have crossed borders and 
        language barriers to reach the hearts of millions for over 25 years, bringing people together through the joy of play and discovery.
        We have a passion for Pokémon that drives us to understand the impact our brand has on teammates, fans, players, and communities.
        </p>
      </div>
    </div>
  )
}

export default Rainbow(Contact);