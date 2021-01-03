import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

const Date = styled.p`
  text-align: right;
  font-size: 12px;
  ${tw`text-gray-400 dark:text-gray-600`}
`;

export const PostDate = ({ date }) => {
  return <Date>{date}</Date>;
};
