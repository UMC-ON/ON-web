import React from 'react';
import styled from 'styled-components';

export default function Diary() {
  return (
    <DailyDiary>
          <p style={{padding: "20px", color: "#D9D9D9"}}>교환 생활의 시작,<br/>윤서님의 교환 1일차 하루는 어땠나요?</p>
          <Save>저장하기</Save>
    </DailyDiary>
  );
}

const DailyDiary = styled.div`
  width: 90%;
  height: 130px;
  margin-bottom: 100px;
  margin-left: 15px;
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.lightPurple};
  white-space: pre-wrap;
  text-align: left;
  display: flex;
  align-items: right;
  position: relative; // 상대 위치로 설정
`;

const Save = styled.div`
  width: 70px;
  height: 20px;
  border-radius: 9px;
  background: ${props => props.theme.blueGra};
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; // 절대 위치로 설정
  bottom: 10px; // 아래에서 10px 간격
  right: 10px; // 오른쪽에서 10px 간격
`;
