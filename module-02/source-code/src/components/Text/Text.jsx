import style from './Text.module.css';

export const Text = ({ children }) => {
  return <p className={style.text}>{children}</p>;
};
