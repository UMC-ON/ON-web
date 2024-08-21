import styled from 'styled-components';
import replyImg from '../../assets/images/replyImg.svg';
import { showWriter } from '../Common/InfoExp';

const Reply = ({ reply, postWriter_id }) => {
  return (
    <ReplyDiv>
      <ReplyImg src={replyImg} />
      <div>
        <Writer writer={`${reply.writerInfo.id === postWriter_id}`}>
          {showWriter(reply, postWriter_id)}
        </Writer>
        {reply.contents}
      </div>
    </ReplyDiv>
  );
};

export default Reply;

const Writer = styled.div`
  padding: 3px 0;
  color: ${(props) => (props.writer === 'true' ? '#3E73B2' : '#525252')};
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

const ReplyDiv = styled.div`
  box-sizing: border-box;
  padding: 10px 19px;
  width: 100%;
  height: auto;
  background-color: #d9d9d966;
  border: 2px solid #bfd8e533;
  border-radius: 10px;

  color: #3d3d3d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: start;

  white-space: pre-wrap;
`;

const ReplyImg = styled.img`
  opacity: 50%;
  padding: 0.25rem 0.25rem 0 0;
`;
