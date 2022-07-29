import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { HeroImage } from './HeroImage';
import { ImgEarth } from './ImgEarth';
import { ImgWin } from './ImgWin';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

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
      <Box position="absolute" bottom="0" marginBottom="-7px">
        <Image
          src="/static/media/bg-mr-ghost-bottom.png"
          alt="Mr Ghost Moon"
          width={2048}
          height={379}
        />
      </Box>
      <ImgWin />
    </Box>
  );
};
