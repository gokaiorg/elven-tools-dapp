import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImgG } from '../components/ImgG';

export const HeroImage = () => {
  return (
    <Box
      width={{ base: '80%', lg: '100%' }}
      height={{ base: '495px', lg: '545px' }}
      display="flex"
      justifyContent="center"
      margin="auto"
      position="absolute"
      top={{ base: '-100px', lg: '-200px' }}
      bottom="0"
      right="0"
      left="0"
      zIndex="0"
      opacity="0.2"
    >
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          opacity: [0, 0, 1],
        }}
      >
        <ImgG />
      </motion.div>
    </Box>
  );
};
