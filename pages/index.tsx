import type { NextPage } from 'next';
import { Box, Container } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Faq } from '../components/Faq';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';
import { ImgMoon } from '../components/ImgMoon';
import { Collab } from '../components/Collab';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'maiar-ghosts', 'blog', 'wallet']} />
      </HeaderMenu>
      <Box position="relative" width="100%">
        <Hero />
      </Box>
      <Container maxW="1280px">
        <ImgMoon />
        <Roadmap />
        <Faq />
        <Team />
        <Collab />
      </Container>
    </MainLayout>
  );
};

export default Home;
