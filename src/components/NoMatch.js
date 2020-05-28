import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <>
    <div>
      <h1>Oops!</h1>
      <h3>Nothing to see here.</h3>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  </>
);

export default NoMatch;
