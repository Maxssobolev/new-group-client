import { useSelector } from 'react-redux';
import { IReduxState } from '../redux/state.interface';

export default function useWindowService() {
  const windowWidth = useSelector<IReduxState, number>(state => state.window.windowWidth as number);

  /** return true if current window smaller than paramter */
  const windowLess = (width: number) => windowWidth < width;

  /** return true if current window bigger than paramter */
  const windowMore = (width: number) => windowWidth > width;

  return {
    windowLess,
    windowMore,
    windowWidth,
  };
}
