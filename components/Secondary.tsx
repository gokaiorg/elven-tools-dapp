import { Text, Box, SimpleGrid } from '@chakra-ui/react';
import { SecondaryMember } from './SecondaryMember';
import { secondary } from '../config/dappUi';

export const Secondary = () => {
  if (!Array.isArray(secondary)) return null;

  return (
    <Box mt={4}>
      <Text
        as="h2"
        color="ghostLand.color2.darker"
        fontSize="xl"
        fontWeight="black"
        mb={3}
      >
        Trade
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
        {secondary.map((secondaryMember, index) => (
          <SecondaryMember key={index} {...secondaryMember} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
