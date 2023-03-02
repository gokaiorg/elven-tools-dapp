import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImgLogoMaiar } from './ImgLogoMaiar';

export const Invest = () => {
  return (
    <Box
      mt={16}
      mb={24}
      pt={10}
      pb={20}
      px={5}
      background="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      borderRadius="2xl"
      position="relative"
    >
      <Box mb={2}>
        <ImgLogoMaiar />
      </Box>
      <Box fontWeight="black" color="white">
        <Box as="h3" mb={2} fontSize="3xl">
          New to MultiversX?
        </Box>
        <Box fontSize="xl">
          To ride into the MultiversX we recommend you to get xPortal on your phone and
          connect your wallet to login.
        </Box>
      </Box>
      <Box position="absolute" bottom="-30px">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Text
            as="a"
            fontSize="xl"
            display="flex"
            p="1rem 2rem"
            color="white"
            background="elvenTools.color2.darker"
            _hover={{
              bg: 'elvenTools.color2.lighter',
              color: 'elvenTools.color2.darker',
            }}
            borderRadius="full"
            href="https://xport.al/referral/7nvae7kpo1"
          >
            Install xPortal
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
};
