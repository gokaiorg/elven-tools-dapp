import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroImage } from './HeroImage';
import { ImgEarth } from './ImgEarth';
import { ImgWin } from './ImgWin';
import { CollectionInfoBox } from './CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';
import { shortenHash } from '../utils/shortenHash';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;

export const Hero = () => {
  const { data: collectionSize, isLoading: collectionSizeLoading } =
    useElvenScQuery<number>({
      funcName: 'getTotalSupply',
      type: SCQueryType.NUMBER,
    });

  const { data: totalTokensLeft, isLoading: totalTokensLeftIsLoading } =
    useElvenScQuery<number>({
      type: SCQueryType.NUMBER,
      funcName: 'getTotalTokensLeft',
    });

  const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height={{ base: 'auto', lg: 'calc(100vh - 85px)' }}
      position="relative"
      zIndex="1"
      background="black"
      overflow="hidden"
      pt={{ base: '5', md: '32', lg: '0' }}
    >
      <HeroImage />
      <ImgEarth />
      <Text
        as="h1"
        fontSize={{ base: '4xl', md: '3xl', lg: '5xl' }}
        maxWidth={{ base: '100%', md: '100%', lg: '60%' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mx="auto"
        pt={{ base: '16', md: '0', lg: '20' }}
        mb={5}
        zIndex="10"
      >
        Collectible NFT project on
        <br />
        <Text
          as="a"
          color="white"
          href="https://elrond.com/"
        >
          Elrond Network
        </Text>
      </Text>
      <Text
        as="p"
        fontSize="2xl"
        fontWeight="medium"
        textAlign="center"
        zIndex="10"
      >
        Buy a Mr Ghost NFT and become a member of Gokai Labs
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
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
        <CollectionInfoBox
          content={`${collectionSize - totalTokensLeft} / ${collectionSize}`}
          isLoading={collectionSizeLoading || totalTokensLeftIsLoading}
          label="Minter per collection supply"
        />
      </Box>
      <ImgWin />
    </Box>
  );
};
