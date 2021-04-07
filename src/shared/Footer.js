import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center text-lg-start fixed-bottom">
      <div
        className="text-center p-3"
        style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}
      >
        Made with <i className="far fa-heart text-danger"></i> <a target="_blank" href="https://github.com/mimarchant">by Miguel Marchant</a> 

      </div>
    </footer>
  );
};

export default Footer;
