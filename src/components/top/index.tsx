import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Logo from 'content/assets/logo.svg';
import LogoWhite from 'content/assets/logo-white.svg';
import styled from '@emotion/styled';

import './index.scss';
import { THEME } from '../../constants';
import ThemeContext from '../../contexts/theme';
import tw from 'twin.macro';
import { ThemeSwitch } from '../theme-switch';

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

  box-sizing: border-box;
  background: transparent;
  ${tw`px-8 py-6`}
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
        <ThemeSwitch />
      </TopContainer>
    </>
  );
};
