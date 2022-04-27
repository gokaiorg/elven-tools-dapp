import { useRouter } from 'next/router';
import { Box, Button, Text } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from '../components/ActionButton';
import { LoginModalButton } from '../components/LoginModalButton';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/maiar-ghosts');
  }, [router]);

  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
    >
      {enabled.includes('maiar-ghosts') && (
        <ActionButton onClick={handleMintClick}>Maiar Ghosts</ActionButton>
      )}

      <Text
        as="a"
        py={2}
        px={6}
        fontWeight="black"
        color="white"
        href="https://medium.com/@GokaiLabs"
      >
        Blog
      </Text>

      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};
