import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import detailImg from '../assets/images/accompany_img.svg';
import profileImg from '../assets/images/englandIcon.svg';
import coordinateIcon from '../assets/images/coordinate_icon.svg';
import marketImg2 from '../assets/images/bannerDefault.svg';

import calendarIcon from '../assets/images/black_calendar_icon.svg';
import placeIcon from '../assets/images/black_place_icon.svg';
import plusIcon from '../assets/images/black_plus_icon.svg';
import marketImg from '../assets/images/borough_market.svg';


import CardAccompanyList from '../components/CardAccompanyList';
import AccompanyHeader from '../components/AccompanyHeader';
import FirstModal from '../components/FirstModal';
import SecondModal from '../components/SecondModal';
import LoadingScreen from '../components/LoadingScreen';
import ReportModal from '../components/ReportModal';
import ShareModal from '../components/ShareModal';

import CountryIcon from '../components/CountryIcon';

import { showDate } from '../components/Common/InfoExp';

import { useSelector } from 'react-redux';
import { getData, postData } from '../api/Functions';
import { GET_DETAIL_ACCOMPANY, GET_SIMILAR_ACCOMPANY, GET_USER_INFO, GET_ROOM_ID } from '../api/urls';

function AccompanyDetailPage() {
  const location = useLocation();
  const { postId } = useParams();
  

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const [isValidated, setIsValidated] = useState(null);

  const [nickname, setNickName] = useState('');
  const [userId, setUserId] = useState(0);

  const [infoData, setInfoData] = useState([]);
  const [accompanyData, setAccompanyData] = useState([]);

  const userInfo = useSelector((state) => state.user.user);
   
 
  const navigate = useNavigate();

  const openFirstModal = () => {
    if (userInfo.country != null)
    {
    console.log("First modal opened");
    setIsFirstModalOpen(true);
    }
    else
    {
      setIsSecondModalOpen(true);
    }
  };

  const closeFirstModal = () => {
    console.log("First modal closed");
    setIsFirstModalOpen(false);
  };

  const openSecondModal = () => {
    console.log("Second modal opened");
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    console.log("Second modal closed");
    setIsSecondModalOpen(false);
  };

  const openReportModal = () => {
    console.log("Report modal opened");
    setIsReportModalOpen(true);
  };

  const closeReportModal = () => {
    console.log("Report modal closed");
    setIsReportModalOpen(false);
  };

  const openShareModal = () => {
    console.log("Share modal opened");
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    console.log("Share modal closed");
    setIsShareModalOpen(false);
  };
 
  const handleBlueButtonClick = () => {
    closeFirstModal();
    applyData();
    // alert('start chat');
    // Start Chat
  };

  const openNextModal = () => {
    setIsSecondModalOpen(false);
    navigate('/mypage/schoolAuth');
  };

  function replaceHyphenWithDot(dateString) {
    return dateString.replace(/-/g, '.');
  }

  const applyData = async () => {
    try {
      // console.log("userId: ");
      // console.log(typeof infoData[0].userId);
      // console.log(typeof infoData[0].userId);
      // console.log("postId: ");
      // console.log(typeof postId);
      
      const response = await postData(
        GET_ROOM_ID,
        { chatType: "COMPANY", receiverId: infoData[0].userId, postId: postId},
        {
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        }
      );
  
      if (response) {
        const roomId = response.data.result.roomId;
        const senderName = infoData[0].nickname;
        console.log('Application successful:', roomId);
        navigate(`/chat/accompany/${roomId}`, { state: { roomId, senderName } });
      } else {
        console.error('Application failed');
      }
    } catch (error) {
      console.error('Error applying for accompany:', error);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info_data = await getData(GET_DETAIL_ACCOMPANY(postId),{
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        }); 
        setInfoData(info_data.data);
        console.log(info_data.data);
        // 

        const user_data = await getData(GET_USER_INFO,{
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        }); 
        // console.log(user_data.data.result.id);
        setUserId(user_data.data.result.id);

        // console.log(info_data.data[0].nickname);
        setNickName(info_data.data[0].nickname);

        const accompany_data = await getData(GET_SIMILAR_ACCOMPANY(postId),{
          Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
        }); 
        setAccompanyData(accompany_data.data);
        console.log(accompanyData);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, [postId]); 


    return (
      <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <>
        <AccompanyHeader openModal={openShareModal}/>
        <Space/>
        {infoData.map((card, index) => (
          <div key={index}>
          <BannerContainer>
            {card.imageUrls[0] ?
            <><BannerImg src={card.imageUrls[0]} alt="Banner" /> <GradientOverlay /></>:
            <BannerImg src={marketImg2}/>
            }
            <ProfileTextContainer>
              <CountryIcon country={card.currentCountry}/>
              <TextContainer>
                <Left>
                  <BigText>{card.nickname}</BigText>
                  <GreyText $left="8px">(</GreyText>
                  {card.ageAnonymous ? 
                  <></> :
                  <GreyText>{card.age}세/</GreyText>
                  }
                  {card.gender == 'FEMALE' ? 
                  <GreyText>여</GreyText>:
                  <GreyText>남</GreyText>
                   }
                  <GreyText>)</GreyText>
                </Left>
                <Left>
                  <SmallIcon src={coordinateIcon}/>
                  <GreyText $size="0.9em">{card.currentCountry}</GreyText>
                  {card.universityAnonymous ?
                  <></> :
                  <>
                    <GreyText $size="0.9em">,&nbsp;</GreyText>
                    <GreyText $size="0.9em">{card.dispatchedUniversity}</GreyText>
                  </>
                  }
                </Left>
              </TextContainer>
            </ProfileTextContainer>
          </BannerContainer>
       

        <BlueContainer>
          <TitleText $size="1.3em">{card.title}</TitleText>
          <Left><GreyText>{showDate(card.createdAt)}</GreyText></Left>
        </BlueContainer>

        <BodyText>
          {card.content}
        </BodyText>

        <PurpleContainer>
          <FlexContainer>
            <Row>
              <RowText><BlackIcon src={calendarIcon}/>희망일정</RowText>
              <RowText><BlackIcon src={placeIcon}/>지역</RowText>
              <RowText><BlackIcon src={plusIcon}/>모집 인원</RowText>
            </Row>
            <Row>
              
                {(card.startDate == card.endDate) ?
                  <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                  {replaceHyphenWithDot(card.startDate)} <br/><LittleSpace/>당일치기
                  </RowText>
                :
                  <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                  {replaceHyphenWithDot(card.startDate)} <br/><LittleSpace/>~ {replaceHyphenWithDot(card.endDate)}
                  </RowText>
                }
              <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                {card.travelArea[0]}<br/><LittleSpace/>{card.travelArea[1]}
              </RowText>
              <RowText $size="0.9em" $weight="normal" $color="#7a7a7a">
                ({card.currentRecruitNumber}/{card.totalRecruitNumber})
              </RowText>
            </Row>
          </FlexContainer>
        </PurpleContainer>

        <Left>
        <LittleButton onClick={openReportModal}>이 게시물 신고하기</LittleButton>
        </Left>

        <Line/>

        <BigContainer>
            <LeftContainer>
            <MiddleText color="#3E73B2" spacing="1vh">비슷한</MiddleText>
            <MiddleText>동행글 추천</MiddleText>
            </LeftContainer>
        </BigContainer>

        <CardAccompanyList color="#c5d3e0" cards={accompanyData}></CardAccompanyList>
        <Space/>

        <BottomTabLayout>
          {card.recruitCompletd ?
          <GreyButton $width="500px">모집이 완료된 동행 글이에요.</GreyButton> :
          <>
          <BlueButton onClick={openFirstModal} $width="500px">동행 신청 및 문의하기</BlueButton>
          </>
          }
        </BottomTabLayout>
        </div>
         ))}

        {isFirstModalOpen && (
        <FirstModal closeModal={closeFirstModal} openNextModal={handleBlueButtonClick} 
          nickname={nickname}
        />
        )}
        {isSecondModalOpen && <SecondModal closeModal={closeSecondModal} openNextModal={openNextModal} />}
        {isReportModalOpen && <ReportModal closeModal={closeReportModal} />}
        {isShareModalOpen && <ShareModal closeModal={closeShareModal} />}
      </>
      )}
      </>
    );
}

