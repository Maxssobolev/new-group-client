import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { SCHeadman } from '../../LkUser.styles';
import { FC, useState } from 'react';
import { SCTool } from './TimetableTool.styles';
import { SCGrid } from '../../../../Common/UI/grid';
import { $authHost } from '../../../../../http/host';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../../../../redux/state.interface';
import { rightBottomToast } from '../../../../utils/toast-settings';
import { toast } from 'react-toastify';
import { ReactComponent as CalendarIcon } from '../../../../../assets/img/note-text.svg';
import { SCOffset } from '../../../../Common/UI/offset';
import SubjectsTool from './SubjectsTool/SubjectsTool';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TimetableTool: FC = () => {
  const group = useSelector<IReduxState, IReduxState['group']['userGroup']>(state => state.group.userGroup);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Tooltip title="Расписание" placement="bottom">
        <SCHeadman.Tool.Btn onClick={openModal}>
          <CalendarIcon />
        </SCHeadman.Tool.Btn>
      </Tooltip>
      <Drawer anchor="right" open={isOpen} onClose={closeModal}>
        <SCOffset.Wrapper>
          <Accordion sx={{ boxShadow: 'none', borderRadius: '0 !important', padding: '0  !important' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <SCOffset.Title>Предметы</SCOffset.Title>
            </AccordionSummary>
            <AccordionDetails>
              <SubjectsTool />
            </AccordionDetails>
          </Accordion>
        </SCOffset.Wrapper>
      </Drawer>
    </>
  );
};

export default TimetableTool;
