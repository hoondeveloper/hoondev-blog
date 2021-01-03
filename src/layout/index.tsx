import React, { ReactNodeArray } from 'react';

import { Top } from '../components/top';
import { Footer } from '../components/footer';

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
        <div className={'mx-auto lg:container px-8 py-4'}>
          {children}
          <Footer />
        </div>
      </LayoutContentsContainer>
    </ThemeProvider>
  );
};
