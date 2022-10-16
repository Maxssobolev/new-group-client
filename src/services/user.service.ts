import { User, Like } from '@stud-log/news-types/models';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, updateUser as _updateUser, clearUser as _clearUser } from '../redux/reducers/userReducer';
import { IReduxState } from '../redux/state.interface';
export default function useUserService() {
  const dispatch = useDispatch();
  const _user = useSelector<IReduxState, User>(state => state.user);

  function saveUser(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setUser(user));
  }

  function updateUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(_updateUser(user));
  }

  function clearUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(_clearUser());
  }

  function updateUserFavourites(favourites: Like) {
    localStorage.setItem('user', JSON.stringify({ ..._user, favourites }));
    dispatch(_updateUser({ ..._user, favourites }));
  }

  const user: User | null = _user?.id ? _user : JSON.parse(localStorage.getItem('user') as string);

  return {
    saveUser,
    updateUser,

    user,

    updateUserFavourites,
    clearUser,
  };
}
