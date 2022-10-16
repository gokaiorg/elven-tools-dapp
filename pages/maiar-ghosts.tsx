import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { HeroImage } from '../components/HeroImage';
import { motion } from 'framer-motion';
import { Secondary } from '../components/Secondary';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about']} />
      </HeaderMenu>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: 'column-reverse', md: 'row-reverse' }}
        >
          <MintHero />
          <HeroImage />
        </Box>
        <Secondary />
      </motion.div>
    </MainLayout>
  );
};

export default Mint;
