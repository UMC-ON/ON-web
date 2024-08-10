import React, { useState } from 'react';
import styled from 'styled-components';

import arrowIcon from '../assets/images/bottomArrow.svg';

const TransactionPicker = ({ selectedTransaction, onTransactionChange }) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const togglePickerVisibility = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  return (
    <>
      <GreyPicker onClick={togglePickerVisibility}>
        거래방식 
        <Icon src={arrowIcon} />
      </GreyPicker>
      {isPickerVisible && (
        <PickerOverlay>
          <PickerContainer>
            <PickerHeader>
              <Title>거래방식</Title>
              <CloseButton onClick={() => setIsPickerVisible(false)}>×</CloseButton>
            </PickerHeader>
            <ButtonContainer>
              <PickerButton
                selected={selectedTransaction === '직거래'}
                onClick={() => {
                  onTransactionChange('직거래');
                  setIsPickerVisible(false);
                }}
              >
                직거래
              </PickerButton>
              <PickerButton
                selected={selectedTransaction === '택배거래'}
                onClick={() => {
                  onTransactionChange('택배거래');
                  setIsPickerVisible(false);
                }}
              >
                택배거래
              </PickerButton>
            </ButtonContainer>
            <ActionContainer>
              <ResetButton onClick={() => onTransactionChange('')}>
                초기화
              </ResetButton>
              <ApplyButton
                disabled={!selectedTransaction}
                onClick={() => setIsPickerVisible(false)}
              >
                적용
              </ApplyButton>
            </ActionContainer>
          </PickerContainer>
        </PickerOverlay>
      )}
    </>
  );
};

export default TransactionPicker;

const GreyPicker = styled.button`
  background-color: #E8E8E8;
  font-family: 'Inter-Regular';
  font-size: 0.8em;
  padding: 3px;
  border-radius: 18px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
  color: #363636;
`;

const Icon = styled.img`
  padding-left: 3px;
`;

const PickerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: flex-end;  /* 수정: 아래쪽에 붙이기 위해 flex-end 사용 */
  justify-content: center;
`;

const PickerContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 20px 20px 0 0;  /* 수정: 둥근 모서리가 위쪽만 적용되도록 */
  width: 100%;  /* 가로 크기를 화면 전체로 */
  max-width: 500px;  /* 최대 너비를 제한 */
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const PickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PickerButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #A7A7A7;
  background-color: ${({ selected }) => selected ? '#E5E6FF' : '#FFFFFF'};
  color: ${({ selected }) => selected ? '#5F5FD9' : '#000000'};
  cursor: pointer;

  &:hover {
    background-color: #E5E6FF;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #5F5FD9;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  background-color: #5F5FD9;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;