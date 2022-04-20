import { Box, Text } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Box display="flex" flexDirection="column" width="100%" position="relative" zIndex="2">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        maxWidth={{ base: '100%', md: '100%', lg: '60%' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mx="auto"
        mb={5}
      >
        Collectible NFT DAO project on Elrond Network
      </Text> 
      <Text
        as="p"
        fontSize="2xl"
        textAlign={{ base: 'center', md: 'center' }}
      >
        Maiar Ghosts - Drop 1 coming soon
      </Text>
      <Text as="p" fontSize="2xl" fontWeight="medium" textAlign="center">
          Buy NFTS and become a member of Gokai Labs DAO.
      </Text>
    </Box>
  );
};
