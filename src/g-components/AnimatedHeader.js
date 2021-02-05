import React from "react";

const AnimatedHeader = (props) => {
  return (
    <div>
      {props.characters.map((character, index) => {
        let time = Math.floor(Math.random() * 1800);
        console.log(time);
        return (
          <span
            data-aos="fade-up"
            data-aos-delay={Math.floor(Math.random() * 1800)}
            className="hover-up header"
            key={index}
          >
            {character}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedHeader;
