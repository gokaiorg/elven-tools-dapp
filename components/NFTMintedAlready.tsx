import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface NFTMintedAlreadyProps {
  data?: string | number;
  dataLoading?: boolean;
}

export const NFTMintedAlready: FC<NFTMintedAlreadyProps> = ({
  data,
  dataLoading,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      fontSize={{ base: 'md' }}
    >
      <Text fontWeight="bold">You have minted: </Text>

      {dataLoading ? (
        <Spinner ml={3} color="elvenTools.color2.darker" />
      ) : (
        <Text color="elvenTools.color2.darker" fontWeight="black" ml={3}>
          {data}
        </Text>
      )}

      <Text fontWeight="bold" ml={3}>
        in total
      </Text>
    </Box>
  );
};
