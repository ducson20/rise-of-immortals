import { Alert, AlertTitle, Snackbar } from '@mui/material';

export interface INotificationProps {
  type: string;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  autoHideDuration?: number;
  TransitionComponent: any;
  open: boolean;
  children: React.ReactElement;
  onClose: (
    event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string | undefined
  ) => void;
}

export default function Notification({
  type,
  vertical = 'bottom',
  horizontal = 'right',
  autoHideDuration = 6000,
  TransitionComponent,
  open = false,
  onClose,
  children,
}: INotificationProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={autoHideDuration}
      TransitionComponent={TransitionComponent}
      onClose={onClose}
      sx={{ mt: '60px' }}
    >
      <Alert severity="error" onClose={onClose}>
        <AlertTitle sx={{ fontSize: '1.5rem', lineHeight: '1.9rem' }}>{type}</AlertTitle>
        {children}
      </Alert>
    </Snackbar>
  );
}
