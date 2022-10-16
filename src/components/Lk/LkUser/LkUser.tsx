import { FC } from 'react';
import { SCHeadman, SCLkUser } from './LkUser.styles';
import { ReactComponent as DefaultAvatar } from '../../../assets/img/Avatar.svg';
import { User } from '@stud-log/news-types/models';
import { UserRole } from '@stud-log/news-types/enums';
import { Header } from '../../Common/UI/headers';

import { Tooltip } from '@mui/material';
import InviteTool from './Tools/InviteTool/InviteTool';
import AddPostTool from './Tools/AddPostTool/AddPostTool';
import GroupmatesTool from './Tools/GroupmatesTool/GroupmatesTool';
import TimetableTool from './Tools/TimetableTool/TimetableTool';

const LkUser: FC<User> = user => {
  return (
    <SCLkUser.Wrapper>
      <div>
        <SCLkUser.Avatar>
          <DefaultAvatar width={70} height={70} />
        </SCLkUser.Avatar>
        <SCLkUser.InfoBlock>
          <SCLkUser.Username>{`${user.firstName} ${user.lastName}`}</SCLkUser.Username>
          <SCLkUser.Email>{user.email}</SCLkUser.Email>
        </SCLkUser.InfoBlock>
      </div>
      {user.role === UserRole.headman && (
        <div>
          <SCHeadman.Tool.Block>
            <Header>Инструменты</Header>
            <SCHeadman.Tool.BtnsWrapper>
              <InviteTool />
              <AddPostTool />
              <TimetableTool />
            </SCHeadman.Tool.BtnsWrapper>
          </SCHeadman.Tool.Block>
          <SCHeadman.Tool.Block>
            <Header>Управление группой</Header>
            <SCHeadman.Tool.BtnsWrapper>
              <GroupmatesTool />
            </SCHeadman.Tool.BtnsWrapper>
          </SCHeadman.Tool.Block>
        </div>
      )}
    </SCLkUser.Wrapper>
  );
};

export default LkUser;
