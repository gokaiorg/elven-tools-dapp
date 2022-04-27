import { Box, SimpleGrid } from '@chakra-ui/react';
import { RoadmapItem } from './RoadmapItem';
import { roadmap } from '../config/dappUi';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <Box mt={{ base:'16', lg: '32'}}>
      <HomeSectionTitle title="Roadmap" />
      <SimpleGrid columns={{ lg: 3, md: 3, sm: 1 }} spacing={10}>
        {roadmap.map((roadmapItem, index) => (
          <RoadmapItem key={index} {...roadmapItem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
