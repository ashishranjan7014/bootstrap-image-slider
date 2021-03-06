import React, { useEffect } from "react";
import "./style.css";

export default function App() {
  let slideIndex = 1;
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  useEffect(() => {
    showSlides(slideIndex);
  }, []);
  return (
    <div className="container">
      <div className="mySlides">
        <div className="numbertext">1 / 6</div>
        <img
          src="https://www.w3schools.com/howto/img_woods.jpg"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mySlides">
        <div className="numbertext">2 / 6</div>
        <img
          src="https://www.w3schools.com/howto/img_5terre_wide.jpg"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mySlides">
        <div className="numbertext">3 / 6</div>
        <img
          src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mySlides">
        <div className="numbertext">4 / 6</div>
        <img
          src="https://www.w3schools.com/howto/img_lights_wide.jpg"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mySlides">
        <div className="numbertext">5 / 6</div>
        <img
          src="https://www.w3schools.com/howto/img_nature_wide.jpg"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mySlides">
        <div className="numbertext">6 / 6</div>
        <img
          src="https://www.w3schools.com/howto/img_snow_wide.jpg"
          style={{ width: "100%" }}
        />
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div className="caption-container">
        <p id="caption" />
      </div>

      <div className="row">
        <div className="column">
          <img
            className="demo cursor"
            src="https://www.w3schools.com/howto/img_woods.jpg"
            style={{ width: "100%" }}
            onClick={() => currentSlide(1)}
            alt="The Woods"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="https://www.w3schools.com/howto/img_5terre.jpg"
            style={{ width: "100%" }}
            onClick={() => currentSlide(2)}
            alt="Cinque Terre"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="https://www.w3schools.com/howto/img_mountains.jpg"
            style={{ width: "100%" }}
            onClick={() => currentSlide(3)}
            alt="Mountains and fjords"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="https://www.w3schools.com/howto/img_lights.jpg"
            style={{ width: "100%" }}
            onClick={() => currentSlide(4)}
            alt="Northern Lights"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="https://www.w3schools.com/howto/img_nature.jpg"
            style={{ width: "100%" }}
            onClick={() => currentSlide(5)}
            alt="Nature and sunrise"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="https://www.w3schools.com/howto/img_snow.jpg"
            style={{ width: "100%" }}
            onClick={() => currentSlide(6)}
            alt="Snowy Mountains"
          />
        </div>
      </div>
    </div>
  );
}
