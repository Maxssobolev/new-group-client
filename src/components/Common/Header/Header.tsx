import { FC } from 'react';
import { SCHeader } from './Header.styles';
import GroupSelection from './GroupSelection/GroupSelection';

import Search from './Search/Search';
import Profile from './Profile/Profile';

const Header: FC = () => {
  return (
    <SCHeader.Wrapper>
      <SCHeader.Search>
        <Search />
      </SCHeader.Search>
      <SCHeader.Buttons>
        <Profile />
        <GroupSelection />
      </SCHeader.Buttons>
    </SCHeader.Wrapper>
  );
};

export default Header;
