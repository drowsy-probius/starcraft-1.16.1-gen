import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';

interface SearchBarProps {
  keyword: string;
  setKeyword: (word: string) => void;
  regenerator: () => void;
}

function SearchBar(props: SearchBarProps) {
  const { keyword, setKeyword, regenerator } = props;

  return (
    <Box
      w="100%"
      margin="20px 0px"
      padding="20px 0px"
      height="60px"
      color="MenuText"
    >
      <Flex dir="column" gap="4px">
        <Input
          placeholder="키워드를 입력하세요."
          value={keyword}
          onChange={(event) => {
            setKeyword(event.currentTarget.value);
          }}
        />
        <Button onClick={regenerator}>re?</Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
