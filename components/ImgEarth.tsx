import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgEarth = () => {
  return (
    <Box
      height="150px"
      width="150px"
      position="absolute"
      zIndex="0"
      left="5%"
      top="5%"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Box
          as="img"
          src="/mr-ghost-earth-elrond-nft-dao-maiar-ghosts.webp"
          width="150px"
          height="150px"
          alt="Mr Ghost Earth - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Earth - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div>
    </Box>
  );
};
