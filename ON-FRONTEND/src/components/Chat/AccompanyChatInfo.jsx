import { useState } from 'react';
import * as s from './AccompanyChatInfoStyled';

const AccompanyChatInfo = ({ user, defaultColor, pointColor }) => {
  const pointColorOpacity = (e) => {
    return `${pointColor.replace('1)', ` ${e})`)}`;
  };

  const defaultColorOpacity = (e) => {
    return `${defaultColor.replace('1)', ` ${e})`)}`;
  };

  return (
    <s.InfoWrapper color={pointColorOpacity(0.2)}>
      {user === 1 ? (
        <s.Info>
          <span style={{ color: pointColor, fontWeight: '900' }}>제로</span>
          <span>님께 궁금한 점을 물어보세요!</span>
        </s.Info>
      ) : (
        <s.Info>
          <span style={{ color: pointColor, fontWeight: '900' }}>루이</span>
          님이 제로님의 여정에 대해 채팅을 시작했습니다. 동행 모집이 완료되면
          상단의
          <s.Finish>모집 완료</s.Finish>를 눌러주세요.
        </s.Info>
      )}
      <s.PreferredIcon />
      <s.PreferredPeriod>
        <s.Category>희망 시기</s.Category>
        <s.Content>8/2</s.Content>
      </s.PreferredPeriod>
      <s.LocationIcon />
      <s.Location>
        <s.Category>지역</s.Category>
        <s.Content>영국</s.Content>
      </s.Location>
      <s.NumIcon />
      <s.NumberOfPeople>
        <s.Category>모집 인원</s.Category>
        <s.Content>(8/2)</s.Content>
      </s.NumberOfPeople>
    </s.InfoWrapper>
  );
};

export default AccompanyChatInfo;
