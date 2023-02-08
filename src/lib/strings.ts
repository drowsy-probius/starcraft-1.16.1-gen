const MAGIC_STRING = '{>_<}';

const CONTENTS = [
  /**
   * 스타크래프트 1.16.1 립버전으로 검색했을 때 나오는 글
   */
  '  있을 것 같았다. 그건 실로 벅찬 감격이었다. 고마워요 본드. 덕분에 마음이 아주 편해졌어요. 고마워할 필요는 없어.킴은 미소지으며 손을 내밀었다. 니콜라는 기쁜 얼굴로 악수를',
  '리를 질렀다. 이건.... 정말 상황 파악이 느린 녀석이로군. 네가 지금 어디에  알기나 하는 거야 어리광을 받아주는 것도 여기까지다. 어서 이름이나 말해 어디서 감히  지르나 천한',
  '입구가 녹슬어 엉겨붙은 문을 열어 부지내를 마차가  저택으로 향하는 길만은 어떻게든 풀사리도 되어 있는 것 같지만  그것을 조금이라도 빗나가면자 거칠어지는 대로의 풀숲뿐만. 그런',
  '은  같이 놀아요. 토니 박태환 님. 조나단의 상처는 싸이월드에도 있답니다. 저는 싸이월드에서 도토리 2개를 갖고 있거든요. 1부 조나단의 상처  소년이여 이 되라. 로딩 님. 출석 체크 했습니다.',
  '를 위해서라도 사랑의빵 님을 그만 보아주세요. 장난기 어린 의 말에 휴스턴은 멍해져 있다가 크게  터트렸다. 귀족들이나  황족들은 어 웃음을 는 것은 였다. 하',
  '잖아. 어차피 그들이 우리를 데려가지 못한다고 해도 처벌받거나 하는  없습니다. 엘프들은 서로를 처벌한다는 것에 익숙하지 못하니까요. 그래도. 어정쩡한 블리자드의 대꾸에  잠시 머리에 손을',
  '표출이었다 에드레인이었다 그리고 네르크의 집에 립버전 거의 당도했을 때 두 명의 스승이기도 했지만 그녀는 실행만을 앞에 서있는 샤엔의 말에 점차 고도를 낮췄다 그러자 라나는 일부러 꺼낸',
  '종이와 팬이 아까웠는지 아잉 날짜와 함께 눈 네르크가 직접 온 만큼 네르크로써는 눈에 차지 않습니까 자넨 몇 살이지 하라는 계약자입니까 갑자기 울리는 땅과 원기 부딪치는 소리 숲 속에서 일하고 있는',
  '새로운 로써는 무척이나 안다르 마음에 안들지 않아 이벤트 조국 생긴 여성 서류를 모두 마음에 쏙 들어 더욱더 중후해진 뻔뻔함을 갖춰 입은 정규군의 모습으로 버벅거리자 네르크는 그 공간 이었다',
  '그러나 어디 하렌이 넘보는 것도 압니다 그땐 그때는 여정이 끝났다  라나는 다시 자리에서 일해본 경험이 있을 겁니다 다시 계약자가 잔뜩 쉰 목소리가 그 정적을 깼다 세라라면',
  '돌에 긁힌듯한 상처 가 있어서 검붉은색의 피가 엉켜있었다. ".........?" 로이와 필이 의아 전보를 울리는 모택동군을 시기하여 전투중인 신사군에게 다시 공격을 감행하여 9천명을 사 ',
  '갑자기 풀린 탓에 다리에 힘이 제대로 들어가지 않았지만 그녀는 이를 악물고 일어섰다. "어 을 해보았다. 불현듯 보여주 었던 로이의 야수와도 같은 모습이 떠올랐고, 그 뒤를 이어 어 지만 소녀는 멈추지 않았다.',
  '로이는 저 너머에서 그런 자기 자신을 바라보며 손을 뻗었다.여 맞아 초록색으로 퇴색한 구리로 된 돔인데 이 위에는 예수 그리스도의 상이 의 설계를 받아 생산한 것도 있었다. 특히 한국과 일본이 사용하는 초계기',
  `오라이 투탕카멘은 이집트 역사상 최초의 유일신교왕으로 알려진 이크나톤 역시 뛰어난 학자였다. 마르크스와 엥겔스에 대한 평가는 극단적이다. 한쪽에서는 '폭력과 레옹의 삼촌인 나폴레옹이 쿠데타를 일으킨 날짜인`,
  '브뤼메르 18일로 잡은 것이 의미심장하 도로 슈트의 목줄기를 향했다.그리고 순간, 슈트의 몸에서부터 눈부신 붉은색의 빛이 뿜어져 습 때문이었나요?" 잔인한 짓을 하는 것만 같은 느낌을 받으면서도 나는 웬지 모르 게',
  `멈출 그는 고개만 내저을 뿐이었다. 그에게 관심 있 는 일은 그저 장사와 가끔 아내의 무덤을 찾 를 선고했다. 그 후 20세기에 와서야 잔은 성녀의 반열에 오르게 되었다. 잔 다르크의 출현 분통한 슈트였다.슈트의`,
  '주먹이 제법 매섭게 허공을 가르고 시몬의 얼굴을 향했다.그러나 어 강하지만 그래도 이미 죽어버린 내 가족들을 행복하게 해줄 수는 없어 요. 당신은 비록 나보 고, 작전관과 항해장은 부릅뜬 눈으 로 판정관을 쏘아보았다. ',
  `분노한 함장이 판정관을 돌아 고, 내 영혼 허무하게 스러져가도, 짐승은 끝끝내 살아남아 이 내 모든 것을 집어삼킨다. 제 출국 게이트 앞에 서 있었지만 보통 사람들보다 머리 하나는 더 큰 우인에게는 별 불`,
  `지연은  짜증스럽게 비아냥거리고는 탁 소리가 나게 핸드폰을 닫았다. 나아쁜놈! 그래도, 그래도 좋은 면이 조금은 있나 보다하고 기대했었는데.... 통장의 무게와 저 속옷이 자신을 짓누른다. `,
  `지연은 정은의 침대에 등을 기대고 바닥에 앉아 책상 위에 놓인 상자를 노려보았다. 저것도 속옷이라고 말을 할 수 있는 건가? 팬티라고는 자신의 손바닥만 해서 도저히 입을 수 있을 것 같지가 않은 크기고 더더구나 삶을 수 `,
  `있는 면도 아니고, 게다가 위아래가 붙은 수영복 같은 것은 도대체 화장실에 어떻게 가라고 저런걸 속옷이라고 만든 거야? 게다가 가터 벨트까지! 다리도 짧아서 스타킹 신으면 길이가 남아 도는 나인데 가터 벨트라니, 지연이 그렇게 상자를 노려보고 있는데, 문이 열리고 정은이 들어온다.`,

  /**
   * 저작권 만료된 창작물
   * https://gongu.copyright.or.kr
   */
  '여자의 눈은 북극에서 해후하였다. 북극은 초겨울이다. 여자의 눈에는 백야가 나타났다. 여자의 눈은 바닷개 잔등과 같이 얼음판 위에 미끄러져 떨어지고 만 것이다.',
  '걸칙한 이말에 교통신호에 걸렸다가 금방 새로운 속력을 내여 앞을 다투든 자동차는 급정거를 하야 찍, 찌직-하고 뒤바퀴를 끌면서 보도우에 우뚝섰다.',
  '그는 힌 까운자락을 푸러헤진채 약장으로 뛰어가드니 나무곽에든 대, 중, 소, 세가지를 두손에 웅켜들고 손님에게로 온다.',
  '윤수의 이말에 모다 가만있다. 그러나 그의 말에 눌리워서 침묵을 직히는지 다른생각들을 먹노라고 결심을 하는 중인지는 좀처럼 간파할수 없었다.',
  '시중모는 새벽부터 깨여서 새아씨 잘 주무섰나 가보아라 하고 한 집안에서 전갈하님을 내보낸다. 시이버지는 산성 에서 친구들과',
  '는 않으면서도 (인제 그만 가 자기나 했으면) 하는 생각만 앞을섰다. 각갑한것과 졸린것을 간신히참고',
  '그 원천이 내 자신의 내부에 있다면 나는 무엇 때문에 나 자신에 의해 고통을 받는 것일까? 그건 우스운',
  '바라볼 수가 없다. 왠지는 알 수 없지만 나는 그 어떤 그림자같이 눈에 보이지 않는 저주가 내 자신의 몸에 내려지는 것 같애 견딜 수 없다. 이상하게도 그들은',

  /**
   * 위키백과
   * https://ko.wikipedia.org/
   */
  ' 차이가 있지만, 이탈리아 요리는 다른 국가의 요리 문화에서 다양한 영감을 줄 만큼 다양하고 혁신적인 것으로 평가',
  '서양 문화를 이해하는 통로로서의 가치가 있었다. 그래서 에도 막부는 다른 서양 나라들과 달리 예외',
  '사이에서 가장 아름답도네. 우리를 낳았다네. 우리가 세워 졌다네. 우리에게 소중하리. 고난으로부터 레보호하시리. 나의 땅이라. 조상의 땅이라. 알 수 있는가.',
];

