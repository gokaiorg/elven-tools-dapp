import NextLink from 'next/link';
import { Box, Text, Heading, keyframes } from '@chakra-ui/react';
import { ImgG } from './ImgG';

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
        <Text
          position="absolute"
          right="0"
          top="0"
          fontSize="10px"
          fontWeight="semibold"
          px={1.5}
          borderRadius="sm"
          color="elvenTools.color2.base"
        >
          devnet
        </Text>
        <Box width="30px">
          <ImgG />
        </Box>
        <Heading
          as="span"
          marginLeft="-4px"
          cursor="pointer"
          mb={0}
          fontSize="4xl"
          color="elvenTools.white"
        >
          okai Labs
        </Heading>
      </Box>
    </NextLink>
  );
};
