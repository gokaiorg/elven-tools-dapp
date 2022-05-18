import { Box, Container, Text, useBreakpointValue } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { useScQuery, SCQueryType } from '../hooks/interaction/useScQuery';
import { MintForm } from './MintForm';
import { Authenticated } from './Authenticated';
import { useAccount } from '../hooks/auth/useAccount';
import { LoginModalButton } from './LoginModalButton';
import { motion } from 'framer-motion';
import {
  isDropActive,
  smartContractAddress,
  tokensLimitPerAddressTotal,
  tokensLimitPerAddressPerDrop,
  isAllowlistEnabled,
  isMintingStarted,
} from '../config/nftSmartContract';
import { networkConfig, chainType } from '../config/network';
import { NFTLeftToMint } from './NFTLeftToMint';
import { NFTAllowlistEnabled } from './NFTAllowlistEnabled';
import { NFTMintedAlready } from './NFTMintedAlready';
import { NFTLeftToMintPerAddress } from './NFTLeftToMintPerAddress';

// TODO: Prepare sc query hooks for all cases
// TODO: Prepare separate components for the segments here
// TODO: refactor it a bit

export const MintHero = () => {
  const { address } = useAccount();
  const {
    data,
    mutate: refreshData,
    isLoading: totalIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getTotalTokensLeft',
      args: [],
    },
  });

  const {
    data: dropData,
    mutate: refreshDropData,
    isLoading: dropIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getDropTokensLeft',
      args: [],
    },
    autoInit: isDropActive,
  });

  const {
    data: mintedData,
    mutate: refreshMintedData,
    isLoading: mintedDataLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getMintedPerAddressTotal',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
    },
    autoInit: Boolean(address),
  });

  const { data: mintedPerDropData, mutate: refreshMintedPerDropData } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getMintedPerAddressPerDrop',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isDropActive),
    });

  const { data: allowlistCheckData, isLoading: allowlistCheckLoading } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getAllowlistAddressCheck',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isAllowlistEnabled),
    });

  const handleRefreshData = useCallback(() => {
    refreshData();
    refreshMintedData();
    refreshMintedPerDropData();
    refreshDropData();
  }, [
    refreshData,
    refreshMintedData,
    refreshMintedPerDropData,
    refreshDropData,
  ]);

  const getLeftToMintForUser = useCallback(() => {
    let leftPerDrop = 0;
    let leftInTotal = 0;

    if (isAllowlistEnabled && Number(allowlistCheckData?.data?.data) === 0) {
      return 0;
    }

    if (mintedPerDropData?.data?.data) {
      leftPerDrop =
        tokensLimitPerAddressPerDrop - Number(mintedPerDropData.data.data);
    }
    if (mintedData?.data?.data) {
      leftInTotal = tokensLimitPerAddressTotal - Number(mintedData.data.data);
    }
    if (!isDropActive || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [
    allowlistCheckData?.data?.data,
    mintedData?.data.data,
    mintedPerDropData?.data.data,
  ]);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      width="100%"
      maxWidth="1280px"
    >
      <Box width={{ base: '100%', md: '40%' }} mr={{ base: '0', md: '3rem' }} display="flex" justifyContent="center">
        <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
          <img
          src="/static/media/maiar-ghosts-mint-elrond-nft-dao.gif"
          title="Mint Mr Ghost Mr Ghost Minting - Elrond NFT DAO - Maiar Ghosts"
          alt="Mint Mr Ghost Mr Ghost Minting - Elrond NFT DAO - Maiar Ghosts"
          width={500}
          height={500}
        />
      </motion.div>
      </Box>
      <Box width={{ base: '100%', md: '50%' }}>
        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="black"
          lineHeight="shorter"
          mb={5}
        >
          Collection of 8658 unique Mr Ghost NFT haunting the Elrond blockchain
        </Text>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Mr Ghost was born from a wish to create an NFT around the M logo from
          the Elrond Network ​​digital wallet: Maiar.
        </Text>
        {isMintingStarted ? (
          <Box mt={6}>
            <NFTLeftToMint
              data={data}
              dropData={dropData}
              dataLoading={isDropActive ? dropIsLoading : totalIsLoading}
            />
            <Box>
              <Authenticated
                fallback={
                  <Box
                    mt={6}
                    display="flex"
                    alignItems="center"
                    justifyContent={isContentCentered ? 'center' : 'flex-start'}
                  >
                    Login to mint{" "}
                    <Box borderRadius="full" border="1px solid #fff" ml="1rem">
                      <LoginModalButton />
                    </Box>
                  </Box>
                }
                spinnerCentered={isContentCentered}
              >
                <NFTAllowlistEnabled
                  data={allowlistCheckData}
                  dataLoading={allowlistCheckLoading}
                />
                <NFTMintedAlready
                  data={mintedData}
                  dataLoading={mintedDataLoading}
                />
                <NFTLeftToMintPerAddress
                  leftToMintForUser={getLeftToMintForUser()}
                />
                <MintForm
                  cb={handleRefreshData}
                  leftToMintForUser={getLeftToMintForUser()}
                />
                {mintedData?.data?.data && mintedData.data.data > 0 && (
                  <Box
                    display="flex"
                    alignItems="center"
                    mt={6}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                  >
                    <Text
                      as="a"
                      target="_blank"
                      color="elvenTools.color2.darker"
                      fontSize="xl"
                      fontWeight="black"
                      textDecoration="underline"
                      rel="noopener noreferrer nofollow"
                      href={`${networkConfig[chainType].explorerAddress}/accounts/${address}/nfts`}
                    >
                      Check your NFTs!
                    </Text>
                  </Box>
                )}
              </Authenticated>
            </Box>
          </Box>
        ) : (
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text fontSize="2xl" fontWeight="bold" mt={10}>
              Drop #1 - Sold Out.
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              Please be back soon!
            </Text>
          </Box>
        )}
      </Box>
    </Container>
  );
};
