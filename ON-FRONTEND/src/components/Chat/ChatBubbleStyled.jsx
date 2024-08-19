import styled from 'styled-components';
import theme from '../../styles/theme';

export const SentChatContainer = styled.div`
  margin: 0.6rem 0;
  width: 90%;
  margin-left: 10%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 1rem 1rem 0rem 1rem;
  filter: drop-shadow(4px 4px 24px rgba(62, 115, 178, 0.2));
  background: ${(props) => props.color};
  word-break: break-all;
`;

export const ReceivedChatContainer = styled.div`
  width: 90%;
  margin: 0.6rem 0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 1rem 1rem 1rem 0rem;
  background: rgba(235, 235, 235, 1);
  filter: drop-shadow(4px 4px 24px rgba(62, 115, 178, 0.2));
  word-break: break-all;
`;

export const Text = styled.span`
  width: 100%;
  color: #000;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0175rem;
  text-align: left;
`;
