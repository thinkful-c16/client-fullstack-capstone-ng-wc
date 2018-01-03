import React from 'react';
import { connect } from 'react-redux';

import { goHome, fetchClouds} from '../actions';

export function TopNav(props) {
    
    return (
      <nav>
          <ul className="nav">
              <li>
                  <a href="#home" className="home" onClick={() => props.dispatch(goHome())}>
                      Home
                  </a>
              </li>
              <li>
                  <a href="#library" className="library" onClick={() => props.dispatch(fetchClouds())}>
                      Library
                  </a>
              </li>
          </ul>
      </nav>
  );
}

export default connect() (TopNav);