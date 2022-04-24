import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImgG } from '../components/ImgG';

export const HeroImage = () => {
  return (
    <Box
      width="350px"
      height="545px"
      display="flex"
      margin="auto"
      position="absolute"
      top="-200px"
      bottom="0"
      right="0"
      left="0"
      zIndex="0"
    >
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          opacity: [0, 0.2],
        }}
      >
        <ImgG />
      </motion.div>
    </Box>
  );
};
