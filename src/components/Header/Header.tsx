import { Button } from '../Button/Button';

import styles from './Header.module.scss';

export interface HeaderProps {
  prop?: string;
}

export function Header() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={styles.username}>
        {tg?.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
}
