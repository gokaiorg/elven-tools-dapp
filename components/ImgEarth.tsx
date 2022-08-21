import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgEarth = () => {
  return (
    <Box
      height={{ base: '50px', md: '100px', lg: '150px' }}
      width={{ base: '50px', md: '100px', lg: '150px' }}
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
          src="/static/media/mr-ghost-earth-elrond-nft-dao-maiar-ghosts.webp"
          width={{ base: '50px', md: '100px', lg: '150px' }}
          height={{ base: '50px', md: '100px', lg: '150px' }}
          alt="Mr Ghost Earth - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Earth - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div>
    </Box>
  );
};
