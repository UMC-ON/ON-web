import styled from 'styled-components';
import Reply from './Reply';
import replyBtnImg from '../../assets/images/replyBtnImg.svg';
import { showWriter } from '../Common/InfoExp';
import { getData } from '../../api/Functions';
import { GET_REPLIES_OF } from '../../api/urls';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const Comment = ({
  comment,
  onCommentClick,
  clickedComment,
  postWriter_id,
}) => {
  const [replyList, setReplyList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (comment.replyCount > 0) {
  //     const fetchReply = async () => {
  //       setIsLoading(true);
  //       const res = await getData(GET_REPLIES_OF(comment.commentId), {
  //         Authorization: `Bearer ${localStorage.getItem('AToken')}`,
  //       });
  //       if (res) {
  //         console.log('아');
  //         console.log(res.data);
  //         setReplyList(res.data);
  //       }
  //     };
  //     fetchReply();
  //   }
  //   if (replyList) {
  //     setIsLoading(false);
  //   }
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }
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
        <Writer writer={`${comment.writerInfo.id === postWriter_id}`}>
          {showWriter(comment, postWriter_id)}
          <img src={replyBtnImg} />
        </Writer>
        {comment.contents}
      </CommentDiv>
      {/* {replyList
        ? replyList.map((reply, index) => (
            <Reply
              reply={reply}
              key={index}
              postWriter_id={postWriter_id}
            />
          ))
        : null} */}
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
  margin: 1.2rem 0 0 0;
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
