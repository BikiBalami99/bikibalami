import React from "react";

const Hero = () => {
  return (
    <div>
      <section>
        <h3>Biki Balami</h3>
        <h2>GRAPHIC DESIGNER</h2>
        <h2>WEB DEVELOPER</h2>
        <div>
          <span>Front-end | </span>
          <span>UI/UX | </span>
          <span>Computer Science</span>
        </div>
        <p>{"(Scroll Down)"}</p>
      </section>

      <section>
        <section>
          <div>
            <span>Email</span>
            <span>bikibalami1999@gmail.com</span>
          </div>
          <div>
            <span>Resume</span>
            <span>
              <button>Download</button>
            </span>
          </div>
          <div>
            <button>Linkedin</button>
            <button>Github</button>
          </div>
        </section>

        <article>
          <ul>
            <li>
              <strong>Origin:</strong> Kathmandu, Nepal
            </li>
            <li>
              <strong>Residing:</strong> Tokyo, Japan
            </li>
            <li>
              <strong>Focus:</strong> React, JavaScript
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Hero;
