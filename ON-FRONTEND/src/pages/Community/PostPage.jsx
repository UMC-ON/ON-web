import { useNavigate } from 'react-router-dom';
import * as s from './PostPageStyled.jsx';
import camera from '../../assets/images/camera.svg';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading.jsx';
import { multiFilePostData } from '../../api/Functions.jsx';
import { WRITE_POST_IN } from '../../api/urls.jsx';

const PostPage = ({ color, boardType }) => {
  const navigate = useNavigate();
  const previewImages = useRef([]);
  const sendingImages = useRef([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let userInfo = useSelector((state) => state.user.user);

  const [input, setInput] = useState({
    boardType: `${boardType}`,
    createdDate: new Date(),
    anonymous: null,
    anonymousUniv: null,
    title: '',
    content: '',
  });

  const BETest = true;

  useEffect(() => {
    if (userInfo) {
      console.log(`유저:${userInfo}`);
      console.log('useEffect 실행');
    }
    if (userInfo && userInfo.id) {
      setInput({ ...userInfo, id: userInfo.id });
    }
  }, [userInfo]);
  useEffect(() => {
    setImageFiles(sendingImages.current);
    console.log(imageFiles);
  }, [imageFiles]);

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
      console.log(imgList);
      const previewURLs = imgList.map((file) => {
        return URL.createObjectURL(file);
      });
      sendingImages.current = sendingImages.current.concat(imgList);
      previewImages.current = previewImages.current.concat(previewURLs);
      setImageFiles(sendingImages.current);
    }
  };
  const onSubmit = async () => {
    if (!input.title) {
      alert('제목을 입력하세요');
      return;
    }
    if (!input.content) {
      alert('내용을 입력하세요');
      return;
    }

    const formData = new FormData();

    const json = JSON.stringify(input);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('postRequestDTO', blob);
    imageFiles.map((img) => {
      //const blobImg = new Blob([img], { type: 'multipart/form-data' });
      formData.append('imageFiles', img);
    });
    const sendData = async () => {
      setLoading(true);

      const response = await multiFilePostData(
        WRITE_POST_IN(boardType),
        formData,
        {
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        },
      );
      if (response) {
        console.log(response.data.result);
      }

      setLoading(false);
    };
    sendData();
    // const request = await axios.post(WRITE_POST_IN(boardType), formData, {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('AToken')}`,
    //     'Content-Type': `multipart/form-data`,
    //   },
    // });

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
          {boardType === 'INFO' ? '정보' : '자유'}글 작성
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
              {previewImages.current.map((url, i) => (
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
