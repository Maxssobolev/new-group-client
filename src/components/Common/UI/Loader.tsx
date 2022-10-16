import { FC } from 'react';

const Loader: FC<{ forComponent?: boolean; main?: boolean }> = ({ forComponent, main }) => {
  return (
    <div className={forComponent ? 'component-loader' : main ? 'main-loader' : 'page page-loading'}>
      <div className="spinner-grow text-primary" role="status">
        Загрузка
      </div>
    </div>
  );
};

export default Loader;
