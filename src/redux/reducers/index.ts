import windowReducer from './windowReducer';
import userReducer from './userReducer';
import loginModalReducer from './loginModalReducer';
import groupReducer from './groupReducer';

export const rootReducer = {
  loginModal: loginModalReducer,
  window: windowReducer,
  user: userReducer,
  group: groupReducer,
};
