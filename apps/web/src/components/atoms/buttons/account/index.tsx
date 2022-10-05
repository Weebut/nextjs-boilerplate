import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface AccountButtonProps {
  onClick?: () => void;
}

export default function AccountButton({ onClick }: AccountButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <AccountCircle />
    </IconButton>
  );
}
