import styled from 'styled-components';
import { SCButton } from '../../Common/UI/buttons';

const SubmitBtn = styled(SCButton)`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  font-size: var(--fz-medium);
  font-weight: 600;
  &:focus {
    background-color: #4b82c0;
  }
`;

export const SCInviteForm = { SubmitBtn };
