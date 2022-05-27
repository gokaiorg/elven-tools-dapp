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

import {
  collectionTicker,
  smartContractAddress,
} from '../config/nftSmartContract';
import { shortenHash } from '../utils/shortenHash';
import { Invest } from '../components/Invest';
import { Secondary } from '../components/Secondary';

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'rarity', 'maiar-ghosts', 'utility']} />
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
            content={collectionTicker}
            label="Collection ticker. Click for details."
            href={`${networkConfig[chainType].explorerAddress}/collections/${collectionTicker}`}
          />
          <CollectionInfoBox
            content={shortenHash(smartContractAddress, 12)}
            label={`Minter smart contract. Click for details.`}
            href={`${networkConfig[chainType].explorerAddress}/accounts/${smartContractAddress}`}
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
