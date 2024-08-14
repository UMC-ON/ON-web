import styled from 'styled-components';
import Reply from './Reply';
import replyBtnImg from '../../assets/images/replyBtnImg.svg';
import { showWriter } from '../Common/InfoExp';

const Comment = ({
  comment,
  onCommentClick,
  clickedComment,
  postWriter_id,
}) => {
  return (
    <CommentAndReplyWrapper>
      <CommentDiv
        onClick={() => {
          onCommentClick({
            target: {
              writer: showWriter(comment, postWriter_id),
              comment: comment,
            },
          });
        }}
        style={{
          backgroundColor:
            clickedComment === comment ? '#bfd8e5dd' : '#d9d9d933',
        }}
      >
        <Writer writer={`${comment.writerInfo.userId === postWriter_id}`}>
          {showWriter(comment, postWriter_id)}
          <img src={replyBtnImg} />
        </Writer>
        {comment.content}
      </CommentDiv>
      {comment.replyList.map((reply, index) => (
        <Reply
          reply={reply}
          key={index}
          postWriter_id={postWriter_id}
        />
      ))}
    </CommentAndReplyWrapper>
  );
};

export default Comment;

const CommentAndReplyWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.6rem 0;
`;

const CommentDiv = styled.div`
  box-sizing: border-box;
  padding: 10px 0.56rem 0.88rem 1.19rem;
  width: 100%;
  height: auto;
  background-color: #d9d9d933;
  border: 2px solid #bfd8e533;
  border-radius: 10px;

  color: #3d3d3d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;

  white-space: pre-wrap;
`;

const Writer = styled.div`
  padding: 3px 0;
  color: ${(props) => (props.writer === 'true' ? '#3E73B2' : '#525252')};
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
