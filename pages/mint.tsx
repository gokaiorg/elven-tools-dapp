import type { NextPage } from 'next';
import { Box, Show } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { CollectionInfoBox } from '../components/CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';

import {
  collectionTicker,
  smartContractAddress,
  collectionSize,
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
        justifyContent="space-between"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <MintHero />
              <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'center' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
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
        <CollectionInfoBox content={collectionSize} label="Collection amount" />
      </Box>
      </Box>
    </MainLayout>
  );
};

export default Mint;
