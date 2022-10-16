import { Alert, CircularProgress } from '@mui/material';
import { Subject } from '@stud-log/news-types/models';
import { FieldArray, FieldArrayRenderProps, Form, Formik } from 'formik';
import { FC, useRef } from 'react';
import useSWR, { SWRResponse } from 'swr';
import { $authGet } from '../../../../../../http/helpers/authGet';
import { $authHost } from '../../../../../../http/host';
import subjects from '../../../../../../pages/subjects';
import { SCButton } from '../../../../../Common/UI/buttons';
import { SCGrid } from '../../../../../Common/UI/grid';
import { rightBottomToast } from '../../../../../utils/toast-settings';
import FieldArraySubjects from './FieldArraySubjects';
import { AddNewSubjectBtn } from './SubjectsTool.styles';
import { toast } from 'react-toastify';
const SubjectsTool: FC = () => {
  const { data: subjects, error, mutate }: SWRResponse<Subject[]> = useSWR(`/api/subjects`, $authGet);
  const arraySubjectsHelper = useRef<FieldArrayRenderProps | null>(null);

  if (!subjects) return <CircularProgress />;
  if (error) return <Alert severity="warning"> Не удалось загрузить список студентов </Alert>;
  return (
    <Formik
      initialValues={{
        subjects,
      }}
      onSubmit={({ subjects }) => {
        $authHost.post('api/subjects/crud', subjects).then(r => toast.success('Предметы сохранены', rightBottomToast));
      }}
      enableReinitialize
    >
      {({ values: { subjects } }) => (
        <Form>
          <FieldArray
            name="subjects"
            render={arrayHelpers => {
              arraySubjectsHelper.current = arrayHelpers;
              return <FieldArraySubjects helperRef={arraySubjectsHelper} subjects={subjects} />;
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SCButton
              onClick={() => {
                arraySubjectsHelper.current?.push({
                  title: '',
                  value: [],
                });
              }}
              type="button"
            >
              {subjects.length ? 'Добавить еще' : 'Добавить'}
            </SCButton>
            <SCButton style={{ background: 'green', marginLeft: '15px' }} type="submit">
              Сохранить
            </SCButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SubjectsTool;
