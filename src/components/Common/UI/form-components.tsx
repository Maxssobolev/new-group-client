import styled from 'styled-components';

const FieldWrapper = styled.div`
  position: relative;
  font-size: var(--fz-medium);
`;

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LabelTitle = styled.div`
  color: var(--black);
  font-weight: 400;
`;

const Input = styled.input`
  padding: 0 20px;
  width: 100%;
  font-weight: 700;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 50px;
  font-size: var(--fz-medium);
`;

const InputLike = styled.div`
  & input {
    padding: 0 20px;
    width: 100%;
    font-weight: 700;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 50px;
    font-size: var(--fz-medium);
  }
`;

export const SCForm = { FieldWrapper, LabelBlock, LabelTitle, Input, InputLike };
