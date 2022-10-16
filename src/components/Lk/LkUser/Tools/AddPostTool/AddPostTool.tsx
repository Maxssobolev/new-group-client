import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Paper,
  Popover,
  Popper,
  TextField,
  Tooltip,
} from '@mui/material';
import { FC, useState } from 'react';
import { SCHeadman } from '../../LkUser.styles';
import { SCTool } from './AddPostTool.styles';
import { ReactComponent as PlusIcon } from '../../../../../assets/img/Plus.svg';
import { Header } from '../../../../Common/UI/headers';
import { SCOffset } from '../../../../Common/UI/offset';
import { PostType } from '@stud-log/news-types/enums';
import AddPostForm from './AddPostForm/AddPostForm';

const AddPostTool: FC = () => {
  const [modal, setModal] = useState<{ isOpen: boolean; type: keyof typeof PostType }>({ isOpen: false, type: PostType.news });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const openModal = (type: keyof typeof PostType) => {
    setModal({ isOpen: true, type });
    setAnchorEl(null);
  };
  const closeModal = () => setModal({ isOpen: false, type: PostType.news });
  return (
    <>
      <SCHeadman.Tool.Btn aria-describedby={id} type="button" onClick={handleClick}>
        <PlusIcon />
      </SCHeadman.Tool.Btn>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper sx={{ border: 'none', bgcolor: 'background.paper', marginTop: '10px' }} elevation={3}>
          <SCTool.PopoverContent>
            <Button
              onClick={() => openModal(PostType.homework)}
              variant="contained"
              style={{ borderRadius: '5px 0 0 5px ', boxShadow: 'none', borderRight: '1px solid white' }}
            >
              задание
            </Button>
            <Button
              onClick={() => openModal(PostType.news)}
              variant="contained"
              style={{ borderRadius: '0 5px 5px 0 ', boxShadow: 'none' }}
            >
              новость
            </Button>
          </SCTool.PopoverContent>
        </Paper>
      </Popper>
      <Drawer anchor="right" open={modal.isOpen} onClose={closeModal}>
        <SCOffset.Wrapper>
          <SCOffset.Title>Добавить {modal.type == PostType.homework ? 'задание' : 'новость'}</SCOffset.Title>
          <AddPostForm type={modal.type} />
        </SCOffset.Wrapper>
      </Drawer>
    </>
  );
};

export default AddPostTool;
