import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgMoon = () => {
  return (
    <Box display="flex" margin="auto" width="300px" height="300px">
      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Box
          as="img"
          width="300px"
          height="300px"
          src="/static/media/mr-ghost-mooning-elrond-nft-dao-maiar-ghosts.webp"
          alt="Mr Ghost Mooning - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Mooning - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div>
    </Box>
  );
};
