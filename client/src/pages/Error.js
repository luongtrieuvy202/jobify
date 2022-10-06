import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/Testing";
const Error = () => {
  return (
    <Wrapper className="full-page container">
      <div className="new">
        <img src={img} alt="error-img" />
        <h3>Ohh! page not found</h3>
        <p>We cant seem to find the page you looking for.</p>
        <Link to="/" className="btn btn-hero">
          Back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
