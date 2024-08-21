import styled from 'styled-components';
import theme from '../../styles/theme';

export const SentChatContainer = styled.div`
  margin: 0.6rem 0;
  max-width: 85%;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.7rem 1rem;
  box-sizing: border-box;
  border-radius: 1rem 1rem 0rem 1rem;
  filter: drop-shadow(4px 4px 24px rgba(62, 115, 178, 0.2));
  background: ${(props) => props.color};
  word-break: break-all;
  border: 1px solid rgba(62, 115, 178, 0.2);
`;

export const ReceivedChatContainer = styled.div`
  margin: 0.6rem 0;
  max-width: 85%;
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem 1rem;
  box-sizing: border-box;
  border-radius: 1rem 1rem 1rem 0rem;
  background: rgba(235, 235, 235, 1);
  filter: drop-shadow(4px 4px 24px rgba(62, 115, 178, 0.2));
  word-break: break-all;
  border: 1px solid rgba(166, 166, 166, 0.2);
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
