import React, { useState } from 'react';
import { Container, Divider, Stack } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import Content from './Content';
import { Options } from '../lib/strings';

const stringFromHash = () => {
  const hash = window.location.hash.slice(1);
  if (!hash) return '스타크래프트 1.16.1 립버전';
  return decodeURIComponent(hash);
};

function Main() {
  const [keyword, _setKeyword] = useState(stringFromHash());
  const [options, setOptions] = useState<Options>({
    replaceChunk: false, // 2번 수행
    replaceSpace: true, // 공백도 치환
    addSeperator: true, // 문장 부호 추가
  });
  const [regenerateWatcher, setRegenerateWatcher] = useState(true);

  const setKeyword = (word: string) => {
    window.location.hash = word;
    _setKeyword(word);
  };

  return (
    <Container
      backgroundColor="gray.900"
      minW="100vw"
      minH="100vh"
      margin="0px"
    >
      <Container
        backgroundColor="gray.50"
        position="relative"
        top="5vh"
        minW="60vw"
        minH="min-content"
        maxH="90vh"
        borderRadius="20px"
        border="1px solid gray"
        boxShadow="1px 1px 2px gray.800"
        paddingBottom="40px"
        overflow="scroll"
      >
        <Stack w="100%" margin={0} padding={0} gap="10px">
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            options={options}
            setOptions={setOptions}
            regenerator={() => {
              setRegenerateWatcher(!regenerateWatcher);
            }}
          />
          <Divider />
          <Content
            keyword={keyword}
            options={options}
            regenerateWatcher={regenerateWatcher}
          />
        </Stack>
      </Container>
    </Container>
  );
}

export default Main;
