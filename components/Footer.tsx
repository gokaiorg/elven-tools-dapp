import { Container, Box, Text } from '@chakra-ui/react';
import { SocialMediaIcons } from '../components/SocialMediaIcons';

export const Footer = () => {
  return (
    <Box
      height="120px"
      color="elvenTools.color3.base"
      display="flex"
      flexDirection={{ base: 'column', md:'row'}}
      alignItems="center"
      fontSize="sm"
      fontWeight="normal"
      py={5}
      px={5}
    >
      <SocialMediaIcons />
      <Box
        borderRadius="8px"
        mx="auto"
        overflow="hidden"
        display="table"
        mt={{ base: '5', md:'0'}}
      >
        <iframe
          src='https://egld.community/api/products/5691f3eb-fbf6-4987-b684-6b060cef40c4/upvotes/embed'
          width='290'
          height='70'
        >
        </iframe>
      </Box>
      <Box ml={{ base: '0'}} mt={{ base: '5', md:'0'}} display="flex" alignItems="center" whiteSpace="nowrap">
        Made with
        <svg
          width="25px"
          height="25px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
        by Gokai Labs
      </Box>
    </Box>
  );
};
