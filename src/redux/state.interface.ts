import { User } from '@stud-log/news-types/models';

interface IReduxState {
  loginModal: {
    isOpen: boolean;
  };
  window: {
    isMobile: undefined | boolean;
    windowWidth: undefined | number;
  };
  user: User;
  group: {
    selected: { label: string; value: string };
    userGroup: string;
  };
}

export type { IReduxState };
