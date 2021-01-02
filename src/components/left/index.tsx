import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
// import tw, { styled } from 'twin.macro';

const LeftContainer = styled.div`
  width: 300px;
  padding: 30px 40px;
`;

const Name = styled.span`
  display: block;
  font-size: 22px;
  font-family: 'Object Sans', serif;
  font-weight: 800;
  letter-spacing: 0.01em;
  ${tw`text-gray-700 dark:text-gray-300`}
`;

const Job = styled.span`
  display: block;
  font-size: 16px;
  font-family: 'Object Sans', serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 16px;
  ${tw`text-gray-700 dark:text-gray-300`}
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  margin: 30px 0;
  ${tw`bg-gray-200 dark:bg-gray-800`}
`;

const DetailItemContainer = styled.div`
  display: flex;
  align-items: center;

  * + * {
    margin-left: 10px;
  }
`;

const DetailItemText = styled.span`
  ${tw`font-light text-sm text-gray-600 dark:text-gray-400`}
`;

const DetailItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <DetailItemContainer>
      <i className={'not-italic'}>{icon}</i>
      <DetailItemText>{text}</DetailItemText>
    </DetailItemContainer>
  );
};

export const Left: React.FC<any> = () => {
  return (
    <LeftContainer>
      <Name>Lim Ji Hoon</Name>
      <Job>front-end developer</Job>
      <Divider />
      <div className={'space-y-1'}>
        <DetailItem icon={'🏠'} text={'Seoul, South Korea'} />
        <DetailItem icon={'🏫'} text={'Chung-Ang Univ. SW Dept.'} />
        <DetailItem icon={'🏢'} text={'Emmental Inc.'} />
        <DetailItem icon={'📫'} text={'hoonskyn9@gmail.com'} />
      </div>
    </LeftContainer>
  );
};
