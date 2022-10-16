import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Tooltip } from '@mui/material';
import { AuthDto } from '@stud-log/news-types/dto';
import { User } from '@stud-log/news-types/models';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { $host } from '../../../../http/host';
import { setLoginModalOpen } from '../../../../redux/reducers/loginModalReducer';
import { IReduxState } from '../../../../redux/state.interface';
import useUserService from '../../../../services/user.service';
import { rightBottomToast } from '../../../utils/toast-settings';
import { SCButton } from '../../UI/buttons';
import { SCForm } from '../../UI/form-components';
import { SCGrid } from '../../UI/grid';
import ShowHidePassword from '../../UI/ShowHidePassword';
import { SCLoginModal } from './Login.styles';

const LoginModal: FC = () => {
  const navigate = useNavigate();
  const { saveUser } = useUserService();
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const isOpen = useSelector<IReduxState, boolean>(state => state.loginModal.isOpen);
  const closeModal = () => dispatch(setLoginModalOpen(false));
  return (
    <Dialog open={isOpen} onClose={closeModal} PaperProps={{ sx: SCLoginModal.settingsPaper }}>
      <SCLoginModal.DialogHeader>
        {step === 1 ? 'Вход' : <SCLoginModal.BackBtn onClick={() => setStep(1)}>Назад</SCLoginModal.BackBtn>}
      </SCLoginModal.DialogHeader>
      <DialogContent>
        {step === 1 ? (
          <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={values => {
              const preparedData: AuthDto = values;
              $host
                .post('api/user/login', preparedData)
                .then(({ data }: { data: { token: string; user: User } }) => {
                  saveUser(data.token, data.user);
                  toast.success('Вы успешно вошли в систему', rightBottomToast);
                  closeModal();
                  navigate('/lk');
                })
                .catch(e => {
                  toast.warn(e.response.data.message, rightBottomToast);
                });
            }}
          >
            {() => (
              <Form>
                <SCGrid.Row columns={1}>
                  <SCForm.FieldWrapper>
                    <SCForm.LabelBlock>
                      <SCForm.LabelTitle>E-mail</SCForm.LabelTitle>
                    </SCForm.LabelBlock>
                    <Field name="login">{({ field }: FieldProps) => <SCForm.Input type="email" {...field} tabIndex={3} />}</Field>
                  </SCForm.FieldWrapper>
                </SCGrid.Row>
                <SCGrid.Row columns={1}>
                  <SCForm.FieldWrapper>
                    <SCForm.LabelBlock>
                      <SCForm.LabelTitle>Пароль</SCForm.LabelTitle>
                    </SCForm.LabelBlock>
                    <ShowHidePassword fieldName="password" tabIndex={6} />
                  </SCForm.FieldWrapper>
                </SCGrid.Row>

                <SCGrid.Row columns={1} style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                  <SCButton type="submit">Войти</SCButton>
                </SCGrid.Row>
                <SCLoginModal.NoAccount onClick={() => setStep(2)}>Нет аккаунта?</SCLoginModal.NoAccount>
              </Form>
            )}
          </Formik>
        ) : (
          <p style={{ marginTop: '10px', fontSize: 'var(--fz-small)', lineHeight: 1.5, fontWeight: 500 }}>
            Чтобы получить доступ к регистрации, <br /> попросите старосту группы прислать Вам ссылку-приглашение
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
