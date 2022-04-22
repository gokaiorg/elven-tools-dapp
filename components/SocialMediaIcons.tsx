import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <SocialIcon
        url="https://twitter.com/GokaiLabs"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://discord.gg/tXSeJfVVnH"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://github.com/gokaiorg"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://www.facebook.com/GokaiLabs"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://www.instagram.com/gokai_labs/"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
    </Box>
  );
};
