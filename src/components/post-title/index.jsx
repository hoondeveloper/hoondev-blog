import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Title = styled.h1`
  font-weight: 500;
  word-break: keep-all;

  margin-top: 0;
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  ${tw`border-b border-gray-200 dark:border-gray-800 pb-8 text-3xl md:text-5xl tracking-tight`}
`;

export const PostTitle = ({ title }) => <Title>{title}</Title>;
