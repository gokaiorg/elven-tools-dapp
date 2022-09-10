import { Box, Container, Text } from '@chakra-ui/react';
import { collab } from '../config/dappUi';
import { motion } from 'framer-motion';

export const Utility = () => {
  if (!Array.isArray(collab)) return null;

  return (
    <Box mt={8} mb="48" color="black" textAlign={{ base: 'center', lg: 'left' }}>
      <Container maxW="1280px" display="flex" flexWrap="wrap" alignItems="stretch">
        <Box
          flexDirection={{ base: 'column' }}
          width={{ base: '100%', lg: '32%' }}
          display="flex" alignItems={{ base: 'center', lg: 'start' }}
          p={5} mb={5} mx={1}
          borderRadius="3xl"
          background="elvenTools.color3.darker">
          <Box
            as="img"
            mx="auto"
            width="200px"
            height="200px"
            src="/static/media/utility-mr-ghost-NFT-rewards-maiar-friends-elrond-network.webp"
            alt="Mr Ghost NFT utility - Maiar Friends Rewards - Maiar Ghosts"
            title="Mr Ghost NFT utility - Maiar Friends Rewards - Maiar Ghosts"
          />
          <Box mt={{ base: '4' }} display="flex" flexDirection="column" flex="1">
            <Text
              as="h2"
              fontSize={{ base: '3xl' }}
              fontWeight="black"
            >NFTs rewards</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              Set your Mr Ghost NFT as avatar in Maiar app and become a <strong>@gokai</strong> friend to get 1 free Mr Ghost NFT per month!<br />
              No friends in Maiar? Add Gokai as friend with the <strong>+66949486177</strong>.
            </Box>
            <Box display="flex" position="relative" zIndex="10" mt="auto" mx={{ base: "auto", lg: "inherit" }}>
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
        <Box
          flexDirection={{ base: 'column' }}
          width={{ base: '100%', lg: '32%' }}
          display="flex" alignItems={{ base: 'center', lg: 'start' }}
          p={5} mb={5} mx={1}
          borderRadius="3xl"
          background="black">
          <Box
            as="img"
            mx="auto"
            width="200px"
            height="200px"
            src="/static/media/utility-mr-ghost-NFT-learn2earn-rondle-elrond-network.webp"
            alt="Mr Ghost NFT utility - Learn2Earn Rondle - Maiar Ghosts"
            title="Mr Ghost NFT utility - Learn2Earn Rondle - Maiar Ghosts"
          />
          <Box mt={{ base: '4' }} display="flex" flexDirection="column" flex="1" color="white">
            <Text
              as="h2"
              fontSize={{ base: '3xl' }}
              fontWeight="black"
            >Learn2Earn</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              You can now play in <strong>Rondle</strong> dApp from <strong>Effort Economy</strong> and earn $RONDLE, $EFFORT tokens and NFTs from several exciting Elrond blockchain projects!</Box>
            <Box display="flex" position="relative" zIndex="10" mt="auto" mx={{ base: "auto", lg: "inherit" }}>
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
        <Box
          flexDirection={{ base: 'column' }}
          width={{ base: '100%', lg: '32%' }}
          display="flex" alignItems={{ base: 'center', lg: 'start' }}
          p={5} mb={5} mx={1}
          borderRadius="3xl"
          background="elvenTools.color3.darker">
          <Box
            as="img"
            mx="auto"
            width="200px"
            height="200px"
            src="/static/media/collab-superciety-elrond.webp"
            alt="Mr Ghost NFT utility - Superciety Gokai DAO - Maiar Ghosts"
            title="Mr Ghost NFT utility - Superciety Gokai DAO - Maiar Ghosts"
          />
          <Box mt={{ base: '4' }} display="flex" flexDirection="column" flex="1">
            <Text
            as="h2"
            fontSize={{ base: '3xl' }}
            fontWeight="black"
            >Governance</Text>
            <Box fontSize={{ base: 'xl' }} mb={5}>
              Participate in the governance and take the strategic decisions for the organisation! Join our <strong>DAO</strong> on <strong>Superciety</strong> to be able to vote.
            </Box>
            <Box display="flex" position="relative" zIndex="10" mt="auto" mx={{ base: "auto", lg: "inherit" }}>
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
                  href="https://superciety.com/fellowships/gokai-dao"
                >
                  Vote
                </Text>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
