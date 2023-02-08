import React, { useEffect, useState, useRef } from 'react';
import {
  Button,
  Container,
  Divider,
  Stack,
  Text,
  Flex,
  Tooltip,
  List,
  ListItem,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import {
  generateRandomComments,
  generateRandomString,
  generateRandomUser,
} from '../lib/strings';

interface ContentProps {
  keyword: string;
  regenerateWatcher: boolean;
}

function Content(props: ContentProps) {
  const { keyword, regenerateWatcher } = props;
  const [paragraphs, setParagraphs] = useState(generateRandomString(keyword));
  const [comments, setComments] = useState(generateRandomComments(keyword));
  const content = useRef<HTMLDivElement>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    setParagraphs(generateRandomString(keyword));
    setComments(generateRandomComments(keyword));
  }, [keyword, regenerateWatcher]);

  const copyToClipboard = () => {
    const text = content.current?.innerText;
    if (text === undefined) return;
    window.navigator.clipboard.writeText(text);
    setIsTooltipOpen(true);
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 500);
  };

  return (
    <Container minW="100%" marginTop="10px">
      <Flex marginBottom="5px" flexDir="column">
        {keyword.length > 0 ? (
          <>
            <Stack gap="10px" ref={content}>
              {paragraphs.map((paragraph, idx) => (
                <Text key={idx}>{paragraph}</Text>
              ))}
            </Stack>
            <Tooltip label="copied!" isOpen={isTooltipOpen}>
              <Button
                onClick={copyToClipboard}
                padding="0"
                margin="0"
                alignSelf="flex-end"
              >
                <CopyIcon />
              </Button>
            </Tooltip>
          </>
        ) : null}
      </Flex>
      <Divider />
      <List gap="10px" marginTop="10px">
        {keyword.length > 0
          ? comments.map((comment, idx) => (
              <ListItem
                key={idx}
                display="inline-flex"
                alignItems="center"
                gap="10px"
              >
                <Text fontSize="sm">{generateRandomUser()}</Text>
                <Text>{comment}</Text>
              </ListItem>
            ))
          : null}
      </List>
    </Container>
  );
}

export default Content;
