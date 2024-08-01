import styled from 'styled-components';
import Reply from './Reply';

import { ReplyList } from '../Common/TempDummyData/PostList';

const Comment = ({ comment }) => {
  const showWriter = (targetWriterInfo) => {
    if (targetWriterInfo.isAnonymous === 'true') {
      return targetWriterInfo.order === null
        ? '글쓴이'
        : '익명' + targetWriterInfo.order;
    } else {
      return targetWriterInfo.name;
    }
  };
  return (
    <CommentAndReplyWrapper>
      <CommentDiv>
        <Writer>{showWriter(comment.writerInfo)}</Writer>
        {comment.content}
      </CommentDiv>
      {ReplyList.map((reply, index) => (
        <Reply
          reply={reply}
          key={index}
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
  color: #525252;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
