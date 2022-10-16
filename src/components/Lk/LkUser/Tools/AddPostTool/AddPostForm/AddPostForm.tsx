import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { PostType } from '@stud-log/news-types/enums';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';
import useUserService from '../../../../../../services/user.service';
import { SCForm } from '../../../../../Common/UI/form-components';
import { SCGrid } from '../../../../../Common/UI/grid';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextField } from '@mui/material';
import { SCDatePickerInput } from '../../../../../Common/UI/inputs';
import TextEditor from '../../../../../Common/UI/TextEditor';
import { SCButton } from '../../../../../Common/UI/buttons';
import useSubjects from '../../../../../Hooks/useSubjects';
import moment from 'moment';
import * as yup from 'yup';
import { $authHost } from '../../../../../../http/host';
import { toast } from 'react-toastify';
import { rightBottomToast } from '../../../../../utils/toast-settings';

const PostSchema = yup.object().shape({
  title: yup.string().min(2, 'Нужно хотя бы два символа').required('Обязательное поле'),
  deadline: yup.date().required('Обязательное поле').nullable(),
  content: yup.string(),
  subjectId: yup
    .string()
    .nullable()
    .when('postType', {
      is: PostType.homework,
      then: yup.string().required('Обязательное поле'),
    }),
});

const AddPostForm: FC<{ type: keyof typeof PostType }> = ({ type }) => {
  const { user } = useUserService();
  const subjects = useSubjects({ subjectsOnly: true });

  return (
    <Formik
      initialValues={{
        title: '',
        content: '',
        deadline: '',
        subjectId: -1,
        postType: type,
        group: user!.group,
      }}
      validationSchema={PostSchema}
      onSubmit={({ title, content, deadline, subjectId, postType, group }, { resetForm }) => {
        const preparedData = {
          title,
          content,
          deadline: moment(deadline).format('YYYY-MM-DD HH:mm:ss'),
          subjectId: Number(subjectId),
          postType,
          group,
        };
        $authHost
          .post('api/posts/create', preparedData)
          .then(r => {
            toast.success('Запись добавлена!', rightBottomToast);
            resetForm();
          })
          .catch(e => toast.warn(e.response.data.message, rightBottomToast));
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <SCGrid.Row columns={2}>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Заголовок</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <Field name="title">{({ field }: FieldProps) => <SCForm.Input type="text" {...field} />}</Field>
            </SCForm.FieldWrapper>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>{type == PostType.homework ? 'Дедлайн' : 'Будет висеть до'}</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                  label="Responsive"
                  renderInput={params => (
                    <SCDatePickerInput
                      {...params}
                      label=""
                      style={{ width: '100%', border: ' 1px solid rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}
                    />
                  )}
                  value={values.deadline}
                  onChange={newValue => {
                    setFieldValue('deadline', newValue);
                  }}
                />
              </LocalizationProvider>
            </SCForm.FieldWrapper>
          </SCGrid.Row>
          {type == PostType.homework && (
            <SCGrid.Row columns={2} className="radio" style={{ margin: '40px 0 ' }}>
              {subjects.map(itm => {
                return (
                  <div key={itm.id}>
                    <label
                      style={{
                        display: 'flex',
                        cursor: 'pointer',
                      }}
                    >
                      <Field type="radio" name="subjectId" value={itm.id.toString()} />
                      <span style={{ fontSize: 'var(--fz-extra-small)' }}>{itm.label}</span>
                    </label>
                  </div>
                );
              })}
            </SCGrid.Row>
          )}
          <SCGrid.Row columns={1}>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Содержание</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <TextEditor name="content" />
            </SCForm.FieldWrapper>
          </SCGrid.Row>

          <SCGrid.Row columns={1}>
            <SCButton type="submit">Создать</SCButton>
          </SCGrid.Row>
        </Form>
      )}
    </Formik>
  );
};

export default AddPostForm;
