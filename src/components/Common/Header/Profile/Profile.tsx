import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginModalOpen } from '../../../../redux/reducers/loginModalReducer';
import useUserService from '../../../../services/user.service';
import { SCHeader } from '../Header.styles';
import { SCHeaderProfile } from './Profile.styles';

const Profile: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openLoginModal = () => dispatch(setLoginModalOpen(true));
  const { user } = useUserService();
  return (
    <SCHeader.Btn
      onClick={() => {
        !!user ? navigate('/lk') : openLoginModal();
      }}
    >
      <SCHeaderProfile.Wrapper>
        <div>
          <SCHeaderProfile.Username>{!!user ? `${user.firstName} ${user.lastName}` : 'Гость'}</SCHeaderProfile.Username>
          <SCHeaderProfile.Btn isActive={!!user}>перейти в профиль</SCHeaderProfile.Btn>
        </div>
        <SCHeaderProfile.Icon></SCHeaderProfile.Icon>
      </SCHeaderProfile.Wrapper>
    </SCHeader.Btn>
  );
};

export default Profile;
