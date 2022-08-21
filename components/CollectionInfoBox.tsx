import { Box, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Tooltip } from '@chakra-ui/react';

interface CollectionInfoBoxProps {
  content: string | number;
  label: string;
  href?: string;
  isLoading?: boolean;
}

export const CollectionInfoBox: FC<CollectionInfoBoxProps> = ({
  content,
  label,
  href,
  isLoading = false,
}) => {
  return (
    <Tooltip
      label={label}
      bg="elvenTools.dark.darker"
      fontWeight="light"
      placement="top"
      py={3}
      px={5}
      mb={3}
      hasArrow
      arrowSize={12}
      borderRadius={10}
    >
      <Box
        py={3}
        px={3}
        whiteSpace="nowrap"
        borderColor="elvenTools.white"
      >
        {isLoading ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Spinner color="elvenTools.color2.base" />
          </Box>
        ) : (
          <Text fontWeight="normal">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer nofollow">
                {content}
              </a>
            ) : (
              content
            )}
          </Text>
        )}
      </Box>
    </Tooltip>
  );
};
