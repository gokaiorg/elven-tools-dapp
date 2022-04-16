import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HeroImage } from '../components/HeroImage';
import { Faq } from '../components/Faq';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'mint', 'about']} />
      </HeaderMenu>
      <Box
        display="flex"
        position="relative"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <Hero />
        <HeroImage />
        <motion.div
        animate={{
          x: [-1000, 1000, -1000],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Box
          as="img" src="/mr-ghost-winning-elrond-nft-dao-maiar-ghosts.webp"
          width="256px"
          height="auto"
          alt="Mr Ghost Winning - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Winning - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div> 
      </Box>
      <Faq />
      <Roadmap />
      <Team />
    </MainLayout>
  );
};

export default Home;
