import { useNavigate } from 'react-router-dom';
import * as s from '../PostPageStyled.jsx';
import camera from '../../../assets/images/camera.svg';
import DefaultCheckBox from '../../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import { useState, useRef, useEffect } from 'react';
import { PostList } from '../../../components/Common/TempDummyData/PostList.jsx';
import { useSelector } from 'react-redux';

const InfoPostPage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);

  const [input, setInput] = useState({
    boardType: 'INFO',
    postId: PostList.length + 1,
    createdDate: new Date(),
    writerInfo: { ...userInfo },
    anonymous: null,
    anonymousUniv: null,
    title: '',
    content: '',
    commentList: [],
    imgIdList: [],
  });

  const images = useRef([]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onChangeImgFile = (fileList) => {
    if (fileList) {
      const imgList = Array.from(fileList);
      const selectedFiles = imgList.map((file) => {
        return URL.createObjectURL(file);
      });

      images.current = images.current.concat(selectedFiles);
      setInput({
        ...input,
        img_id_list: images.current,
      });
    }
  };
  const onSubmit = () => {
    if (!input.title) {
      alert('제목을 입력하세요');
      return;
    }
    if (!input.content) {
      alert('내용을 입력하세요');
      return;
    }
    PostList.unshift(input); //DB에 저장

    navigate('/community/info', { replace: true });
  };

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
            <s.ColorButtonTag>{userInfo.country}</s.ColorButtonTag>
          </s.InfoLabel>
          <s.SpaceBetweenContainer>
            <s.InfoLabel>
              <div style={{ whiteSpace: 'nowrap' }}>교환교:</div>

              <s.ColorButtonTag>
                {userInfo.dispatchedUniversity}
              </s.ColorButtonTag>
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
            <s.TitleEditor
              wrap="off"
              style={{ fontWeight: 'bold' }}
              name="title"
              onChange={onChangeInput}
            />
          </s.EditorWrapper>
        </s.TitleSection>
        <s.ContentSection>
          <s.HeadingTitle>내용</s.HeadingTitle>
          <s.EditorWrapper style={{ minHeight: '400px' }}>
            <s.Editor
              name="content"
              onChange={onChangeInput}
            />
            <s.ImgSection>
              {images.current.map((url, i) => (
                <s.PreviewImg
                  src={url}
                  width="160"
                  height="160"
                  alt={`image${i}`}
                  key={url}
                />
              ))}
            </s.ImgSection>
          </s.EditorWrapper>
        </s.ContentSection>
      </s.BigContainer>
      <s.Footer>
        <label>
          <input
            accept=".jpg, .jpeg, .png, .mp4"
            type="file"
            style={{ display: 'none' }}
            multiple
            onChange={(e) => {
              onChangeImgFile(e.target.files);
            }}
          />
          <img src={camera} />
        </label>
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
