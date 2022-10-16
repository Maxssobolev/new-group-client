import { Alert, Dialog, DialogContent, DialogTitle, TextField, Tooltip } from '@mui/material';
import { SCHeadman } from '../../LkUser.styles';
import { FC, useState } from 'react';
import { ReactComponent as LinkIcon } from '../../../../../assets/img/link.svg';
import { SCTool } from './InviteTool.styles';
import { SCGrid } from '../../../../Common/UI/grid';
import { $authHost } from '../../../../../http/host';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../../../../redux/state.interface';
import { rightBottomToast } from '../../../../utils/toast-settings';
import { toast } from 'react-toastify';

const InviteTool: FC = () => {
  const group = useSelector<IReduxState, IReduxState['group']['userGroup']>(state => state.group.userGroup);
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);
  const setCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };
  const openModal = () => {
    $authHost
      .post('/api/user/get-invite-link', { group })
      .then(r => {
        setLink(r.data);
        setIsOpen(true);
      })
      .catch(e => {
        console.log(e);
        toast.warn('Не удалось создать ссылку-приглашение. Пожалуйста, обратитесь в тех. поддержку', rightBottomToast);
      });
  };
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Tooltip title="Ссылка-приглашение" placement="bottom">
        <SCHeadman.Tool.Btn onClick={openModal}>
          <LinkIcon />
        </SCHeadman.Tool.Btn>
      </Tooltip>
      <Dialog open={isOpen} onClose={closeModal} PaperProps={{ sx: { position: 'fixed', top: 50, borderRadius: '10px' } }}>
        <SCTool.Modal.DialogHeader>Ссылка-приглашение</SCTool.Modal.DialogHeader>
        <DialogContent>
          <p style={{ fontSize: 'var(--fz-small)', lineHeight: 1.5, marginTop: 0 }}>
            Отправьте эту ссылку своим одногруппникам, чтобы они смогли зарегистрироваться в системе. <br /> Срок жизни ссылки 72 часа.
          </p>
          <SCGrid.Row columns={1}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={link}
              inputProps={{ style: { cursor: 'pointer' } }}
              onClick={() => {
                setCopy();
                navigator.clipboard.writeText(link);
              }}
            />
            {copied && (
              <Alert severity="success" style={{ fontSize: 'var(--fz-extra-small)' }}>
                Ссылка скопирована!
              </Alert>
            )}
          </SCGrid.Row>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InviteTool;