export default AccompanyDetailPage;

const LittleSpace = styled.div`
  margin-top: 5px;
`;

const BlueContainer = styled.div`
  margin: 0 auto;
  margin-top: 13vh;
  background: rgb(110, 186, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  width: 83%;
  border: 1px solid #DFDFDF;
  margin-bottom: 2vh;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BlackIcon = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;


const SmallIcon = styled.img`
  width: 15px;
  height: 15px;
  padding-top: 11px;
  margin-right: 5px;
`;


const Space = styled.div`
  margin-top: 7vh;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: inline-block;
`;

const BannerImg = styled.img`
  // width: 100%;
  // height: auto;
  // display: block;

  object-fit: cover;
  width: 100%;
  height: 220px;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #363636, transparent);
  opacity: 0.7; 
`;

const ProfileTextContainer = styled.div`
  position: absolute;
  bottom: -35%; 
  left: 5%; 
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 100px;
  width: 12vh;
  height: 12vh; 
  object-fit: cover; 
  object-position: center;
  // border: 1px solid #D9D9D9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`;

const TextContainer = styled.div`
  margin-left: 1em;
  margin-top: 1.5em;
`;

const BigText = styled.p`
  color: black; 
  margin: 0;
  padding-top: 0px;
  font-size: ${props => props.$size || '1.5em'};
  font-weight: bold;
  text-align: left;
  line-height: 3vh;
  max-width: 180px;
  
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

const TitleText = styled.p`
  color: black; 
  margin: 0;
  padding-top: 0px;
  font-size: ${props => props.$size || '1.5em'};
  font-weight: bold;
  text-align: left;
  line-height: 3vh;
