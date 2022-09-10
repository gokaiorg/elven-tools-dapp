import { useRouter } from 'next/router';
import { Box, Text, Tooltip } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from '../components/ActionButton';
import { LoginModalButton } from '../components/core/LoginModalButton';

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
      flexWrap="wrap"
      justifyContent="center"
      gap={{ base: '2', md: '5' }}
      alignItems="center"
    >
      {enabled.includes('maiar-ghosts') && (
        <ActionButton onClick={handleMintClick} whiteSpace="nowrap">Maiar Ghosts</ActionButton>
      )}
      {enabled.includes('utility') && (
        <ActionButton onClick={handleUtilityClick}>Utility</ActionButton>
      )}

      {enabled.includes('lightpaper') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          whiteSpace="nowrap"
          href="https://docs.gokai.org/"
        >
          Light Paper
        </Text>
      )}

      {enabled.includes('dao') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          whiteSpace="nowrap"
          href="https://superciety.com/fellowships/gokai-dao"
        >
          DAO
        </Text>
      )}

      {enabled.includes('wallet') && (
        <Tooltip label='Wallet' fontSize='md'>
          <Text
              as="a"
              py={2}
              px={{ base: '2', md: '6' }}
              fontWeight="black"
              color="white"
              href="https://walletfp.com/?category=esdt&address=gokai"
            >
              <svg
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </Text>
        </Tooltip>
      )}

       {enabled.includes('analytics') && (
        <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          href="https://omniscient.tools/collections/maiar-ghosts"
        >
          Analytics
        </Text>
      )}

      {enabled.includes('contact') && (
        <Tooltip label='Contact' fontSize='md'>
          <Text
          as="a"
          py={2}
          px={{ base: '2', md: '6' }}
          fontWeight="black"
          color="white"
          href="https://goo.gl/maps/SjdBdMf4e6xW7YYt7"
          >
            <svg
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </Text>
        </Tooltip>
      )}

      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};
