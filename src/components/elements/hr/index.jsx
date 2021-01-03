import React from 'react';

import './index.scss';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 2rem 0;
  ${tw`bg-gray-200 dark:bg-gray-800`}
`;
