import { Box, Container, Text } from '@chakra-ui/react';
import { collab } from '../config/dappUi';
import { motion } from 'framer-motion';

export const Utility = () => {
  if (!Array.isArray(collab)) return null;

  return (
    <Box mt={8} mb="48" color="white" textAlign="center">
      <Container maxW="1280px">
        <Box display="flex" flexDirection="column" px={5} pt={5} pb={10} mb={5} background="black" borderRadius="2xl">
          <Text
            as="h2"
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight="black"
          >NFTs rewards</Text>
          <Box fontSize={{ base: 'xl' }} mb={5}>
            Set your Mr Ghost NFT as avatar in Maiar app and become a <strong>@gokai</strong> friend to get 1 free Mr Ghost NFT per month!<br />
            No friends in Maiar? Add Gokai as friend with the <strong>+66949486177</strong>.
          </Box>
          <Box display="flex" position="relative" zIndex="10" m="0 auto">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Text
                as="a"
                fontSize="xl"
                display="flex"
                p="1rem 2rem"
                color="elvenTools.color2.base"
                background="elvenTools.color2.lighter"
                _hover={{
                  bg: 'elvenTools.color2.darker',
                  color: 'elvenTools.color2.lighter',
                }}
                borderRadius="full"
                href="https://forms.gle/wrK6DcASpPYQu6qr8"
              >
                Fill in the form
              </Text>
            </motion.div>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" px={5} pt={5} pb={10} mb={5} background="black" borderRadius="2xl">
          <Text
            as="h2"
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight="black"
          >Governance</Text>
          <Box fontSize={{ base: 'xl' }} mb={5}>
            Participate in the governance and take the strategic decisions for the organisation!
          </Box>
          <Box display="flex" position="relative" zIndex="10" m="0 auto">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Text
                as="a"
                fontSize="xl"
                display="flex"
                p="1rem 2rem"
                color="elvenTools.color2.base"
                background="elvenTools.color2.lighter"
                _hover={{
                  bg: 'elvenTools.color2.darker',
                  color: 'elvenTools.color2.lighter',
                }}
                borderRadius="full"
                href="https://discord.gg/tXSeJfVVnH"
              >
                Join Discord
              </Text>
            </motion.div>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" px={5} pt={5} pb={10} mb={5} background="black" borderRadius="2xl">
          <Text
            as="h2"
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight="black"
          >Learn2Earn</Text>
          <Box fontSize={{ base: 'xl' }} mb={5}>
            You will soon be able to learn and earn tokens and NFTS on <strong>Rondle</strong>, the new application from Effort Economy!
          </Box>
          <Box display="flex" position="relative" zIndex="10" m="0 auto">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Text
                as="a"
                fontSize="xl"
                display="flex"
                p="1rem 2rem"
                color="elvenTools.color2.base"
                background="elvenTools.color2.lighter"
                _hover={{
                  bg: 'elvenTools.color2.darker',
                  color: 'elvenTools.color2.lighter',
                }}
                borderRadius="full"
                href="https://efforteconomy.io/"
              >
                Effort Economy
              </Text>
            </motion.div>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" px={5} pt={5} pb={5} mb={5} background="black" borderRadius="2xl">
          <Text
            as="h2"
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight="black"
          >Cemetery - NFT Staking</Text>
          <Box fontSize={{ base: 'xl' }} mb={5}>
            Coming soon!
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
