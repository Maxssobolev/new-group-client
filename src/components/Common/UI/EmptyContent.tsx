import { FC } from 'react';

const EmptyContent: FC<{ forComponent?: boolean; main?: boolean }> = ({ forComponent, main }) => {
  return (
    <div className={forComponent ? 'component-loader' : main ? 'main-loader' : 'page page-loading'}>
      <div className="spinner-grow text-primary" role="status">
        Здесь пока ничего нет
      </div>
    </div>
  );
};

export default EmptyContent;
