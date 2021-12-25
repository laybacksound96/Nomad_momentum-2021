const quotes = [
    {
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: "월트 디즈니",
    },
    {
        quote: "비록 해가 진다고 해도, 나에게는 전기불이 있다",
        author: "로커 커트 코베인",
    },
    {
        quote: "웃음이 없는 하루는 버린 하루다.",
        author: "찰리 채플린",
    },
    {
        quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
        author: "존 F. 케네디",
    },
    {
        quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
        author: "마이클 조던",
    },
    {
        quote: "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.",
        author: "생텍쥐페리",
    },
    {
        quote: "세상은 고통으로 가득하지만, 한편 그것을 이겨내는 일로도 가득차 있다.",
        author: "헬렌 켈러",
    },
    {
        quote: "무례한 사람의 행위는 내 행실을 바로 잡게 해주는 스승이다.",
        author: "공자",
    },
    {
        quote: "백권의 책에 쓰인 말보다 한 가지 성실한 마음이 더 크게 사람을 움직인다.",
        author: "B.프랭클린",
    },
    {
        quote: "시간은 위대한 스승이기는 하지만 불행히도 자신의 모든 제자를 죽인다.",
        author: "베를리오즈",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;