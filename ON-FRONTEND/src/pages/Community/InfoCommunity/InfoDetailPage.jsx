import * as s from '../DetailPageStyled.jsx';
import commentImg from '../../../assets/images/commentImg.svg';
import DefaultCheckBox from '../../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import plane from '../../../assets/images/detailPagePlane.svg';

import {
  CommentList,
  userInfo,
  PostList,
} from '../../../components/Common/TempDummyData/PostList.jsx';

import Comment from '../../../components/Comment/Comment.jsx';

import { useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const InfoDetailPage = () => {
  const currentPost_id = useLocation().state.value; //post_id 정보만 받아오기
  //useLocation으로 post_id만 받아 온 뒤, postListDB에서 현재 포스트 찾아와 불러옴.
  //그 뒤에는 선택사항: commentList DB를 따로 사용하느냐,
  //아니면 post객체 필드에 각각 commentList를 만들것이냐.
  //선택할 수 있게 짜놓음

  ///선택 가능하게 하기 위한 변수들///
  const commentListDB = CommentList;
  const filteredCommentListDB = CommentList.filter(
    (comment) => comment.post_id === currentPost_id,
  );

  const postListDB = PostList;
  const currentPost = postListDB.filter(
    (post) => post.post_id === currentPost_id,
  )[0];

  const currentCommentList = currentPost.commentList; //or commentListDB
  const currentFilteredCommentList = currentPost.commentList; //or filteredCommentListDB

  /// 여기서부터 메인 변수들 ///
  const [content, setContent] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);

  const isAnonymous = useRef(false);
  const scrollRef = useRef(null);
  const replyToText = useRef(null);
  const commentEditor = useRef(null);
  const mobileViewRef = useRef(null);

  const getNumberOfComment = () => {
    let numOfComment = 0;
    currentPost.commentList.forEach((comment) => {
      numOfComment += comment.replyList.length;
      numOfComment++;
      console.log(numOfComment);
    });
    return numOfComment;
  };

  //기타 이벤트 핸들링 함수

  const handleResizeHeight = () => {
    const textarea = document.querySelector('.commentEditor');
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const nav = useNavigate();

  const onCommentSelection = (e) => {
    if (selectedComment === null) {
      setSelectedComment(e.target.comment);
      replyToText.current = `${e.target.writer}에게 답장`;
      console.log(selectedComment);
    } else if (selectedComment === e.target.comment) {
      setSelectedComment(null);
      replyToText.current = null;
      console.log(selectedComment);
    } else {
      setSelectedComment(e.target.comment);
      replyToText.current = `${e.target.writer}에게 답장`;
      console.log(selectedComment);
    }
  };
  const onCommentSubmit = () => {
    let key, value, pushList;
    if (selectedComment !== null) {
      key = ['comment_id', 'reply_id'];
      value = [
        selectedComment.comment_id,
        selectedComment.replyList.length + 1,
      ];
      pushList = selectedComment.replyList;
    } else {
      key = ['post_id', 'comment_id', 'replyList'];
      value = [currentPost_id, currentPost.commentList.length + 1, []];
      pushList = currentCommentList;
    }

    console.log(pushList);

    addComment(key, value, pushList);
    setContent('');
    setSelectedComment(null);
    replyToText.current = null;
  };

  const addComment = (key = [], value = [], pushList = []) => {
    const comment = {
      writerInfo: { ...userInfo },
      content: content,
      is_anonymous: isAnonymous.current,
    };
    if (key.length > 0) {
      for (let i = 0; i < key.length; i++) {
        comment[key[i]] = value[i];
      }
    }

    console.log(comment);

    pushList.push(comment);
  };

  const currentVisualViewHeight = window.visualViewport.height;
  //replyToText.current = currentVisualViewHeight;
  return (
    <div ref={mobileViewRef}>
      <s.PostInfoHeader>
        <s.BackButton onClick={() => nav(-1)}>
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
            {currentPost.is_anonymous
              ? '익명'
              : currentPost.writerInfo.nickName}
          </s.InfoLabel>
          <s.InfoLabel>
            {currentPost.writerInfo.from}
            <img src={plane} />
            {currentPost.writerInfo.dispatched_country_id}
          </s.InfoLabel>
          <s.InfoLabel>
            {currentPost.createdDate.toLocaleString('ko-KR')}
          </s.InfoLabel>
        </s.PostInfo>
      </s.PostInfoHeader>
      <s.DetailPageLayout>
        <s.Title>{currentPost.title}</s.Title>
        <s.Content>{currentPost.content}</s.Content>{' '}
        <s.CommentNumSection>
          <img src={commentImg} />
          {getNumberOfComment()}
        </s.CommentNumSection>
        <s.CommentSection>
          {currentFilteredCommentList.map((comment, index) => {
            return (
              <Comment
                comment={comment}
                onCommentClick={onCommentSelection}
                key={index}
                clickedComment={selectedComment}
                postWriter_id={currentPost.writerInfo.user_id}
              />
            );
          })}
        </s.CommentSection>{' '}
      </s.DetailPageLayout>
      <s.CommentWritingDiv id="commentDiv">
        <DefaultCheckBox
          before="익명"
          checkBoxStyle={{
            border: '0.2px solid rgba(0, 0, 0, 0.50)',
            width: '14px',
            height: '14px',
            borderRadius: '5px',
          }}
          onChange={(e) => {
            isAnonymous.current = e.target.value;
            commentEditor.current.focus();
          }}
        />
        <s.EditorWrapper>
          {replyToText.current}
          <s.CommentEditor
            className="commentEditor"
            placeholder="댓글을 작성해주세요."
            onInput={handleResizeHeight}
            rows={1}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.shiftKey) {
                return;
              } else if (e.key === 'Enter') {
                onCommentSubmit();
                e.preventDefault();
              } else {
                return;
              }
            }}
            value={content}
            ref={commentEditor}
          />
        </s.EditorWrapper>

        <s.ColorButtonTag onClick={onCommentSubmit}>등록</s.ColorButtonTag>
      </s.CommentWritingDiv>
    </div>
  );
};

export default InfoDetailPage;
