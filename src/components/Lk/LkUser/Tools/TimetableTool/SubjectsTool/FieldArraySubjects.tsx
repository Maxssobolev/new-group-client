import { Subject } from '@stud-log/news-types/models';
import { FieldArrayRenderProps, Field, FieldProps } from 'formik';
import { FC, MutableRefObject, KeyboardEvent } from 'react';
import { TagCross } from '../../../../../Common/UI/elements';
import { SCForm } from '../../../../../Common/UI/form-components';
import { SCGrid } from '../../../../../Common/UI/grid';

const FieldArraySubjects: FC<{
  subjects: Subject[];
  helperRef: MutableRefObject<FieldArrayRenderProps | null>;
}> = ({ subjects, helperRef }) => {
  const deleteSubject = (index: number) => {
    helperRef.current?.remove(index);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <>
      {subjects.map((itm, index) => {
        return (
          <SCGrid.Row columns={2} key={index} style={{ position: 'relative' }}>
            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Сокращение</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <Field name={`subjects[${index}].title`}>
                {({ field }: FieldProps) => <SCForm.Input type="text" {...field} onKeyDown={e => handleKeyDown(e)} />}
              </Field>
            </SCForm.FieldWrapper>

            <SCForm.FieldWrapper>
              <SCForm.LabelBlock>
                <SCForm.LabelTitle>Полное название</SCForm.LabelTitle>
              </SCForm.LabelBlock>
              <Field name={`subjects[${index}].fullName`}>
                {({ field }: FieldProps) => <SCForm.Input type="text" {...field} onKeyDown={e => handleKeyDown(e)} />}
              </Field>
            </SCForm.FieldWrapper>
            <TagCross onClick={() => deleteSubject(index)} type="button" style={{ position: 'absolute', top: '61%', right: '-20px' }} />
          </SCGrid.Row>
        );
      })}
    </>
  );
};

export default FieldArraySubjects;
