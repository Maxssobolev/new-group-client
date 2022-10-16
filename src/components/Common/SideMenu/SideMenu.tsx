import { FC } from 'react';
import { SCSideMenu } from './SideMenu.styles';
import logoIcon from '../../../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';

const tabs = [
  { title: 'Профиль', href: '/lk' },
  { title: 'Главная страница', href: '/main' },
  { title: 'Расписание', href: '/timetable' },
  { title: 'Домашние задания', href: '/tasks' },
  //{ title: 'Предметы', href: '/subjects' },
];

const SideMenu: FC = () => {
  return (
    <>
      <SCSideMenu.TopBlock>
        <Link to="/">
          <img src={logoIcon} alt="logo" />
        </Link>
      </SCSideMenu.TopBlock>
      <SCSideMenu.Nav>
        {tabs.map((itm, index) => (
          <NavLink key={index} to={itm.href} className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}>
            {itm.title}
          </NavLink>
        ))}
      </SCSideMenu.Nav>
    </>
  );
};

export default SideMenu;
