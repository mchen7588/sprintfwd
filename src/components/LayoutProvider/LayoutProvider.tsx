import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import "./LayoutProvider.css";

function LayoutProvider(props: React.PropsWithChildren<{}>) {
  const location = useLocation();

  return (
    <div className="app-container">
      <header className="header">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/teams" className={location.pathname === '/teams' ? 'active' : ''}>
          Teams
        </Link>
        <Link to="/members" className={location.pathname === '/members' ? 'active' : ''}>
          Members
        </Link>
        <Link to="/todo" className={location.pathname === '/todo' ? 'active' : ''}>
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
