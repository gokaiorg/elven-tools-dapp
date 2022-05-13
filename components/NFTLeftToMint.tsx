import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { VMOutput } from '../hooks/interaction/useScQuery';
import { isDropActive } from '../config/nftSmartContract';

interface NFTLeftToMintProps {
  data?: VMOutput;
  dropData?: VMOutput;
  dataLoading?: boolean;
}

export const NFTLeftToMint: FC<NFTLeftToMintProps> = ({
  data,
  dropData,
  dataLoading,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="black">
        {isDropActive ? 'DROP #1' : 'Total'} - NFTs left to mint:{' '}
      </Text>
      {dataLoading ? (
        <Spinner ml={3} color="elvenTools.color2.darker" />
      ) : (
        <Text
          color="elvenTools.color2.darker"
          fontSize="3xl"
          fontWeight="black"
          ml={3}
        >
          {isDropActive ? dropData?.data.data : data?.data?.data}
        </Text>
      )}
    </Box>
  );
};
