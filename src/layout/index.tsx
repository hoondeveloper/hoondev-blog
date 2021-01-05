import React, { ReactNodeArray } from 'react';

import { Top } from '../components/top';
import { Footer } from '../components/footer';

import './index.scss';
import { Profile } from '../components/left';
import styled from '@emotion/styled';
import { ThemeProvider } from '../contexts/theme';
import tw from 'twin.macro';
import classNames from 'classnames';

interface LayoutProps {
  location: Location;
  title: string;
  children: ReactNodeArray;
  isPost?: boolean;
}

const LayoutContentsContainer = styled.div`
  display: flex;
  ${tw`flex-col md:flex-row`}
`;

export const Layout: React.FC<LayoutProps> = ({ location, title, children, isPost }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <ThemeProvider>
      <Top title={title} location={location} rootPath={rootPath} isPost={isPost} />
      <LayoutContentsContainer>
        {!isPost && <Profile />}
        <div
          className={classNames('mx-auto w-full md:px-8 py-4', {
            'px-8 mt-24 max-w-screen-md': isPost,
            'px-4 max-w-screen-xl': !isPost,
          })}
        >
          {children}
          <Footer />
        </div>
      </LayoutContentsContainer>
    </ThemeProvider>
  );
};
