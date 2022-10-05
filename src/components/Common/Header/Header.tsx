import { FC } from 'react';
import { SCHeader } from './Header.styles';
import GroupSelection from './GroupSelection/GroupSelection';
import Notifications from './Notifications/Notifications';
import Theme from './Theme/Theme';
import Search from './Search/Search';

const Header: FC = () => {
  return (
    <SCHeader.Wrapper>
      <SCHeader.Search>
        <Search />
      </SCHeader.Search>
      <SCHeader.Buttons>
        <Notifications />
        <Theme />
        <GroupSelection />
      </SCHeader.Buttons>
    </SCHeader.Wrapper>
  );
};

export default Header;
