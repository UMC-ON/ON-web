import * as s from './DetailPageStyled.jsx';
import styled from 'styled-components';
import commentImg from '../../assets/images/commentImg.svg';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox.jsx';

import { CommentList } from '../../components/Common/TempDummyData/PostList.jsx';
import { showDispatchedUniv } from '../../components/Common/InfoExp.jsx';

import Comment from '../../components/Comment/Comment.jsx';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData, postData } from '../../api/Functions.jsx';
import {
  GET_COMMENT_OF,
  GET_POST_DETAIL,
  WRITE_COMMENT_ON,
  WRITE_REPLY_ON,
} from '../../api/urls.jsx';
import Loading from '../../components/Loading/Loading.jsx';

import Reply from '../../components/Comment/Reply.jsx';

const DetailPage = ({ color1, color2, boardType }) => {
  const titleColor = boardType === 'INFO' ? 'rgb(191, 216, 229)' : '#CBCDE9';
  let logInInfo = useSelector((state) => state.user);
  let userInfo = logInInfo.user;
  //let userInfo = userInfo.user;
  const currentPost_id = useLocation().state.value; //post_id 정보만 받아오기
  const [commentCount, setCommentCount] = useState(0);

  const [currentPost, setCurrentPost] = useState();
  const [commentList, setCommentList] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const openedImg = useRef(null);
  useEffect(() => {
    if (userInfo) {
      const fetchPostData = async () => {
        setLoading(true);

        const response = await getData(
          GET_POST_DETAIL(boardType, currentPost_id),
          {
            //'Content-Type': `application/json`,
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
        );
        if (response) {
          setCurrentPost(response.data);
          return response;
        }
      };

      const fetchCommentData = async () => {
        const response = await getData(GET_COMMENT_OF(currentPost_id), {
          Authorization: `Bearer ${localStorage.getItem('AToken')}`,
        });
        if (response) {
          setCommentList(response.data);
        }
        setLoading(false);
      };
      let res = fetchPostData();
      fetchCommentData();
    }
  }, [userInfo]);
  useEffect(() => {
    if (currentPost && commentList && userInfo) {
      setLoading(false);
      setCommentCount(currentPost.commentCount);
    }
  }, [currentPost, userInfo, commentList]);

  /// 여기서부터 메인 변수들 ///
  const [content, setContent] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);

  const isAnonymous = useRef(false);
  const scrollRef = useRef(null);
  const replyToText = useRef(null);
  const commentEditor = useRef(null);
  const mobileViewRef = useRef(null);

  //기타 이벤트 핸들링 함수

  const handleResizeHeight = () => {
    const textarea = document.querySelector('.commentEditor');
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const nav = useNavigate();

  const onCommentSelection = (e) => {
    if (selectedComment === null) {
      //아무것도 선택하지 않은 상태에서 댓글 선택
      setSelectedComment(e.target.comment);
      replyToText.current = `${e.target.writer}에게 답장`;
      commentEditor.current.focus();
    } else if (selectedComment === e.target.comment) {
      //선택한 댓글 다시 선택 시 댓글 선택 취소
      setSelectedComment(null);
      replyToText.current = null;
      commentEditor.current.focus();
    } else {
      //댓글 하나 선택한 상태에서 다른 댓글 선택
      setSelectedComment(e.target.comment);
      replyToText.current = `${e.target.writer}에게 답장`;
      commentEditor.current.focus();
    }
  };
  const onCommentSubmit = async () => {
    if (content == '') {
      commentEditor.current.focus();
      return;
    }
    if (selectedComment === null) {
      //댓글일 경우
      if (logInInfo.isAuthenticated) {
        addComment(WRITE_COMMENT_ON(currentPost_id));
      } else {
        return alert('로그인이 필요합니다.');
      }
    } else {
      //답글일 경우
      if (logInInfo.isAuthenticated) {
        addComment(WRITE_REPLY_ON(selectedComment.commentId));
      } else {
        return alert('로그인이 필요합니다.');
      }
    }
    setContent('');
    setSelectedComment(null);
    replyToText.current = null;
    const textarea = document.querySelector('.commentEditor');
    textarea.style.height = 'auto';
  };

  const addComment = async (url) => {
    const comment = {
      id: userInfo.id,
      contents: content,
      anonymous: isAnonymous.current,
    };
    const jsonData = JSON.stringify(comment);

    const res = await postData(url, jsonData, {
      Authorization: `Bearer ${localStorage.getItem('AToken')}`,
    });

    const commentFE = {
      writerInfo: {
        nickname: userInfo.nickname,
        id: userInfo.id,
      },
      commentId: selectedComment
        ? selectedComment.commentId
        : commentList.length + 1,
      replyId: selectedComment ? selectedComment.replyCount + 1 : null,
      replyCount: 0,
      anonymous: isAnonymous.current,
      contents: content,
    };
    setCommentList([...commentList, commentFE]);
    setCommentCount((prev) => prev + 1);
    //등록시 바로 보일 수 있도록

    //scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    //자식에게 ref전달 알아보기
  };

  if (isLoading) {
    return <Loading />;
  }

  //const currentVisualViewHeight = window.visualViewport.height;
  //replyToText.current = currentVisualViewHeight;
  if (userInfo && currentPost && commentList) {
    //return <div>{currentPost.postId}</div>;

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
              {currentPost.anonymous ? '익명' : currentPost.writerInfo.nickname}
            </s.InfoLabel>
            <s.InfoLabel>
              {new Date(currentPost.createdAt).toLocaleString('ko-KR')}
            </s.InfoLabel>
          </s.PostInfo>
        </s.PostInfoHeader>
        <s.DetailPageLayout>
          <s.Title color={titleColor}>
            {currentPost.title}
            <s.DispatchedInfo>
              {showDispatchedUniv(
                currentPost.writerInfo,
                currentPost.anonymousUniv,
              )}
            </s.DispatchedInfo>
          </s.Title>
          <s.Content>
            {currentPost.content}
            <s.ImgSection>
              {currentPost.imageUrls
                ? currentPost.imageUrls.map((img, index) => (
                    <s.ContentImg
                      src={img}
                      key={index}
                      onClick={(e) => {
                        openedImg.current = e.target.src;
                        setImageModalOpen(true);
                      }}
                    />
                  ))
                : null}
            </s.ImgSection>
          </s.Content>
          <s.CommentNumSection>
            <img src={commentImg} />
            {commentCount}
          </s.CommentNumSection>
          <s.CommentSection ref={scrollRef}>
            {commentList.map((comment, index) => {
              let commentElement;
              if (comment.replyId === null) {
                //map 돌 때 comment만 돌고있음
                commentElement = (
                  <Comment
                    key={index}
                    comment={comment}
                    onCommentClick={onCommentSelection}
                    clickedComment={selectedComment}
                    postWriter_id={currentPost.writerInfo.id}
                  />
                );
                if (comment.replyCount === 0) {
                  //답글이 없으면 comment만 반환
                  return commentElement;
                } else {
                  //답글이 있으면
                  let replyList = commentList.filter(
                    (reply) =>
                      reply.commentId === comment.commentId && reply.replyId,
                  );

                  return (
                    <div
                      style={{ width: '100%' }}
                      key={index}
                    >
                      {commentElement}
                      {replyList.map((reply, index) => (
                        <Reply
                          reply={reply}
                          key={index}
                          postWriter_id={currentPost.writerInfo.id}
                        />
                      ))}
                    </div>
                  );
                }
              }
            })}
          </s.CommentSection>
          {isImageModalOpen && (
            <ImgModal
              onClick={() => {
                setImageModalOpen(false);
              }}
            >
              <Img src={openedImg.current} />
            </ImgModal>
          )}
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
              placeholder={
                logInInfo.isAuthenticated
                  ? '댓글을 작성해주세요.'
                  : '로그인이 필요합니다.'
              }
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
              disabled={!logInInfo.isAuthenticated}
            />
          </s.EditorWrapper>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            onClick={onCommentSubmit}
          >
            <circle
              cx="11"
              cy="11"
              r="11"
              fill="url(#paint0_linear_2168_7179)"
            />
            <path
              d="M11.0002 6L6.8335 10.1667M11.0002 6L15 10.1667M11.0002 6V16"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2168_7179"
                x1="0"
                y1="0"
                x2="22"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={color1} />
                <stop
                  offset="1"
                  stopColor={color2}
                />
              </linearGradient>
            </defs>
          </svg>
        </s.CommentWritingDiv>
      </div>
    );
  }
  //return <div>{currentPost.anonymous}</div>;
};

export default DetailPage;

const ImgModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  bottom: 0;
  top: 0;
  // max-width: 24.375rem;
  width: 100%;
  max-width: 480px;
  height: 100%;
  background: black;
  z-index: 3;
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.src})`} no-repeat center;
  background-size: contain;
`;
