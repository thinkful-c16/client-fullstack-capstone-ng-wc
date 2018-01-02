import React from 'react';

export default function TopNav(props) {
  return (
      <nav>
          <ul className="nav">
              <li>
                  <a href="#home" className="home">
                      Home
                  </a>
              </li>
              <li>
                  <a href="#library" className="library">
                      Library
                  </a>
              </li>
              <li>
                  <a href="#save" className="save">
                      Save
                  </a>
              </li>
          </ul>
      </nav>
  );
}