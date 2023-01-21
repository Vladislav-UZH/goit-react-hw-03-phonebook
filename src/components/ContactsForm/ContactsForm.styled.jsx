import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

const Container = styled(Form)`
  display: flex;
  align-items: flex-end;
  margin: 10px 0 25px 0;
  gap: 15px;
`;
const ErrorNotify = styled(ErrorMessage)`
  position: absolute;
  font-style: italic;
  color: #cc2c04;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: 500;
  color: #e2580a;
`;
const Input = styled(Field)`
  padding: 5px 5px 5px 12px;
  border: none;
  border-radius: 10px;
  height: 30px;
  :focus {
    outline: 1px solid #e2580a;
  }
  ::placeholder {
    padding-left: 5px;
    font-size: 15px;
    color: #ffffff;
  }
  font-size: 15px;
  color: #d7d7d7;
  background-color: #585a63;
`;
const SubmitBtn = styled.button`
  font-size: 22px;
  color: #ffffff;
  width: 150px;
  height: 50px;
  padding: auto 50px;
  border-radius: 10px;
  border: none;
  background-color: #e2580a;
`;
export { Input, Container, Label, SubmitBtn, ErrorNotify };
