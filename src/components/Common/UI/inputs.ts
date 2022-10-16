import { TextField } from '@mui/material';
import styled from 'styled-components';

export const SCDatePickerInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& input': {
      padding: '0 20px',
      width: '100%',
      fontWeight: 700,
      borderRadius: '12px',
      border: 'none',
      height: '48px',
      fontSize: 'var(--fz-medium)',
      color: 'var(--black)',
    },
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
});
