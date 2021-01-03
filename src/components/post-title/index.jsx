import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Title = styled.h1`
  margin-top: 0;
  font-size: 2.6rem;
  ${tw`border-b border-gray-200 dark:border-gray-800 pb-8`}
`;

export const PostTitle = ({ title }) => <Title>{title}</Title>;
