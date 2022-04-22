import { Container, Box, Text } from '@chakra-ui/react';
import { SocialMediaIcons } from '../components/SocialMediaIcons';

export const Footer = () => {
  return (
    <Box
      height="120px"
      color="elvenTools.color3.base"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <SocialMediaIcons />
        <Box>Elven Tools Dapp Template</Box>
      </Container>
    </Box>
  );
};
