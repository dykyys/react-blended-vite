import { IconContext } from 'react-icons';
import styled from './Statistics.module.css';
export const StatisticsItem = ({ icon, title, total }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ size: 30, color: '#29a14f' }}>
        {icon}
      </IconContext.Provider>

      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};
