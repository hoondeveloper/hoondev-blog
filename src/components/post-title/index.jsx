import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Title = styled.h1`
  margin-top: 0;
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  font-size: 2.2rem;
  ${tw`border-b border-gray-200 dark:border-gray-800 pb-8`}
`;

export const PostTitle = ({ title }) => <Title>{title}</Title>;