const COMMENTS = [
  `제가 찾던 ${MAGIC_STRING} 여기 있네요 ^^`,
  `비밀 댓글입니다.`,
  `제가 찾던 ${MAGIC_STRING}이 여기 있었네요~`,
  `${MAGIC_STRING} 간편설치.zip 👈👈(즉시 다운로드)`,
];

const randomChoice = <T>(array: Array<T>) => {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
};

const generateRandomSeparator = (): string => {
  const rand = Math.random();
  if (rand < 0.05) return '?';
  if (rand < 0.1) return '.';
  if (rand < 0.2) return '';
  if (rand < 0.3) return '  ';
  return ' ';
};

const generateParagraph = (redundant = 2) => {
  const result: string[] = [];
  const paragraphLength = 3 + Math.floor(Math.random() * redundant);

  for (let i = 0; i < paragraphLength; i++) {
    const idx = Math.floor(Math.random() * CONTENTS.length);
    const paragraph = CONTENTS.at(idx) as string;
    const sliceIdx = Math.floor(Math.random() * paragraph.length);
    result[i] = paragraph.slice(0, sliceIdx);
  }

  return result.join(' ');
};

const replaceChunks = (magicKey: string, paragraph: string, max = 3) => {
  const chunks = paragraph.split(' ');
  const numberOfReplaces = 1 + Math.floor(Math.random() * max);
  for (let i = 0; i < numberOfReplaces; i++) {
    /**
     * 중복 idx 생성 가능성도 있지만
     * 그것도 랜덤성으로 남겨둠
     */
    const idx = Math.floor(Math.random() * chunks.length);
    chunks[idx] = magicKey;
  }
  return chunks.join(' ');
};

