import React, { useCallback, useRef } from 'react';
import { Item } from './item';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const CategoryContainer = styled.ul`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  line-height: 0;
  margin: 0;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Firefox
  z-index: 1;
  scroll-behavior: smooth;
  border-radius: 2rem;
  font-family: 'Montserrat', 'Noto Sans KR', serif;
  font-weight: 500;
  text-shadow: none;

  &::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }

  @media (prefers-reduced-motion: reduce) {
    .my-smooth-container {
      scroll-behavior: auto;
    }
  }

  ${tw`bg-gray-100 dark:bg-gray-800 p-3`}
`;

export const Category = ({ categories, category, selectCategory }) => {
  const containerRef = useRef(null);

  const scrollToCenter = useCallback(
    tabRef => {
      const { offsetWidth: tabWidth } = tabRef.current;
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current;
      const tabLeft = tabRef.current.getBoundingClientRect().left;
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const refineLeft = tabLeft - containerLeft;
      const targetScollX = scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2;

      containerRef.current.scroll({ left: targetScollX, top: 0, behavior: 'smooth' });
    },
    [containerRef],
  );

  return (
    <CategoryContainer ref={containerRef} role="tablist" id="category">
      <Item
        title={'All'}
        selectedCategory={category}
        onClick={selectCategory}
        scrollToCenter={scrollToCenter}
      />
      {categories.map((title, idx) => (
        <Item
          key={idx}
          title={title}
          selectedCategory={category}
          onClick={selectCategory}
          scrollToCenter={scrollToCenter}
        />
      ))}
    </CategoryContainer>
  );
};
