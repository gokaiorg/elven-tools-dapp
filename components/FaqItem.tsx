import { FC } from 'react';
import {
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem border={0} bgColor="black" mb={6} borderRadius="3xl">
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="elvenTools.white"
        padding={6}
        fontSize="xl"
      >
        <Box flex="1" textAlign="left" fontWeight="black">
          {question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="elvenTools.white" fontSize="xl">
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );
};
