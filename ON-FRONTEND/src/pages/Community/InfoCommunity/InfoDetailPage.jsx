import * as s from '../DetailPageStyled.jsx';
import commentImg from '../../../assets/images/commentImg.svg';
import DefaultCheckBox from '../../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import plane from '../../../assets/images/detailPagePlane.svg';

import { Post } from '../../../components/Common/TempDummyData/Post.jsx';

import Comment from '../../../components/Comment/Comment.jsx';

import { CommentList } from '../../../components/Common/TempDummyData/PostList.jsx';

const InfoDetailPage = () => {
  const handleResizeHeight = () => {
    const textarea = document.querySelector('.commentEditor');
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  let numOfReply = 0;
  Post.comments.map((comment, index) => (numOfReply += comment.replies.length));
  console.log(numOfReply);

  const commentSend = () => {};

  return (
    <>
      <s.ConfirmHeader>
        <s.BackButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            positions="fixed"
          >
            <path
              d="M8 2L1.8858 7.24074C1.42019 7.63984 1.42019 8.36016 1.8858 8.75926L8 14"
              stroke="#7A7A7A"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </s.BackButton>
        <s.PostInfo>
          <s.InfoLabel>
            {Post.writerInfo.is_anonymous === 'true'
              ? '익명'
              : Post.writerInfo.name}
          </s.InfoLabel>
          <s.InfoLabel>
            {Post.writerInfo.from}
            <img src={plane} />
            {Post.writerInfo.to}
          </s.InfoLabel>
          <s.InfoLabel>{Post.createdDate}</s.InfoLabel>
        </s.PostInfo>
      </s.ConfirmHeader>
      <s.DetailPageLayout>
        <s.Title>{Post.title}</s.Title>
        <s.Content>{Post.content}</s.Content>{' '}
        <s.CommentNumSection>
          <img src={commentImg} />
          {numOfReply + Post.comments.length}
        </s.CommentNumSection>
        <s.CommentSection>
          {CommentList.map((comment, index) => (
            <Comment
              comment={comment}
              key={index}
            />
          ))}
        </s.CommentSection>
        <s.CommentWritingDiv>
          <DefaultCheckBox
            before="익명"
            checkBoxStyle={{
              border: '0.2px solid rgba(0, 0, 0, 0.50)',
              width: '14px',
              height: '14px',
              borderRadius: '5px',
            }}
          />
          <s.CommentEditor
            className="commentEditor"
            placeholder="댓글을 작성해주세요."
            onInput={handleResizeHeight}
            rows={1}
          />
          <s.ColorButtonTag onClick={commentSend}>등록</s.ColorButtonTag>
        </s.CommentWritingDiv>
      </s.DetailPageLayout>
    </>
  );
};

export default InfoDetailPage;
