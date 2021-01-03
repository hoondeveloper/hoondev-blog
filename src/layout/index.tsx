import React, { ReactNodeArray } from 'react';

import { Top } from '../components/top';
import { Header } from '../components/header';
import { ThemeSwitch } from '../components/theme-switch';
import { Footer } from '../components/footer';
import { rhythm } from '../utils/typography';

import './index.scss';
import { Left } from '../components/left';
import styled from '@emotion/styled';
import { ThemeProvider } from '../contexts/theme';

interface LayoutProps {
  location: Location;
  title: string;
  children: ReactNodeArray;
}

const LayoutContentsContainer = styled.div`
  display: flex;
`;

export const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <ThemeProvider>
      <Top title={title} location={location} rootPath={rootPath} />
      <LayoutContentsContainer>
        <Left />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <ThemeSwitch />
          <Header title={title} location={location} rootPath={rootPath} />
          {children}
          <Footer />
        </div>
      </LayoutContentsContainer>
    </ThemeProvider>
  );
};
