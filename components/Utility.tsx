import { Box, Container, Text } from '@chakra-ui/react';
import { collab } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Utility = () => {
  if (!Array.isArray(collab)) return null;

  return (
    <Box mt={8} mb="48" color="elvenTools.color3.base">
      <Container maxW="1280px">
        <Text
          as="h2"
          fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
          fontWeight="black"
        >NFTs rewards</Text>
        <Box fontSize={{ base: 'xl' }} mb={10}>
          Add your Mr Ghost NFT as avatar in Maiar app and add <strong>@gokai</strong> as friend to get 1 free Mr Ghost NFT per month!
        </Box>
        <Text
          as="h2"
          fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
          fontWeight="black"
        >Governance</Text>
        <Box fontSize={{ base: 'xl' }} mb={10}>
          <Text
          as="a"
            color="elvenTools.color3.base"
            decoration="underline"
          href="https://discord.gg/tXSeJfVVnH"
        >
          Join us on Discord</Text>{" "}
          and participate in the governance and take the strategic decisions for the organisation!
        </Box>
        <Text
          as="h2"
          fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
          fontWeight="black"
        >Learn2Earn</Text>
        <Box fontSize={{ base: 'xl' }} mb={10}>
          You will soon be able to learn and win on <strong>Rondle</strong>, the new application from Effort{" "}
          <Text
          as="a"
          color="elvenTools.color3.base"
          decoration="underline"
          href="https://efforteconomy.io/"
        >
          Effort Economy</Text>!
        </Box>
        <Text
          as="h2"
          fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
          fontWeight="black"
        >Cemetery - NFT Staking</Text>
        <Box fontSize={{ base: 'xl' }} mb={10}>
          Coming soon!
        </Box>
      </Container>
    </Box>
  );
};
