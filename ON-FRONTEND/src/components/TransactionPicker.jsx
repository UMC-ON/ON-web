import React from 'react';
import styled from 'styled-components';

import closeIcon from '../assets/images/close_button.svg';

function TransactionPicker({ isVisible, tempTransaction, onTempTransactionChange, onApply, onClose }) {
  if (!isVisible) return null;

  return (
    <PickerOverlay>
      <PickerContainer>
        <PickerHeader>
          <Title>거래방식</Title>
          <CloseButton onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </CloseButton>
        </PickerHeader><br />
        <ButtonContainer>
          <PickerButton
            selected={tempTransaction === '직거래'}
            onClick={() => onTempTransactionChange('직거래')}
          >
            직거래
          </PickerButton>
          <PickerButton
            selected={tempTransaction === '택배거래'}
            onClick={() => onTempTransactionChange('택배거래')}
          >
            택배거래
          </PickerButton>
        </ButtonContainer><br/>
        <ActionContainer>
          <ResetButton onClick={() => onTempTransactionChange('')}>
            초기화
          </ResetButton>
          <ApplyButton
            disabled={!tempTransaction}
            onClick={onApply}
          >
            적용
          </ApplyButton>
        </ActionContainer>
      </PickerContainer>
    </PickerOverlay>
  );
}

export default TransactionPicker;

const PickerOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: flex-end;
`;

const PickerContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 14px 14px 0px 0px;
  width: 100%;
  max-width: 400px;
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
  color: #CCCCCC;
  font-size: 12px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  img {
    width: 12px;
    height: 12px;
  }
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
  border: 1px solid #C2C7FF;
  background: ${({selected}) => (selected ? '#C2C7FF' : 'white')};
  color: ${({ selected }) => selected ? 'white' : '#000000'};
  cursor: pointer;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 0.8em;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  background: ${(props) => (props.disabled ? '#E0E0E0' : '#C2C7FF')};
  color: ${(props) => (props.disabled ? 'black' : '#FFFFFF')};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 10em;
`;