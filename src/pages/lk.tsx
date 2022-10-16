import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import { Layout } from '../components/Common/Layout/Layout';
import LkUser from '../components/Lk/LkUser/LkUser';
import useUserService from '../services/user.service';
import { useDispatch } from 'react-redux';
import { setLoginModalOpen } from '../redux/reducers/loginModalReducer';
import UserLiked from '../components/Lk/LkUser/UserLiked/UserLiked';
const PageLk: FC = () => {
  const dispatch = useDispatch();
  const { user, updateUser } = useUserService();
  const { mutate } = useSWRConfig();
  useEffect(() => {
    mutate(`/api/user/get`).then(r => updateUser(r));
  }, []);

  if (!user) {
    dispatch(setLoginModalOpen(true));
    return <Navigate to="/main" />;
  }

  return (
    <Layout.PageContent>
      <LkUser {...user} />
      <UserLiked />
    </Layout.PageContent>
  );
};
export default PageLk;
