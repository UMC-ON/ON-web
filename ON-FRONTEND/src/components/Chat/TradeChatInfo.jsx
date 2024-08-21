import { useState, useEffect } from 'react';
import * as s from './TradeChatInfoStyled';
import { GET_TRADE_INFO } from '../../api/urls';
import { getData } from '../../api/Functions';
import Loading from '../Loading/Loading';

const TradeChatInfo = ({ user, roomId }) => {
  const [infoResult, setInfoResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTradeInfo = async () => {
      setIsLoading(true);
      try {
        const response = await getData(
          GET_TRADE_INFO(roomId),
          {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          { roomId: roomId },
        );

        if (response) {
          console.log(response.data.result);
          setInfoResult(response.data.result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTradeInfo();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <s.InfoWrapper>
      {user === 1 ? (
        <s.InfoText>
          아래 글에 대해 궁금한 것을 판매자에게 물어보고 거래하세요.
        </s.InfoText>
      ) : (
        <s.InfoText>
          아래 글에서 시작된 거래 채팅방입니다. 질문에 답변해 주시고 거래가
          완료되면 <span>거래 완료</span>를 눌러주세요.
        </s.InfoText>
      )}
      <s.ProductWrapper>
        <s.ProductInfoContainer>
          <s.ProductName>{infoResult.productName}</s.ProductName>
          <s.ProductPrice>\ {infoResult.productPrice}</s.ProductPrice>
          <s.ProductInfo>{infoResult.tradeMethod} |</s.ProductInfo>
        </s.ProductInfoContainer>
        <s.ProductImg $link={infoResult.imageUrl} />
      </s.ProductWrapper>
    </s.InfoWrapper>
  );
};

export default TradeChatInfo;
