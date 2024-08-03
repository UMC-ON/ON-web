import { useNavigate } from 'react-router-dom';
import * as s from '../PostPageStyled.jsx';
import camera from '../../../assets/images/camera.svg';
import DefaultCheckBox from '../../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import { useState } from 'react';
import {
  PostList,
  userInfo,
} from '../../../components/Common/TempDummyData/PostList.jsx';

const InfoPostPage = () => {
  const [input, setInput] = useState({
    post_id: PostList.length + 1,
    createdDate: new Date(),
    writerInfo: { ...userInfo },
    is_anonymous: null,
    is_anonymous_univ: null,
    title: '',
    content: '',
    commentList: [],
  });
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmit = () => {
    PostList.unshift(input); //DB에 저장
    navigate('/community/info', { replace: true });
  };
  const navigate = useNavigate();

  return (
    <>
      <s.ConfirmHeader>
        <s.ColorButton
          color="#E4E4E4"
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </s.ColorButton>
        <s.ColorButton
          color={'#BFD8E5'}
          onClick={onSubmit}
        >
          등록
        </s.ColorButton>
      </s.ConfirmHeader>
      <s.BigContainer>
        <s.HeadingTitle style={{ fontSize: '25px', color: '#BFD8E5' }}>
          정보글 작성
        </s.HeadingTitle>
        <s.PostInfoSection>
          <s.InfoLabel>
            교환 국가:
            <s.ColorButtonTag>
              {userInfo.dispatched_country_id}
            </s.ColorButtonTag>
          </s.InfoLabel>
          <s.SpaceBetweenContainer>
            <s.InfoLabel>
              <div style={{ whiteSpace: 'nowrap' }}>교환교:</div>

              <s.ColorButtonTag>{userInfo.dispatched_univ}</s.ColorButtonTag>
            </s.InfoLabel>
            <DefaultCheckBox
              after="파견교 비공개"
              onChange={onChangeInput}
              name="is_anonymous_univ"
            />
          </s.SpaceBetweenContainer>
        </s.PostInfoSection>
        <s.TitleSection>
          <s.HeadingTitle>제목</s.HeadingTitle>
          <s.EditorWrapper style={{ height: '38px' }}>
            <s.Editor
              wrap="off"
              style={{ fontWeight: 'bold' }}
              name="title"
              onChange={onChangeInput}
            />
          </s.EditorWrapper>
        </s.TitleSection>
        <s.ContentSection>
          <s.HeadingTitle>내용</s.HeadingTitle>
          <s.EditorWrapper style={{ height: '585px' }}>
            <s.Editor
              name="content"
              onChange={onChangeInput}
            />
          </s.EditorWrapper>
        </s.ContentSection>
      </s.BigContainer>
      <s.Footer>
        <img src={camera} />
        <DefaultCheckBox
          after="익명"
          wrapperStyle={{ fontSize: '14px' }}
          onChange={onChangeInput}
          name="is_anonymous"
        />
      </s.Footer>
    </>
  );
};
export default InfoPostPage;
