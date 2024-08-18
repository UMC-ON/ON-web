import { useNavigate } from 'react-router-dom';
import * as s from './PostPageStyled.jsx';
import camera from '../../assets/images/camera.svg';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import { useState, useRef, useEffect } from 'react';
import { PostList } from '../../components/Common/TempDummyData/PostList.jsx';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading.jsx';
import axios from 'axios';
import { getData, postData } from '../../api/Functions.jsx';
import { GET_USER_INFO } from '../../api/urls.jsx';

const PostPage = ({ color, title }) => {
  const navigate = useNavigate();
  const images = useRef([]);
  const [isLoading, setLoading] = useState(false);
  const userInfo = useSelector((state) => state.user);
  //const [userInfo, setUserInfo] = useState(null);
  const [input, setInput] = useState({
    boardType: `${title}`,
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

  const BETest = true;

  useEffect(() => {
    if (BETest) {
      const fetchData = async () => {
        setLoading(true);

        const response = await getData(GET_USER_INFO, {
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        });
        if (response) {
          console.log(response.data.result);
        }

        setLoading(false);
      };
      fetchData();
      console.log('useEffect 실행');
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (BETest && !userInfo) {
    return null;
  }

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
        imgIdList: images.current,
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

    navigate(-1, { replace: true });
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
          color={color}
          onClick={onSubmit}
        >
          등록
        </s.ColorButton>
      </s.ConfirmHeader>
      <s.BigContainer>
        <s.HeadingTitle style={{ fontSize: '25px', color: `${color}` }}>
          {title === 'INFO' ? '정보' : '자유'}글 작성
        </s.HeadingTitle>
        <s.PostInfoSection>
          <s.InfoLabel>
            교환 국가:
            <s.ColorButtonTag color={color}>
              {userInfo.country}
            </s.ColorButtonTag>
          </s.InfoLabel>
          <s.SpaceBetweenContainer>
            <s.InfoLabel>
              <div style={{ whiteSpace: 'nowrap' }}>교환교:</div>

              <s.ColorButtonTag color={color}>
                {userInfo.dispatchedUniversity}
              </s.ColorButtonTag>
            </s.InfoLabel>
            <DefaultCheckBox
              after="파견교 비공개"
              onChange={onChangeInput}
              name="anonymousUniv"
              checkBoxStyle={{ color: `${color}` }}
            />
          </s.SpaceBetweenContainer>
        </s.PostInfoSection>
        <s.TitleSection>
          <s.HeadingTitle>제목</s.HeadingTitle>
          <s.EditorWrapper
            color={color}
            style={{ height: '38px' }}
          >
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
          <s.EditorWrapper
            color={color}
            style={{ minHeight: '400px' }}
          >
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
          name="anonymous"
          checkBoxStyle={{ color: `${color}` }}
        />
      </s.Footer>
    </>
  );
};
export default PostPage;
