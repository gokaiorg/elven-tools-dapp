import NextLink from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { ImgEarth } from './ImgEarth';
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
        cursor="pointer"
      >
        <ImgEarth />
        <Box width="30px">
          <ImgG />
        </Box>
        <Text
          as="span"
          marginLeft="-4px"
          cursor="pointer"
          mb={0}
          mt="14px"
          fontSize={{ base: '18px', md: '28px' }}
          fontWeight="bold"
          fontFamily="heading"
          color="elvenTools.white"
        >
          hostLand
        </Text>
      </Box>
    </NextLink>
  );
};
