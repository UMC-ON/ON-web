import { useState, useEffect } from 'react';
import * as s from './AccompanyChatInfoStyled';
import { GET_ACCOMPANY_INFO } from '../../api/urls';
import { getData } from '../../api/Functions';
import Loading from '../Loading/Loading';

const AccompanyChatInfo = ({
  user,
  defaultColor,
  pointColor,
  userName,
  roomId,
}) => {
  const [infoResult, setInfoResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pointColorOpacity = (e) => {
    return `${pointColor.replace('1)', ` ${e})`)}`;
  };

  const defaultColorOpacity = (e) => {
    return `${defaultColor.replace('1)', ` ${e})`)}`;
  };

  useEffect(() => {
    const fetchAccompanyInfo = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_ACCOMPANY_INFO(roomId),
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          { roomId: roomId },
        );

        if (response) {
          console.log(response.data.result);
          setInfoResult(response.data.result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccompanyInfo();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <s.InfoWrapper color={pointColorOpacity(0.2)}>
      {user === 1 ? (
        <s.Info>
          <span style={{ color: pointColor, fontWeight: '900' }}>
            {userName}
          </span>
          <span>님께 궁금한 점을 물어보세요!</span>
        </s.Info>
      ) : (
        <s.Info>
          <span style={{ color: pointColor, fontWeight: '900' }}>
            {userName}
          </span>
          님이 해당 여정에 대해 채팅을 시작했습니다. 동행 모집이 완료되면 상단의
          <span
            style={{
              color: 'white',
              background: 'linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%)',
              borderRadius: '0.5rem',
              fontWeight: '900',
              padding: '0 0.4rem',
            }}
          >
            {' '}
            모집 완료
          </span>
          를 눌러주세요.
        </s.Info>
      )}
      <s.PreferredIcon />
      <s.PreferredPeriod>
        <s.Category>희망 시기</s.Category>
        <s.Content>
          {infoResult.startDate} ~ {infoResult.endDate}
        </s.Content>
      </s.PreferredPeriod>
      <s.LocationIcon />
      <s.Location>
        <s.Category>지역</s.Category>
        <s.Content>{infoResult.location}</s.Content>
      </s.Location>
      <s.NumIcon />
      <s.NumberOfPeople>
        <s.Category>모집 인원</s.Category>
        <s.Content>
          ( {infoResult.participantNumber} / {infoResult.recruitNumber} )
        </s.Content>
      </s.NumberOfPeople>
    </s.InfoWrapper>
  );
};

export default AccompanyChatInfo;
