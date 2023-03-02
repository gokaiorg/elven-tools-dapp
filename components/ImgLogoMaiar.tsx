import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgLogoMaiar = () => {
  return (
    <Image
      src="/static/media/logo-multiversx.webp"
      alt="xPortal"
      title="xPortal"
      mr={2}
      boxSize="40px"
      objectFit="contain"
    />
  );
};
