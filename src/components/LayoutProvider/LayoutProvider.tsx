import * as React from 'react';
import { Link } from 'react-router-dom';

import "./LayoutProvider.css";

function LayoutProvider(props: React.PropsWithChildren<{}>) {
  return (
    <div className="app-container">
      <header className="header">
      <Link to="/">
        Home
      </Link>
      <Link to="/teams">
        Teams
      </Link>
      <Link to="/members">
        Members
      </Link>
      <Link to="/todo">
        ToDo
      </Link>
      </header>
      <div className="app-content">
        {props.children}
      </div>
    </div>
  )
}

export default LayoutProvider
