import React from 'react';
import { Link } from 'gatsby';
import { GitHubIcon } from '../social-share/github-icon';
import Logo from 'content/assets/logo.svg';

import './index.scss';

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath;
  return (
    <>
      <div className="top">
        {!isRoot ? (
          <Link to={`/`} className="link">
            {title}
          </Link>
        ) : (
          <Logo />
        )}
        <GitHubIcon />
      </div>
    </>
  );
};