`;

const GreyText = styled.p`
  font-size:${props => props.$size || '0.7em'};
  color: #7a7a7a;
  padding-top: 0.8em;
  padding-left: ${props => props.$left || ''};
`;

const BodyText = styled.p`
  color: black; 
  line-height: 2.5vh;
  margin: 0 auto;
  width: 80%;
  text-align: left;
  font-size: 0.9em;
  margin-bottom: 5vh;
`;

const PurpleContainer = styled.div`
  width: 100%;
  background-color: #f8fcfc;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  margin-bottom: 1vh;
  background: rgb(194, 199, 255, 0.2);
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RowText = styled.div`
  flex: 1;
  text-align: center; 
  padding: 10px;
  color: ${props => props.$color || 'black'};
  font-weight: ${props => props.$weight || 'bold'};
  font-size: ${props => props.$size || '1em'};
`;

const LittleButton = styled.button`
  font-size: 0.7em;
  color: #7a7a7a;
  margin-left: 25px;
  background: rgb(110, 186, 255, 0);
  margin-bottom: 4vh;
`;

const Line = styled.div`
  border-top: 1px solid #d9d9d9;
  width: 25%;
  margin-left: 30px;
  margin-bottom: 5vh;
`;

const BigContainer = styled.div`
  padding-left: 1.5rem;
  padding-bottom: 0.7rem;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MiddleText = styled.div`
  color: ${props => props.color || '#000000'};
  margin-right: ${props => props.spacing || '0'};
  font-weight: bold;
  font-family: 'Inter-Regular';
  font-size: 1.2em;
`;

const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 87px;
  position: fixed;
  bottom: 0;
  border-top:  1px solid #DFDFDF;
  background: #ffffff;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 20px;
`;

const GreyButton = styled.button`
  align-items: center;
  justify-content: center; 
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 10px;
  width: ${props => props.$width || '148px'};
  height: 50px;
  padding: 15px 26px;
  background-color: #d9d9d9;
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
`;


const BlueButton = styled.button`
  align-items: center;
  justify-content: center; 
  left: 0;
  right: 0;
  margin: 0 auto; 
  border-radius: 10px;
  width: ${props => props.$width || '148px'};
  height: 50px;
  padding: 15px 26px;
  background: linear-gradient(135deg, #D6EBFF, #C2C7FF);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
`;
