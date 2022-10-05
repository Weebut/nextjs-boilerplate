import { Notifications } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';

interface NotificationButtonProps {
  hasNew?: boolean;
}

export default function NotificationButton({
  hasNew = false,
}: NotificationButtonProps) {
  return (
    <IconButton>
      <Badge
        color="primary"
        overlap="circular"
        variant="dot"
        invisible={!hasNew}
      >
        <Notifications />
      </Badge>
    </IconButton>
  );
}
