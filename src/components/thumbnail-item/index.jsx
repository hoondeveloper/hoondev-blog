import React from 'react';
import { Link } from 'gatsby';
import { TARGET_CLASS } from '../../utils/visible';

import './index.scss';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`px-4 py-2 hover:bg-gray-100 hover:dark:bg-gray-800 rounded-3xl`}
`;

const Title = styled.h3`
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  font-weight: 500;
  letter-spacing: -0.02rem;
  margin: 0.8rem 0 0.6rem;
  ${tw`text-gray-700 dark:text-gray-200`}
`;

const Contents = styled.p`
  margin: 0 0 0.8rem;
  ${tw`text-gray-500 dark:text-gray-400`}
`;

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <Container key={node.fields.slug}>
      <Title>{node.frontmatter.title || node.fields.slug}</Title>
      <Contents dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </Container>
  </Link>
);
