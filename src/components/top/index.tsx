import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import Logo from 'content/assets/logo.svg';
import LogoWhite from 'content/assets/logo-white.svg';
import styled from '@emotion/styled';

import { THEME } from '../../constants';
import ThemeContext from '../../contexts/theme';
import tw from 'twin.macro';
import { ThemeSwitch } from '../theme-switch';

interface ITopProps {
  title: string;
  location: Location;
  rootPath: string;
  isPost?: boolean;
}

const TopContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  background: transparent;

  svg {
    ${tw`w-36 md:w-full`}
  }

  ${tw`px-8 py-6 w-full h-24 md:h-36`}
`;

const TopContainerForPost = styled.div<{ scrollDown: boolean }>`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  background: transparent;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  z-index: 999;

  svg {
    ${tw`w-36`};
  }

  ${tw`transition-all border-solid border-0 border-b border-black dark:border-white border-opacity-0 dark:border-opacity-0 px-8 py-6 w-full h-24`};
  ${props => (props?.scrollDown ? tw`border-opacity-5 dark:border-opacity-5` : null)};
`;

export const Top: React.FC<ITopProps> = ({ title, location, rootPath, isPost }) => {
  const isRoot = location.pathname === rootPath;
  const { state } = useContext(ThemeContext);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', _ => {
      setScrollDown(window.scrollY > 0);
    });
  }, []);

  return (
    <>
      {isPost ? (
        <TopContainerForPost scrollDown={scrollDown}>
          <Link to={`/`}>{state?.theme === THEME.DARK ? <LogoWhite /> : <Logo />}</Link>
          <ThemeSwitch />
        </TopContainerForPost>
      ) : (
        <TopContainer>
          <Link to={`/`}>{state?.theme === THEME.DARK ? <LogoWhite /> : <Logo />}</Link>
          <ThemeSwitch />
        </TopContainer>
      )}
    </>
  );
};
