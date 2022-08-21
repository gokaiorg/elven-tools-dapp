import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgWin = () => {
  return (
    <>
      <motion.div
        animate={{
          x: [-250, 1700, -250],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Box
          as="img"
          src="/static/media/mr-ghost-winning-elrond-nft-dao-maiar-ghosts.webp"
          width="256px"
          height="auto"
          alt="Mr Ghost Winning - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Winning - Elrond NFT DAO - Maiar Ghosts"
          zIndex={11}
        />
      </motion.div>
    </>
  );
};
