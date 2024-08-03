import styled from 'styled-components';
import Reply from './Reply';

import { ReplyList } from '../Common/TempDummyData/PostList';

const Comment = ({
  comment,
  onCommentClick,
  clickedComment,
  postWriter_id,
}) => {
  const showWriter = (thisComment) => {
    if (thisComment.is_anonymous === true) {
      return thisComment.writerInfo.user_id === postWriter_id
        ? '글쓴이'
        : '익명';
    } else {
      return thisComment.writerInfo.nickName;
    }
  };
  return (
    <CommentAndReplyWrapper>
      <CommentDiv
        onClick={() => {
          onCommentClick({
            target: {
              writer: showWriter(comment),
              comment: comment,
            },
          });
        }}
        style={{
          backgroundColor:
            clickedComment === comment ? '#bfd8e5dd' : '#d9d9d933',
        }}
      >
        <Writer writer={showWriter(comment)}>{showWriter(comment)}</Writer>
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
  padding: 10px 19px;
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
`;

const Writer = styled.div`
  padding: 3px 0;
  color: ${(props) => (props.writer === '글쓴이' ? '#35bed6' : '#525252')};
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
