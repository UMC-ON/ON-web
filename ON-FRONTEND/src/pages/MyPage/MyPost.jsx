import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './MyPostStyled';
import { useState, useEffect } from 'react';
import { getData } from '../../api/Functions';
import {
  GET_MY_ACCOMPANY_POST,
  GET_MY_MARKET_POST,
  GET_MY_POST,
} from '../../api/urls';
import { useSelector } from 'react-redux';

import Loading from '../../components/Loading/Loading';
import NoContent from '../../components/NoContent/NoContent';
import SingleMyPost from '../../components/SingleMyPost/SingleMyPost';
import SingleMyAccompany from '../../components/SingleMyPost/SingleMyAccompany';
import SingleMyTrade from '../../components/SingleMyPost/SingleMyTrade';
import Img from '../../assets/images/postImgExample.svg';

const MyPost = () => {
  const [currentMode, setCurrentMode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  //정보글: 0, 자유글: 1, 동행 구하기: 2, 물품거래: 3
  const [infoPostResult, setInfoPostResult] = useState([]); //삭제하기
  const [freePostResult, setFreePostResult] = useState([]);
  const [accompanyPostResult, setAccompanyPostResult] = useState([]);
  const [tradePostResult, setTradePostResult] = useState([]);

  let userInfo = useSelector((state) => state.user.user);

  //동행 구하기
  useEffect(() => {
    const fetchAccPost = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_MY_ACCOMPANY_POST,
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
          { userId: userInfo.id },
        );

        if (response) {
          console.log('accompany: ', response.data);
          setAccompanyPostResult(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccPost();
  }, []);

  //거래
  useEffect(() => {
    const fetchTradePost = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_MY_MARKET_POST,
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
          { userId: userInfo.id },
        );

        if (response) {
          console.log('MARKET: ', response.data);
          setTradePostResult(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTradePost();
  }, []);

  //내 정보글 보기
  useEffect(() => {
    const fetchMyInfoPost = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_MY_POST,
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
          { userId: userInfo.id, boardType: 'INFO' },
        );

        if (response) {
          console.log('info: ', response.data);
          setAccompanyPostResult(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyInfoPost();
  }, []);

  //내 자유글 보기
  useEffect(() => {
    const fetchMyInfoPost = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_MY_POST,
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
          { userId: userInfo.id, boardType: 'FREE' },
        );

        if (response) {
          console.log('free: ', response.data);
          setFreePostResult(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyInfoPost();
  }, []);

  const handleModeChange = (mode) => {
    if (currentMode !== mode) {
      setCurrentMode(mode);
    }
  };
  useEffect(() => {
    console.log('Current Mode:', currentMode);
  }, [currentMode]);

  useEffect(() => {
    console.log('trade: ', tradePostResult);
    console.log('acc: ', accompanyPostResult);
    console.log('free: ', freePostResult);
    console.log('info: ', infoPostResult);
  }, [tradePostResult, accompanyPostResult, freePostResult, infoPostResult]);

  return (
    <s.PageLayout>
      <PageHeader pageName={'내 글'} />
      <s.ModeContainer>
        <s.ModeButton
          onClick={() => handleModeChange(0)}
          $active={currentMode === 0}
        >
          정보글
        </s.ModeButton>
        <s.ModeButton
          onClick={() => handleModeChange(1)}
          $active={currentMode === 1}
        >
          자유글
        </s.ModeButton>
        <s.ModeButton
          onClick={() => handleModeChange(2)}
          $active={currentMode === 2}
        >
          동행 구하기
        </s.ModeButton>
        <s.ModeButton
          onClick={() => handleModeChange(3)}
          $active={currentMode === 3}
        >
          물품 거래
        </s.ModeButton>
      </s.ModeContainer>

      {currentMode === 0 ? ( //정보글
        infoPostResult && infoPostResult.length === 0 ? (
          <NoContent
            content={'글'}
            style={{ marginBottom: '10rem' }}
          />
        ) : (
          <s.PostWrapper>
            {infoPostResult.map((data) => (
              <SingleMyPost
                title={data.title}
                time={data.createdAt}
                content={data.content}
                nickName={data.writerInfo.nickName}
                image={data.imageUrls}
                verified={''}
                comment={data.commentCount}
                categories={'정보 커뮤니티'}
              />
            ))}
          </s.PostWrapper>
        )
      ) : currentMode === 1 ? ( //자유글
        freePostResult.length === 0 ? (
          <NoContent
            content={'글'}
            style={{ marginBottom: '10rem' }}
          />
        ) : (
          <s.PostWrapper>
            <SingleMyPost
              title={
                '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기기기기기기기기기'
              }
              time={'10분 전'}
              content={'자유글'}
              nickName={'익명'}
              image={{ Img }}
              verified={'인증여부'}
              comment={'1'}
              categories={'자유 커뮤니티'}
            />
          </s.PostWrapper>
        )
      ) : currentMode === 2 ? ( //동행 구하기
        accompanyPostResult.length === 0 ? (
          <NoContent
            content={'글'}
            style={{ marginBottom: '10rem' }}
          />
        ) : (
          <s.PostWrapper>
            <SingleMyAccompany
              title={
                '[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기기기기기기기기기'
              }
              date={'10분 전'}
              content={
                '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약!저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!'
              }
              image={{ Img }}
              numberOfPeople={'1'}
              location={'자유 커뮤니티'}
            />
          </s.PostWrapper>
        )
      ) : tradePostResult.length === 0 ? ( //물품거래
        <NoContent
          content={'글'}
          style={{ marginBottom: '10rem' }}
        />
      ) : (
        <s.PostWrapper>
          <SingleMyTrade
            title={'블루투스 키보드'}
            time={'10분 전'}
            tradeStyle={'택배거래'}
            isAvailable={'거래 가능'}
            user={'루이'}
            image={{ Img }}
            location={'독일 베를린'}
            price={'5000'}
          />
        </s.PostWrapper>
      )}
    </s.PageLayout>
  );
};
export default MyPost;
