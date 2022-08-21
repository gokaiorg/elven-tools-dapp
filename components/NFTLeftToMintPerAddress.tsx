import { Box, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

interface NFTLeftToMintPerAddressProps {
  leftToMintForUser: number;
  dataLoading?: boolean;
}

export const NFTLeftToMintPerAddress: FC<NFTLeftToMintPerAddressProps> = ({
  leftToMintForUser,
  dataLoading,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      fontSize={{ base: 'md' }}
    >
      <Text fontWeight="bold">You can mint:</Text>
      {dataLoading ? (
        <Spinner ml={3} color="elvenTools.color2.darker" />
      ) : (
        <Text color="elvenTools.color2.darker" fontWeight="black" ml={3}>
          {leftToMintForUser}
        </Text>
      )}
      <Text fontWeight="bold" ml={3}>
        NFTs
      </Text>
    </Box>
  );
};
