import { Alert, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Post } from '@stud-log/news-types/models';
import { FC } from 'react';
import { SWRResponse } from 'swr';
import { SCOffset } from '../../../../../Common/UI/offset';
import { columnsApproved } from '../Groupmates.settings';

const ApprovedTable: FC<{ approvedSWR: SWRResponse<Post[]> }> = ({ approvedSWR }) => {
  const ToRender: FC = () => {
    if (approvedSWR.error) {
      return <Alert severity="warning"> Не удалось загрузить список студентов </Alert>;
    } else if (!approvedSWR.data) {
      return <CircularProgress />;
    }

    return (
      <div style={{ height: 400, width: '100%', minWidth: '50vw' }}>
        <DataGrid
          disableSelectionOnClick
          rows={approvedSWR.data}
          columns={columnsApproved}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    );
  };
  return (
    <>
      <SCOffset.Title>Студенты вашей группы</SCOffset.Title>
      <ToRender />
    </>
  );
};

export default ApprovedTable;
