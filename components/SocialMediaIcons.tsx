import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <SocialIcon
        url="https://www.twitter.com/ElvenTools"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://www.github.com/ElvenTools"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://www.telegram.me/juliancwirko"
        bgColor="elvenTools.color3.base"
        style={{ width: 30, height: 30 }}
      />
    </Box>
  );
};
