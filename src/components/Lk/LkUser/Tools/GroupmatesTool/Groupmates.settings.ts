import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import moment from 'moment';
import 'moment/locale/ru';
export const columnsApproved: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, sortable: false, type: 'number' },
  {
    field: 'fullName',
    headerName: 'ФИО',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Телефон',
    type: 'number',
    sortable: false,
    width: 100,
  },
  {
    field: 'email',
    headerName: 'Почта',
    sortable: false,
    width: 200,
  },
];

export const columnsInReview: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, sortable: false },
  {
    field: 'fullName',
    headerName: 'ФИО',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Телефон',
    type: 'number',
    sortable: false,
    width: 100,
  },
  {
    field: 'email',
    headerName: 'Почта',
    sortable: false,
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Дата подачи',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) => `${moment(params.row.createdAt).format('DD MMMM yyyy HH:mm')}`,
  },
];
