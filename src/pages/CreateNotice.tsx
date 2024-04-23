import { Col } from '../components/atomic';
import styled from 'styled-components';

const CreateNotice = () => {
  return(
    <Col gap={60}>
      <StyledInput placeholder="제목을 입력해주세요"/>
      <StyledInput placeholder="내용을 입력해주세요"/>
      <StyledInput placeholder="작성자를 입력해주세요"/>
      <CommitBtn value="작성 완료"/>
    </Col>
  )
}

const CommitBtn = styled.input.attrs({type: "button"})`
  border:none;
  outline: none;
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: #000000;

  font-size: 22px;
  font-weight: 600;
  color: #FFFFFF;

  &:active{
    background-color: #212121;
  }
`;
const StyledInput = styled.input`
  display: flex;
  align-items: center;
  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #000000;
  outline: none;
  font-size: 22px;
`;

export default CreateNotice;