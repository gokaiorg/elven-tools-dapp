import { Container, Box, Text, Image } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box color="elvenTools.white" display="flex" alignItems="center">
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box
          mx="auto"
          overflow="hidden"
          display="table"
          position="relative"
          zIndex={1}
          my={{ base: '4' }}
        >
          <iframe
            src="https://egld.community/api/products/5691f3eb-fbf6-4987-b684-6b060cef40c4/upvotes/embed"
            width="290"
            height="70"
          ></iframe>
        </Box>
        <Box
          fontSize="xs"
          fontWeight="bold"
          mb="4"
          position="relative"
          zIndex={1}
        >
          <Text
            as="a"
            color="#fff"
            href="https://www.elven.tools"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Elven Tools Dapp (v{`${packageJson.version}`})
          </Text>
        </Box>
        <Box
          position="absolute"
          zIndex={0}
          width="100%"
          height="auto"
          left="0"
          right="0"
          bottom="0"
        >
          <Image
            src="/media/ghostland-cemetery-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="Mr Ghost Moon"
            objectFit="contain"
            width={2048}
            height="auto"
          />
        </Box>
      </Container>
    </Box>
  );
};
