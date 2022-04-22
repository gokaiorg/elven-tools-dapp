import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

interface RoadmapItemProps {
  title: string;
  points: string[];
}

export const RoadmapItem: FC<RoadmapItemProps> = ({ title, points }) => {
  return (
    <Box
      px={10}
      py={7}
      color="elvenTools.color3.base"
    >
      <Text fontSize="2xl" fontWeight="black" mb={3}>
        {title}
      </Text>
      <UnorderedList color="elvenTools.color3.base" fontSize="xl">
        {points.map((point, index) => (
          <ListItem key={index}>{point}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
