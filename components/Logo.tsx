import NextLink from 'next/link';
import { ImgG } from './ImgG';
import { Box, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Box width="30px">
          <ImgG />
        </Box>
        <Text
          as="span"
          marginLeft="-4px"
          cursor="pointer"
          mb={0}
          fontSize="4xl"
          color="elvenTools.white"
        >
          okai Labs
        </Text>
      </Box>
    </NextLink>
  );
};
