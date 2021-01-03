import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'gatsby';
import { GitHubIcon } from '../social-share/github-icon';
import Logo from 'content/assets/logo.svg';
import LogoWhite from 'content/assets/logo-white.svg';
import styled from '@emotion/styled';

import './index.scss';
import * as Dom from '../../utils/dom';
import { THEME } from '../../constants';
import * as Storage from '../../utils/storage';
import ThemeContext from '../../contexts/theme';

interface ITopProps {
  title: string;
  location: Location;
  rootPath: string;
}

const TopContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 120px;
  padding: 35px 40px;

  background: transparent;
`;

export const Top: React.FC<ITopProps> = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath;
  const { state } = useContext(ThemeContext);

  return (
    <>
      <TopContainer>
        <Link to={`/`} className="link">
          {state?.theme === THEME.DARK ? <LogoWhite /> : <Logo />}
        </Link>
      </TopContainer>
    </>
  );
};
