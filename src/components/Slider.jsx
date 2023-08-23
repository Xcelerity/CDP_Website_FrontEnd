import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

function Slider({ logoArray, children, height, width }) {
  return (
    <div className="text">
      <div className="wrapper">
        <Splide
          options={{
            type: "loop",
            gap: "10px",
            drag: "free",
            focus: "center",
            arrows: true,
            pagination: false,
            perPage: 4,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: true,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {logoArray.map((logo, index) => {
            return (
              <SplideSlide
                key={`Sponsor_${index}`}
                className="flex ml-5 mr-5 justify-center items-center"
              >
                <img
                  src={logo}
                  style={{
                    height: `${height ? height : ""}`,
                    width: `${width ? width : ""}`,
                  }}
                  className="max-h-[70px]"
                  alt={"Image " + (index + 1)}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Slider;
