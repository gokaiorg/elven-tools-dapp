import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { SCQueryType } from '../hooks/interaction/useScQuery';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';

interface NFTAllowlistEnabledProps {
  data?: number;
  dataLoading?: boolean;
}

export const NFTAllowlistEnabled: FC<NFTAllowlistEnabledProps> = ({
  data,
  dataLoading,
}) => {
  const { data: allowlistState } = useElvenScQuery<boolean>({
    funcName: 'isAllowlistEnabled',
    type: SCQueryType.BOOLEAN,
  });

  return (
    <>
      {allowlistState && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Box fontSize={{ base: 'md' }}>
            <Text as="span" fontWeight="bold">
              You are{' '}
            </Text>
            {dataLoading ? (
              <Spinner ml={3} color="elvenTools.color2.darker" />
            ) : data !== 0 ? (
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