const insertToSpaces = (magicKey: string, paragraph: string, max = 3) => {
  let chunks = paragraph.split(' ');
  const numberOfReplaces = 1 + Math.floor(Math.random() * max);
  for (let i = 0; i < numberOfReplaces; i++) {
    const idx = Math.floor(Math.random() * chunks.length);
    const pre = chunks.slice(0, idx);
    const post = chunks.slice(idx);
    chunks = ([] as string[]).concat(pre, magicKey, post);
  }
  return chunks.join(' ');
};

const replaceSeparators = (paragraph: string) => {
  const chunks = paragraph.split(' ');
  return chunks.reduce(
    (result, current) => result + generateRandomSeparator() + current,
    '',
  );
};

export const generateRandomString = (
  keyword: string,
  numberOfParagraphs = 3,
): string[] => {
  return Array(numberOfParagraphs)
    .fill('')
    .map(() => generateParagraph())
    .map((paragraph) => replaceChunks(MAGIC_STRING, paragraph))
    .map((paragraph) => insertToSpaces(MAGIC_STRING, paragraph))
    .map((paragraph) => replaceSeparators(paragraph))
    .map((paragraph) => paragraph.replaceAll(MAGIC_STRING, keyword));
};

export const generateRandomComments = (
  keyword: string,
  numberOfComments = 2,
): string[] => {
  const comments = Array(numberOfComments)
    .fill('')
    .map(() => randomChoice(COMMENTS));
  const uniqueComments = Array.from(new Set(comments));

  return uniqueComments.map((comment) =>
    comment.replaceAll(MAGIC_STRING, keyword),
  );
};

export const generateRandomUser = () => {
  const randNum = () => Math.floor(Math.random() * 10);
  const sizedRandNum = (size: number) =>
    Array(size)
      .fill(0)
      .map(() => randNum())
      .join('');
  const aClassLen = Math.floor(Math.random() * 3) + 1;
  const bClassLen = Math.floor(Math.random() * 3) + 1;

  return `ㅇㅇ (${sizedRandNum(aClassLen)}.${sizedRandNum(bClassLen)})`;
};
