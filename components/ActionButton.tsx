import { Box, BoxProps } from '@chakra-ui/react';
import { FC, useCallback } from 'react';

interface ActionButtonProps extends BoxProps {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const ActionButton: FC<ActionButtonProps> = ({
  children,
  onClick,
  isFullWidth = false,
  disabled = false,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick?.();
    }
  }, [disabled, onClick]);

  return (
    <Box
      as="button"
      py={2}
      px={{ base: '2', md: '6' }}
      fontWeight="black"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      color="elvenTools.white"
      userSelect="none"
      width={isFullWidth ? '100%' : 'auto'}
      onClick={handleClick}
      opacity={!disabled ? 1 : 0.5}
      {...props}
    >
      {children}
    </Box>
  );
};
