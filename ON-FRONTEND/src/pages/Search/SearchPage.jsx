import * as s from './SearchPageStyled';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import search_button1 from '../../assets/images/search_button1.svg';
import search_exit from '../../assets/images/search_exit.svg';
import SinglePost from '../../components/SinglePost/SinglePost';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false); //연결할 때 로딩 추가
  const [searchInput, setSearchInput] = useState(''); //검색창에 입력한 것
  const [searchTarget, setSearchTarget] = useState(''); //돋보기 누를 때 넘어가는 것
  const [searchResult, setSearchResult] = useState([]); //검색 결과 넣음
  const [showResult, setShowResult] = useState(false); //검색 결과 있/없 나타냄
  const [error, setError] = useState(null); //에러처리 필요

  const navigate = useNavigate();

  const exitSearchPage = () => {
    navigate(-1);
  };

  const searchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clickSearchButton = (e) => {
    setSearchTarget(searchInput);
  };

  useEffect(() => {
    if (searchInput === '') {
      console.log('null');
      setSearchResult([]);
      setShowResult(false);
    } else {
      console.log('useEffect:' + searchTarget);
      const fetchSearchResult = async () => {
        setIsLoading(true);
        try {
          console.log('true');
          //함수
        } catch (error) {
          setError(error.message);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      setShowResult(true);
    }
  }, [searchTarget]);

  return isLoading ? (
    <Loading />
  ) : (
    <s.PageLayout>
      <s.SearchWrapper>
        <s.SearchBox>
          <s.SearchInput
            type="text"
            value={searchInput}
            onChange={searchInputChange}
            placeholder="궁금한 것을 입력해보세요"
          />
          <s.SearchButton
            src={search_button1}
            onClick={clickSearchButton}
          />
        </s.SearchBox>
        <s.Exit
          src={search_exit}
          onClick={exitSearchPage}
        />
      </s.SearchWrapper>
      {showResult ? (
        <s.SearchResultContainer>
          <SinglePost
            title={'[🇩🇪 독일 교환학생 준비] Ep 1. 테아민 잡기기기기기기기기기'}
            time={'10분 전'}
            content={
              '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약!저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!'
            }
            nickName={'익명'}
            verified={'인증여부'}
            comment={'1'}
            categories={'자유 커뮤니티'}
          />
        </s.SearchResultContainer>
      ) : (
        <s.PreSearchWrapper>
          <s.PreSearchIcon />
          <s.ONIcon />
          <p>나만의 완벽한</p>
          <p>교환/방문 라이프를 켜다</p>
        </s.PreSearchWrapper>
      )}
    </s.PageLayout>
  );
};

export default Search;
