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
  const handleUtilityClick = useCallback(() => {
    router.push('/utility');
  }, [router]);

  return (
    <Box
      display="flex"
      gap={{ base: '2', md: '5' }}
      alignItems="center"
    >
      {enabled.includes('maiar-ghosts') && (
        <ActionButton onClick={handleMintClick}>Maiar Ghosts</ActionButton>
      )}
      {enabled.includes('utility') && (
        <ActionButton onClick={handleUtilityClick}>Utility</ActionButton>
      )}

      {enabled.includes('blog') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          href="https://medium.com/@GokaiLabs"
        >
          Blog
        </Text>
      )}

      {enabled.includes('wallet') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          href="https://walletfp.com/?category=esdt&address=gokai"
        >
          Wallet
        </Text>
      )}

      {enabled.includes('rarity') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          href="https://elrondindex.io/collection/MRG-1c3ba4"
        >
          Rarity
        </Text>
      )}

      {enabled.includes('contact') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          href="https://goo.gl/maps/SjdBdMf4e6xW7YYt7"
        >
          Contact
        </Text>
      )}

      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};
