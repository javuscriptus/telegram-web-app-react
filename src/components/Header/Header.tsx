import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';

import styles from './Header.module.scss';

export interface HeaderProps {
  prop?: string;
}

export function Header() {
  const { user, onClose } = useTelegram();
  return (
    <div className={styles.header}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={styles.username}>{user}</span>
    </div>
  );
}
