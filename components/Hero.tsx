import { Box, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';

import {
  collectionTicker,
  smartContractAddress,
  collectionSize,
} from '../config/nftSmartContract';
import { shortenHash } from '../utils/shortenHash';

export const Hero = () => {
  return (
    <Box width="100%" position="relative" zIndex="2">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        maxWidth={{ base: '100%', md: '100%', lg: '60%' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mx="auto"
        mb={5}
      >
        Collectible NFT DAO project on Elrond Network
      </Text> 
      <Text
        as="p"
        fontSize="2xl"
        textAlign={{ base: 'center', md: 'center' }}
      >
        Maiar Ghosts - Drop 1 coming soon
      </Text>
      <Text as="p" fontSize="2xl" fontWeight="medium" textAlign="center">
          Buy NFTS and become a member of Gokai Labs DAO.
      </Text>
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
  );
};
