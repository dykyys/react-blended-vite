import style from './Text.module.css';

export const Text = ({ children, textAlign = 'text', marginBottom = '0' }) => {
  return (
    <p
      className={[style[textAlign], style[`marginBottom${marginBottom}`]].join(
        ' ',
      )}
    >
      {children}
    </p>
  );
};
