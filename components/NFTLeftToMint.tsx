import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { isDropActive } from '../config/nftSmartContract';

interface NFTLeftToMintProps {
  data?: string | number;
  dropData?: string | number;
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
        {isDropActive ? 'Drop #2 -' : 'Total'} NFTs left to mint:{' '}
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
          {isDropActive ? dropData : data}
        </Text>
      )}
    </Box>
  );
};
