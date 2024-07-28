import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './NotificationPageStyled';
import notification_circle from '../../assets/images/notification_circle.svg';
import NoContent from '../../components/NoContent/NoContent';
import { useState } from 'react';

const Notification = () => {
  const [isNotification, setIsNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <s.NotificationLayout>
      <PageHeader pageName="알림" />
      {isLoading ? (
        <p>로딩중</p>
      ) : (
        <>
          {isNotification ? (
            <>
              <s.NotificationWrapper>
                <s.NotificationContainer>
                  <s.NotificationTitle>
                    <span style={{ overflow: 'visible' }}>[정보글]</span>
                    <span>내 동행글에 새로운 동행 신청 메시지가 왔어요</span>
                    {/*읽음 여부 추가*/}
                    <s.NotificationCircle
                      src={notification_circle}
                      alt="Notification Circle"
                    />
                  </s.NotificationTitle>
                  <s.NotificationText>
                    그러면 6개월 전부터 시도해 보면 괜찮을까요?
                  </s.NotificationText>
                </s.NotificationContainer>
                <s.Line />
                <s.NotificationContainer>
                  <s.NotificationTitle>
                    <span>[정보글]</span>
                    <span>동행구해요오오오</span>
                  </s.NotificationTitle>
                  <s.NotificationText>12tl</s.NotificationText>
                </s.NotificationContainer>
              </s.NotificationWrapper>
              <s.NotificationEnd>알람 내역의 마지막입니다.</s.NotificationEnd>
              <s.Background />
            </>
          ) : (
            <NoContent content="알림 내역" />
          )}
        </>
      )}
    </s.NotificationLayout>
  );
};

export default Notification;
