import React from 'react';
import styled from 'styled-components';

const StoredDiary = ({ diaries }) => {
  console.log(diaries); // 데이터 확인용

  return (
    <>
      {diaries.diaryList && diaries.diaryList.map((item, index) => (
        <DailyDiary key={index}>
          <Content>{item.content}</Content>
          <DDay>{`D${item.writtenDday}`}</DDay>
          <Date>{item.writtenDate}</Date>
        </DailyDiary>
      ))}
    </>
  );
}

export default StoredDiary;

const DailyDiary = styled.div`
  width: 90%;
  height: 130px;
  margin: 10px auto;
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.lightPurple};
  white-space: pre-wrap;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DDay = styled.div`
  width: 50px;
  height: 15px;
  border-radius: 9px;
  background: ${props => props.theme.blueGra};
  color: white;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 7em;
`;

const Content = styled.p`
  padding: 20px;
  color: #D9D9D9;
  font-size: 13px;
  flex-grow: 1; /* Content가 가능한 모든 공간을 차지하도록 설정 */
`;

const Date = styled.p`
  font-size: 11px;
  margin: 10px;
  font-weight: 600;
  color: #B8B8B8;
  position: absolute;
  bottom: 2px;
  right: 5px; /* Date를 아래로 배치하고 왼쪽에 고정 */
`;
