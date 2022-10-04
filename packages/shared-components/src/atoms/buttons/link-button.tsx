import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from '../link';

interface LinkButtonProps {
  href: string | URL;
  children: ReactNode;
  buttonProps?: any;
}

export function LinkButton({ href, children, buttonProps }: LinkButtonProps) {
  return (
    <Button href={href} component={Link} {...buttonProps}>
      {children}
    </Button>
  );
}
