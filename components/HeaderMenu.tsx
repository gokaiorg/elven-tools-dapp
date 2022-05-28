import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';

export const HeaderMenu: FC = ({ children }) => {
  return (
    <Box
      display="flex"
      position="relative"
      zIndex="2"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      background="black"
      gap={{ base: '1', md: '2' }}
      py={5}
      px={5}
      sx={{
        '@media screen and (max-width: 800px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Logo />
      {children}
    </Box>
  );
};
