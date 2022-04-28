import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImgLogoMaiar } from './ImgLogoMaiar';

export const Invest = () => {
  return (
    <Box
      my={16}
      pt={10}
      pb={20}
      px={5}
      background="elvenTools.color3.darker"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      borderRadius="2xl"
      position="relative"
    >
      <Box
        background="white"
        borderRadius="100%"
        p={3}
        mb={2}
      >
        <ImgLogoMaiar />
      </Box>
      <Box fontWeight="black" color="black">
        <Box as='h3' mb={2} fontSize="3xl">
          How to invest?
        </Box>
        <Box fontSize="xl">
          To buy NFTs we recommend you to get Maiar Wallet on your phone and
          connect your wallet to login.
          <br/>
          You can also create an{" "}
          <Box
            as='a'
            textDecoration="underline"
            {...{
              target: "_blank",
            }}
            href="https://wallet.elrond.com/"
            data-testid="Elrond Web Wallet - Gokai Labs NFT DAO - Maiar Ghosts"
            title="Elrond Web Wallet - Gokai Labs NFT DAO - Maiar Ghosts"
          >
            Elrond Web Wallet
          </Box>{" "}
        </Box>
      </Box>
      <Box position="absolute" bottom="-30px">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Text
            as="a"
            fontSize="xl"
            display="flex"
            p="1rem 2rem"
            color= 'white'
            background="elvenTools.color2.darker"
            _hover={{
              bg: 'elvenTools.color2.lighter',
              color: 'elvenTools.color2.darker',
            }}
            borderRadius="full"
            href="https://get.maiar.com/referral/7nvae7kpo1"
          >
            Get Maiar
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
};
