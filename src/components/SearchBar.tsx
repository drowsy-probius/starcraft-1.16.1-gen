import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Stack,
  Switch,
} from '@chakra-ui/react';
import React from 'react';
import { Options } from '../lib/strings';

interface SearchBarProps {
  keyword: string;
  setKeyword: (word: string) => void;
  options: Options;
  setOptions: (obj: Options) => void;
  regenerator: () => void;
}

function SearchBar(props: SearchBarProps) {
  const { keyword, setKeyword, options, setOptions, regenerator } = props;

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
      <Flex dir="column" gap="40px" margin="0px 20px">
        <Stack direction="row" style={{ padding: '10px 0px' }}>
          <FormLabel htmlFor="replaceSpace">공백에도 추가</FormLabel>
          <Switch
            id="replaceSpace"
            isChecked={options.replaceSpace}
            onChange={(event) => {
              setOptions({
                ...options,
                replaceSpace: event.target.checked,
              });
              regenerator();
            }}
          />
        </Stack>
        <Stack direction="row" style={{ padding: '10px 0px' }}>
          <FormLabel htmlFor="addSeperator">문장 부호 추가</FormLabel>
          <Switch
            id="addSeperator"
            isChecked={options.addSeperator}
            onChange={(event) => {
              setOptions({
                ...options,
                addSeperator: event.target.checked,
              });
              regenerator();
            }}
          />
        </Stack>
        <Stack direction="row" style={{ padding: '10px 0px' }}>
          <FormLabel htmlFor="replaceChunk">두번 적용</FormLabel>
          <Switch
            id="replaceChunk"
            isChecked={options.replaceChunk}
            onChange={(event) => {
              setOptions({
                ...options,
                replaceChunk: event.target.checked,
              });
              regenerator();
            }}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

export default SearchBar;
