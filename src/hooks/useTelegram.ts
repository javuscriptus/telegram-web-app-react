export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  // close webApp window
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }

    tg.MainButton.show();
  };

  return {
    tg,
    user: tg?.initDataUnsafe?.user?.username,
    onClose,
    onToggleButton,
  };
};
