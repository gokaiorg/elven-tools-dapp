import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h2"
      fontSize={{ base: '5xl' }}
      fontWeight="black"
      mb={16}
      textAlign="center"
      color="elvenTools.color3.base"
    >
      {title}
    </Text>
  );
};
