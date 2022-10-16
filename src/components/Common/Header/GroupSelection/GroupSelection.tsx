import { FC } from 'react';
import { SCHeader } from '../Header.styles';
import Select from 'react-select';
import { customSelectStyles } from './react-select.styles';
import { DropdownIndicator } from '../../UI/react-select__dropdown-indicator';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../../../redux/state.interface';
import { setSelectedGroup } from '../../../../redux/reducers/groupReducer';
import { CircularProgress } from '@mui/material';
import useUserService from '../../../../services/user.service';

const GroupSelection: FC = () => {
  const { user } = useUserService();
  const group = useSelector<IReduxState, IReduxState['group']>(state => state.group);
  const dispatch = useDispatch();
  const groupSelectHandler = (val: any) => {
    dispatch(setSelectedGroup(val));
  };

  return (
    <SCHeader.Btn style={{ justifyContent: 'center' }}>
      {group.userGroup && user ? (
        <Select
          options={[
            { label: group.userGroup, value: group.userGroup },
            { label: '3-МД-5', value: '3-МД-5' },
          ]}
          onChange={groupSelectHandler}
          styles={customSelectStyles}
          defaultValue={group.selected || (group.userGroup ? { label: group.userGroup, value: group.userGroup } : {})}
          components={{ DropdownIndicator }}
        />
      ) : !user ? (
        <Select
          options={[
            { label: group.userGroup, value: group.userGroup },
            { label: '3-МД-5', value: '3-МД-5' },
          ]}
          onChange={groupSelectHandler}
          styles={customSelectStyles}
          placeholder="Группа"
          components={{ DropdownIndicator }}
        />
      ) : (
        <CircularProgress />
      )}
    </SCHeader.Btn>
  );
};

export default GroupSelection;
