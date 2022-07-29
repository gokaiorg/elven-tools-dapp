import type { NextPage } from 'next';
import { Box, Container } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { CollectionInfoBox } from '../components/CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';
import Image from 'next/image';
import { ImgEarth } from '../components/ImgEarth';
import { Helmet } from 'react-helmet';
import { defaultMetaTags } from '../config/dappUi';
import { shortenHash } from '../utils/shortenHash';
import { Invest } from '../components/Invest';
import { Secondary } from '../components/Secondary';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;

const Mint: NextPage = () => {
    const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });
  
  return (
    <MainLayout>
      <Helmet>
        <title>{defaultMetaTags.titleMaiarGhosts}</title>
        <meta
          name="description"
          content={defaultMetaTags.descriptionMaiarGhosts}
        />
        <meta
          property="og:title"
          content={defaultMetaTags.shortname}
        />
        <meta
          property="og:description"
          content={defaultMetaTags.descriptionMaiarGhosts}
        />
        <meta
          property="og:image"
          content={defaultMetaTags.imageMaiarGhosts}
        />
        <meta
          property="og:url"
          content={defaultMetaTags.urlMaiarGhosts}
        />
        <meta
          name="twitter:title"
          content={defaultMetaTags.shortname}
        />
        <meta
          name="twitter:description"
          content={defaultMetaTags.descriptionMaiarGhosts}
        />
        <meta
          name="twitter:image"
          content={defaultMetaTags.imageMaiarGhosts}
        />
        <meta
          name="twitter:url"
          content={defaultMetaTags.urlMaiarGhosts}
        />
      </Helmet>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'rarity', 'utility', 'analytics']} />
      </HeaderMenu>
      <Box
        display="flex"
        flexDirection="column"
        background="#000"
        justifyContent="space-between"
        position="relative"
      >
        <ImgEarth />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={{ base: 'center', md: 'center' }}
          gap={3}
        >
           <CollectionInfoBox
          content={collectionTicker || ''}
          label="Collection ticker. Click for details."
          isLoading={collectionTickerLoading}
          href={`${networkConfig[chainType].explorerAddress}/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={
            smartContractAddress
              ? shortenHash(smartContractAddress || '', 12)
              : 'No minter smart contract provided!'
          }
          label={`Minter smart contract. Click for details.`}
          href={
            smartContractAddress
              ? `${networkConfig[chainType].explorerAddress}/accounts/${smartContractAddress}`
              : undefined
          }
        />
        </Box>
        <MintHero />
        <Box marginBottom="-7px">
          <Image
            src="/static/media/bg-mr-ghost-bottom.png"
            alt="Mr Ghost Moon"
            width={2048}
            height={379}
          />
        </Box>
      </Box>
      <Container maxW="1280px">
        <Secondary />
        <Invest />
      </Container>
    </MainLayout>
  );
};

export default Mint;
