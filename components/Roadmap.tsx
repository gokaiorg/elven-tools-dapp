import { Box, Text } from '@chakra-ui/react';
import { HomeSectionTitle } from './HomeSectionTitle';
import { motion } from 'framer-motion';

export const Roadmap = () => {
  return (
    <Box mt={{ base: '16', lg: '32' }}>
      <HomeSectionTitle title="NFT DAO GhostVerse Project" />
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        position="relative"
        zIndex="1"
        mb={20}
        pt={{ base: '5', md: '32', lg: '0' }}
      >
        <Text
          as="p"
          fontSize="2xl"
          fontWeight="medium"
          textAlign="center"
          zIndex="10"
          top="-3rem"
          position="relative"
          color="black"
        >
          Gokai Labs is a contributor and community member of the GhostVerse DAO
          on MultiversX.
        </Text>
        <Box display="flex" position="relative" zIndex="10" m="0 auto">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Text
              as="a"
              fontSize="xl"
              display="flex"
              p="1rem 2rem"
              my={5}
              color="elvenTools.color2.base"
              background="elvenTools.color2.lighter"
              _hover={{
                bg: 'elvenTools.color2.darker',
                color: 'elvenTools.color2.lighter',
              }}
              borderRadius="full"
              href="https://ghostverse.org/"
            >
              Visit
            </Text>
          </motion.div>
        </Box>
      </Box>

      <HomeSectionTitle title="Green Ghost Cannabis Shop" />
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        position="relative"
        zIndex="1"
        pt={{ base: '5', md: '32', lg: '0' }}
      >
        <Text
          as="p"
          fontSize="2xl"
          fontWeight="medium"
          textAlign="center"
          zIndex="10"
          position="relative"
          top="-3rem"
          color="black"
        >
          Gokai Labs is building a tokenized the Green Ghost cannabis shop in Thailand.
        </Text>
        <Box display="flex" position="relative" zIndex="10" m="0 auto">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Text
              as="a"
              fontSize="xl"
              display="flex"
              p="1rem 2rem"
              mt={5}
              color="elvenTools.color2.base"
              background="elvenTools.color2.lighter"
              _hover={{
                bg: 'elvenTools.color2.darker',
                color: 'elvenTools.color2.lighter',
              }}
              borderRadius="full"
              href="https://green.gd/"
            >
              LFGREEN
            </Text>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};
