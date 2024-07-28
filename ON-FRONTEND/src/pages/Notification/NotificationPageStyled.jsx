import styled from 'styled-components';

export const NotificationLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  padding: 61px 0px 0px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div`
  background: linear-gradient(
    180deg,
    rgba(110, 186, 255, 0) 0%,
    rgba(86, 150, 217, 0.2) 50%,
    rgba(62, 115, 178, 0.32) 100%
  );
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 25vh;
`;

export const NotificationWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 5px 0px 5px 0px;
  border-radius: 14px;
  border: 0.5px solid #fff;
  background: rgba(227, 227, 227, 0.6);
  box-shadow: 4px 4px 24px 0px rgba(62, 115, 178, 0.15);
  margin: 1vh 0 3vh 0;
`;

export const NotificationContainer = styled.div`
  width: 100%;
  height: 8vh;
  min-height: 50px;
  max-height: 60px;
  display: flex;
  flex-direction: column;
  padding: 5px 18px;
  box-sizing: border-box;
  justify-content: space-evenly;
`;

export const NotificationTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  span {
    display: inline-block;
    overflow: hidden;
    color: #363636;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.28px;
    text-align: left;
  }
`;

export const NotificationText = styled.p`
  color: #363636;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.22px;
  text-align: left;
`;

export const NotificationCircle = styled.img`
  position: absolute;
  right: 0;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid white;
`;

export const NotificationEnd = styled.div`
  margin-bottom: 10vh;
  color: '#B8B8B8';
  color: #b8b8b8;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NoNotification = styled.div`
  align-self: center;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-left: 25px;
  img {
    object-fit: cover;
    padding-bottom: 60px;
  }
`;
