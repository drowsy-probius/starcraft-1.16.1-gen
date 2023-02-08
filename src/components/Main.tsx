import React, { useState } from 'react';
import { Container, Stack } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import Content from './Content';

const stringFromHash = () => {
  const hash = window.location.hash.slice(1);
  if (!hash) return '스타크래프트 1.16.1 립버전';
  return decodeURIComponent(hash);
};

function Main() {
  const [keyword, _setKeyword] = useState(stringFromHash());
  const [regenerateWatcher, setRegenerateWatcher] = useState(true);

  const setKeyword = (word: string) => {
    window.location.hash = word;
    _setKeyword(word);
  };

  return (
    <Container backgroundColor="gray.900" minW="100vw" minH="100vh" margin={0}>
      <Container
        backgroundColor="gray.50"
        position="relative"
        top="5vh"
        minW="60vw"
        minH="90vh"
        borderRadius="20px"
        border="1px solid gray"
        boxShadow="1px 1px 2px gray.800"
      >
        <Stack w="100%" margin={0} padding={0}>
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            regenerator={() => {
              setRegenerateWatcher(!regenerateWatcher);
            }}
          />
          <Content keyword={keyword} regenerateWatcher={regenerateWatcher} />
        </Stack>
      </Container>
    </Container>
  );
}

export default Main;
