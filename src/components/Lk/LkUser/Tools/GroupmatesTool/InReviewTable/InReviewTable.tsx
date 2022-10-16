import { Alert, CircularProgress } from '@mui/material';
import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';
import { Post } from '@stud-log/news-types/models';
import { FC, useEffect, useState } from 'react';
import { SWRResponse } from 'swr';
import { $authHost } from '../../../../../../http/host';
import useUserService from '../../../../../../services/user.service';
import { SCButton } from '../../../../../Common/UI/buttons';
import { SCOffset } from '../../../../../Common/UI/offset';
import { columnsInReview } from '../Groupmates.settings';

const InReviewTable: FC<{ approvedSWR: SWRResponse<Post[]>; inReviewSWR: SWRResponse<Post[]> }> = ({ approvedSWR, inReviewSWR }) => {
  const { user } = useUserService();
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const acceptInvites = () => {
    $authHost.post('api/user/accept-applications', { group: user!.group, ids: selectionModel }).then(r => {
      inReviewSWR.mutate();
      approvedSWR.mutate();
    });
  };

  const ToRender: FC = () => {
    if (inReviewSWR.error) {
      return <Alert severity="warning"> Не удалось загрузить список студентов </Alert>;
    } else if (!inReviewSWR.data) {
      return <CircularProgress />;
    }

    return (
      <div style={{ height: 300, width: '100%', minWidth: '50vw', position: 'relative' }}>
        <DataGrid
          disableSelectionOnClick
          rows={inReviewSWR.data}
          columns={columnsInReview}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onSelectionModelChange={newSelectionModel => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
        {!!selectionModel.length && (
          <SCButton style={{ background: 'green', position: 'absolute', bottom: '7px', left: '120px' }} onClick={acceptInvites}>
            Принять в группу
          </SCButton>
        )}
      </div>
    );
  };
  return (
    <>
      <SCOffset.Title>Заявки в группу</SCOffset.Title>
      <ToRender />
    </>
  );
};

export default InReviewTable;
