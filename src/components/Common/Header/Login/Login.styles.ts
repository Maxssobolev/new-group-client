import styled from 'styled-components';
import { DialogTitle } from '@mui/material';

const DialogHeader = styled(DialogTitle)`
  font-size: var(--fz-large) !important;
  font-weight: 600 !important;
  margin-bottom: 20px !important;
`;

const NoAccount = styled.div`
  text-align: center;
  color: var(--accent);
  font-weight: 400;
  cursor: pointer;
`;

const BackBtn = styled.div`
  cursor: pointer;

  color: var(--accent);
`;

const settingsPaper = {
  position: 'fixed',
  top: 50,
  width: '50%',
  padding: '50px 68px 20px 68px',
  borderRadius: '20px',
  background: 'white url(/img/login-wave.svg) top no-repeat',
  backgroundSize: 'contain',
};

export const SCLoginModal = { NoAccount, DialogHeader, settingsPaper, BackBtn };
