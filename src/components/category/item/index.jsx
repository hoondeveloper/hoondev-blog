import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const ItemContainer = styled.li`
  display: inline-block;
  border-radius: 1rem;
  white-space: normal;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 10px 0 0;
  ${props =>
    props?.isSelected ? tw`bg-azure-a100` : tw`bg-white dark:bg-gray-700 hover:shadow-lg`};

  div {
    display: block;
    box-sizing: border-box;
    font-size: 0.875rem;
    ${props => (props?.isSelected ? tw`text-white` : tw`text-gray-600 dark:text-gray-300`)};
    ${tw`px-4 py-4`}
  }
`;

export const Item = ({ title, selectedCategory, onClick, scrollToCenter }) => {
  const tabRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = useCallback(() => {
    scrollToCenter(tabRef);
    onClick(title);
  }, [tabRef]);

  useEffect(() => {
    if (selectedCategory === title) {
      setIsSelected(true);
      scrollToCenter(tabRef);
    } else {
      setIsSelected(false);
    }
  }, [selectedCategory, tabRef]);

  return (
    <ItemContainer
      isSelected={isSelected}
      ref={tabRef}
      role="tab"
      aria-selected={selectedCategory === title ? 'true' : 'false'}
    >
      <div onClick={handleClick}>{title}</div>
    </ItemContainer>
  );
};
