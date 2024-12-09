import styles from './Heading.module.css';
import clsx from 'clsx';

export const Heading = ({ title, top, bottom, tag, className }) => {
  const Tag = tag || 'h2';

  return <Tag className={styles[className]}>{title}</Tag>;
};
