import { FC } from 'react';
import { SCHeader } from '../Header.styles';
import { ReactComponent as BellIcon } from '../../../../assets/img/bell.svg';

const Notifications: FC = () => {
  return (
    <SCHeader.Btn>
      <BellIcon />
    </SCHeader.Btn>
  );
};

export default Notifications;
