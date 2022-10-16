import { UserRole } from '@stud-log/news-types/enums';
import { Formik, Form, Field, FieldProps } from 'formik';
import { FC } from 'react';
import { SCForm } from '../../Common/UI/form-components';
import { SCGrid } from '../../Common/UI/grid';
import { SCInviteForm } from './InviteForm.styles';
import PhoneInput from 'react-phone-input-2';
import ShowHidePassword from '../../Common/UI/ShowHidePassword';
import * as Yup from 'yup';
import { $host } from '../../../http/host';
import { RegistrationDto } from '@stud-log/news-types/dto';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ReactComponent as MailIcon } from '../../../assets/img/sms.svg';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);
const SuccessSwalSettings = {
  iconHtml: <MailIcon />,
  text: 'Когда староста группы подтвердит заявку, на указанную Вами почту придет уведомление. Для ускорения процесса, сообщите старосте об успешном заполнении формы',
  customClass: {
    icon: 'no-border',
    htmlContainer: 'swal-html',
  },
  width: '43em',
  showConfirmButton: false,
  showCloseButton: true,
};
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('некорректный email').required('заполните поле'),
  password: Yup.string().min(6, 'минимум 6 символов').required('заполните поле'),
  passwordConfirmation: Yup.string().test('password-match', 'пароли должны совпадать', function (value) {
    return this.parent.password === value;
  }),
  firstName: Yup.string().trim(),
  lastName: Yup.string().trim(),
  phone: Yup.string().trim(),
});

const InviteForm: FC<{ group: string; hash: string; hashId: number }> = ({ group, hash, hashId }) => {
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hash,
        hashId,
        password: '',
        passwordConfirmation: '',
        role: UserRole.student,
        group,
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        const preparedData: RegistrationDto = values;

        $host.post('/api/user/registration', preparedData).then(r => {
          MySwal.fire(SuccessSwalSettings)
            .then(r => navigate('/main'))
            .catch();
        });
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <SCGrid.Row columns={2}>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Имя</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <Field name="firstName">{({ field }: FieldProps) => <SCForm.Input type="text" {...field} tabIndex={1} />}</Field>
            </SCForm.FieldWrapper>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Телефон</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <SCForm.InputLike>
                <PhoneInput
                  country="ru"
                  inputProps={{ tabIndex: 4 }}
                  disableDropdown
                  specialLabel=""
                  placeholder="+7 (921) 555-55-55"
                  value={values.phone}
                  onChange={value => setFieldValue('phone', value)}
                  onlyCountries={['ru']}
                />
              </SCForm.InputLike>
            </SCForm.FieldWrapper>
          </SCGrid.Row>
          <SCGrid.Row columns={2}>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Фамилия</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <Field name="lastName">{({ field }: FieldProps) => <SCForm.Input type="text" {...field} tabIndex={2} />}</Field>
            </SCForm.FieldWrapper>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Пароль</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <ShowHidePassword fieldName="password" tabIndex={5} />
            </SCForm.FieldWrapper>
          </SCGrid.Row>
          <SCGrid.Row columns={2}>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>E-mail</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <Field name="email">{({ field }: FieldProps) => <SCForm.Input type="email" {...field} tabIndex={3} />}</Field>
            </SCForm.FieldWrapper>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Повторите пароль</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <ShowHidePassword fieldName="passwordConfirmation" tabIndex={6} />
            </SCForm.FieldWrapper>
          </SCGrid.Row>
          <SCGrid.Row columns={2}>
            <div></div>
            <div>
              <SCInviteForm.SubmitBtn kind="primary" type="submit" tabIndex={7}>
                Зарегистрироваться
              </SCInviteForm.SubmitBtn>
            </div>
          </SCGrid.Row>
        </Form>
      )}
    </Formik>
  );
};

export default InviteForm;
