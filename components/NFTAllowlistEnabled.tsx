import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { VMOutput } from '../hooks/interaction/useScQuery';
import { isAllowlistEnabled } from '../config/nftSmartContract';

interface NFTAllowlistEnabledProps {
  data?: VMOutput;
  dataLoading?: boolean;
}

export const NFTAllowlistEnabled: FC<NFTAllowlistEnabledProps> = ({
  data,
  dataLoading,
}) => {
  return (
    <>
      {isAllowlistEnabled && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Box fontSize={{ base: 'md' }}>
            <Text as="span" fontWeight="bold">
              Allowlist is enabled. You are{' '}
            </Text>
            {dataLoading ? (
              <Spinner ml={3} color="elvenTools.color2.darker" />
            ) : Number(data?.data?.data) !== 0 ? (
              <Text
                color="elvenTools.color2.darker"
                as="span"
                fontWeight="bold"
              >
                on
              </Text>
            ) : (
              <Text
                color="elvenTools.color3.darker"
                as="span"
                fontWeight="bold"
              >
                not on
              </Text>
            )}{' '}
            <Text as="span" fontWeight="bold">
              the list!
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};
