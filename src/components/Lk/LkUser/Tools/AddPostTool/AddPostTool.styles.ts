import { DialogTitle } from '@mui/material';
import styled from 'styled-components';

const DialogHeader = styled(DialogTitle)`
  font-size: var(--fz-large) !important;
  font-weight: 500 !important;
  margin-bottom: 10px !important;
`;

const PopoverContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCTool = { Modal: { DialogHeader }, PopoverContent };
