import { Box, Container, Text } from '@chakra-ui/react';
import { collab } from '../config/dappUi';
import { motion } from 'framer-motion';

export const Utility = () => {
  if (!Array.isArray(collab)) return null;

  return (
    <Box mt={8} mb="48" color="white" textAlign={{ base: 'center', md: 'left' }}>
      <Container maxW="1280px">
        <Box flexDirection={{ base: 'column', md: 'row' }} display="flex" alignItems={{ base: 'center', md: 'start' }} p={5} mb={5} background="black" borderRadius="2xl">
          <Box
            as="img"
            width="200px"
            height="200px"
            src="/static/media/utility-mr-ghost-NFT-rewards-maiar-friends-elrond-network.webp"
            alt="Mr Ghost NFT utility - Maiar Friends Rewards - Maiar Ghosts"
            title="Mr Ghost NFT utility - Maiar Friends Rewards - Maiar Ghosts"
          />
          <Box ml={{ base: '0', md: '4' }} mt={{ base: '4', md: '0' }}>
            <Text
              as="h2"
              fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
              fontWeight="black"
            >NFTs rewards</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              Set your Mr Ghost NFT as avatar in Maiar app and become a <strong>@gokai</strong> friend to get 1 free Mr Ghost NFT per month!<br />
              No friends in Maiar? Add Gokai as friend with the <strong>+66949486177</strong>.
            </Box>
            <Box display="inline-block" position="relative" zIndex="10" m="0 auto">
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
                  Subscribe
                </Text>
              </motion.div>
            </Box>
          </Box>
        </Box>
        <Box flexDirection={{ base: 'column', md: 'row' }} display="flex" alignItems={{ base: 'center', md: 'start' }} p={5} mb={5} background="black" borderRadius="2xl">
          <Box
            as="img"
            width="200px"
            height="200px"
            src="/static/media/utility-mr-ghost-NFT-learn2earn-rondle-elrond-network.webp"
            alt="Mr Ghost NFT utility - Learn2Earn Rondle - Maiar Ghosts"
            title="Mr Ghost NFT utility - Learn2Earn Rondle - Maiar Ghosts"
          />
          <Box ml={{ base: '0', md: '4' }} mt={{ base: '4', md: '0' }}>
            <Text
              as="h2"
              fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
              fontWeight="black"
            >Learn2Earn</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              You can now play in <strong>Rondle</strong> dApp and earn $RONDLE, $EFFORT tokens and NFTs from several exciting Elrond blockchain projects!</Box>
            <Box display="inline-block" position="relative" zIndex="10" m="0 auto">
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
                  href="https://live.rondle.io"
                >
                  Play
                </Text>
              </motion.div>
            </Box>
          </Box>
        </Box>
        <Box flexDirection={{ base: 'column', md: 'row' }} display="flex" alignItems={{ base: 'center', md: 'start' }} p={5} mb={5} background="black" borderRadius="2xl">
          <Box
            as="img"
            width="200px"
            height="200px"
            src="/static/media/utility-mr-ghost-NFT-discord-ambitious-organisation-elrond-network.webp"
            alt="Mr Ghost NFT utility - Discord Ambitious Organisation - Maiar Ghosts"
            title="Mr Ghost NFT utility - Discord Ambitious Organisation - Maiar Ghosts"
          />
          <Box ml={{ base: '0', md: '4' }} mt={{ base: '4', md: '0' }}>
            <Text
            as="h2"
            fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
            fontWeight="black"
            >Governance</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              Participate in the governance and take the strategic decisions for the organisation! Join our <strong>Discord Ambitious Organisation</strong> and verify your address in the <strong>#verify-member</strong> channel to be able to vote.
            </Box>
            <Box display="inline-block" position="relative" zIndex="10" m="0 auto">
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
                  Join
                </Text>
              </motion.div>
            </Box>
          </Box>
        </Box>
        <Box flexDirection={{ base: 'column', md: 'row' }} display="flex" alignItems={{ base: 'center', md: 'start' }} p={5} mb={5} background="black" borderRadius="2xl">
          <Box
            as="img"
            width="200px"
            height="200px"
            src="/static/media/utility-mr-ghost-NFT-cemetery-staking-elrond-network.webp"
            alt="Mr Ghost NFT utility - Cemetery Staking - Maiar Ghosts"
            title="Mr Ghost NFT utility - Cemetery Staking - Maiar Ghosts"
          />
          <Box ml={{ base: '0', md: '4' }} mt={{ base: '4', md: '0' }}>
            <Text
              as="h2"
              fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}
              fontWeight="black"
            >Cemetery - NFT Staking</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              Coming soon!
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
