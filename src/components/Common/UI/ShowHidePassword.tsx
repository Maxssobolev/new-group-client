import React, { FC, useState } from 'react';
import { Field, FieldProps } from 'formik';
import { ReactComponent as EyeIcon } from '../../../assets/img/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../../assets/img/eye-slash.svg';
import { SCForm } from './form-components';
import styled from 'styled-components';

const SCWrapper = styled.div`
  position: relative;
`;
const SCEye = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

interface IShowHidePassword {
  fieldName: string;
  tabIndex?: number;
}

const ShowHidePassword: FC<IShowHidePassword> = ({ fieldName, tabIndex }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <SCWrapper>
      <Field className="field" name={fieldName} type={passwordShown ? 'text' : 'password'}>
        {({ field }: FieldProps) => <SCForm.Input {...field} type={passwordShown ? 'text' : 'password'} tabIndex={tabIndex} />}
      </Field>
      <SCEye className="field-eye" onClick={() => setPasswordShown(!passwordShown)}>
        {passwordShown ? <EyeSlashIcon width={25} height={25} /> : <EyeIcon width={25} height={25} />}
      </SCEye>
    </SCWrapper>
  );
};

export default ShowHidePassword;
