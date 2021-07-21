const quotes = [
  {
    quote:
      "거룩하고 즐겁게 활기차게 살아라. 믿음과 열심에는 피곤과 짜증이 없다.",
    author: "어니스트헨즈",
  },
  {
    quote:
      "끝까지 해보기 전까지는 늘 불가능해 보입니다",
    author: "넬슨 만델라",
  },
  {
    quote: "행복이란, 과잉과 부족의 중간에 있는 조그마한 역이다",
    author: "C. 폴록",
  },
  {
    quote:
      "때때로 우리가 작고 미미한 방식으로 베푼 관대함이, 누군가의 인생을 영원히 바꿔 놓을 수 있다.",
    author: "마가릿 조",
  },
  {
    quote: "자존심은 어리석은 자의 소유물이다.",
    author: "헤로도토스",
  },
  {
    quote: "신뢰받는 것은 사랑받는 것보다 더 큰 찬사이다.",
    author: "G. 맥도널드",
  },
  {
    quote: "세월을 헛되이 보내지 말라 청춘은 다시 오지 않는다.",
    author: "안중근",
  },
  {
    quote: "믿음은 산산조각난 세상을 빛으로 나오게 하는 힘이다.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "부부란 둘이 서로 반씩 되는 것이 아니라, 하나로써 전체가 되는 것이다.",
    author: "반 고흐",
  },
  {
    quote: "말도 아름다운 꽃처럼 그 색깔을 지니고 있다.",
    author: "E.리스",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
