import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>OOps error occured</h1>
      {error && <p> {error.data}</p>}
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
}

export default ErrorPage;
