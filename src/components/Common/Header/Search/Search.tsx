import { FC } from 'react';
import { Inputs } from '../../UI/input';
import { SCHeader } from '../Header.styles';

const Search: FC = () => {
  return (
    <>
      <Inputs.Search placeholder="Поиск"></Inputs.Search> <SCHeader.SerachIcon></SCHeader.SerachIcon>
    </>
  );
};

export default Search;
