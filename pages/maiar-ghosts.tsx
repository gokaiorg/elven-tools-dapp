import type { NextPage } from 'next';
import { Box, Show } from '@chakra-ui/react';
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

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about']} />
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
            src="/bg-mr-ghost-bottom.png"
            alt="Mr Ghost Moon"
            width={2048}
            height={379}
          />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Mint;
