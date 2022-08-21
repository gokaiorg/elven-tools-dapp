import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Utility } from '../components/Utility';
import { Helmet } from 'react-helmet';
import { defaultMetaTags } from '../config/dappUi';

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>{defaultMetaTags.titleUtility}</title>
        <meta
          name="description"
          content={defaultMetaTags.descriptionUtility}
        />
        <meta
          property="og:title"
          content={defaultMetaTags.shortname}
        />
        <meta
          property="og:description"
          content={defaultMetaTags.descriptionUtility}
        />
        <meta
          property="og:image"
          content={defaultMetaTags.imageUtility}
        />
        <meta
          property="og:url"
          content={defaultMetaTags.urlUtility}
        />
        <meta
          name="twitter:title"
          content={defaultMetaTags.shortname}
        />
        <meta
          name="twitter:description"
          content={defaultMetaTags.descriptionUtility}
        />
        <meta
          name="twitter:image"
          content={defaultMetaTags.imageUtility}
        />
        <meta
          name="twitter:url"
          content={defaultMetaTags.urlUtility}
        />
      </Helmet>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'maiar-ghosts', 'analytics']} />
      </HeaderMenu>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position="relative"
      >
        <Text
          as="h1"
          fontSize={{ base: '4xl', md: '3xl', lg: '5xl' }}
          maxWidth={{ base: '100%', md: '100%', lg: '60%' }}
          textAlign={{ base: 'center', md: 'center' }}
          fontWeight="black"
          lineHeight="shorter"
          mx="auto"
          pt={{ base: '16', lg: '20' }}
          mb={5}
          zIndex="10"
          color="elvenTools.color3.base"
        >
          Utility
        </Text>
        <Utility/>
      </Box>
    </MainLayout>
  );
};

export default Mint;
