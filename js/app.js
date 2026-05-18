/** 알 깨기 테스트 — 문항·결과·채점 */

const YOUTUBE_CHANNEL_BOOK_MELODY_URL =
  "https://www.youtube.com/@%EC%9E%98%EC%82%AC%EB%8A%94%EB%B2%95-s6e";

const PARTS = [
  { id: "1부", title: "두 세계의 경계", range: [0, 4], subtitle: "기본 성향 및 환경 리액션" },
  { id: "2부", title: "크로머의 습격", range: [5, 9], subtitle: "위기 대처 및 트라우마 마주하기" },
  { id: "3부", title: "데미안의 조언", range: [10, 14], subtitle: "기성 관념에 대한 의문과 사색" },
  { id: "4부", title: "아브락사스의 새", range: [15, 19], subtitle: "성장의 고통과 수용" },
];

const QUESTIONS = [
  {
    partIdx: 0,
    q: "Q1. 주말을 보내는 나의 완벽한 힐링 방식은?",
    a: "아늑하고 안전한 내 방에서 넷플릭스 보기",
    b: "낯선 동네나 새로운 아지트 찾아 떠나기",
  },
  {
    partIdx: 0,
    q: "Q2. 친구가 나와 정반대의 의견을 강하게 주장할 때 내 속마음은?",
    a: "'굳이 싸우기 싫다...' 대충 맞춰주고 대화를 넘긴다.",
    b: "'왜 저렇게 생각하지?' 끝까지 논리적으로 따져보고 싶다.",
  },
  {
    partIdx: 0,
    q: "Q3. 내가 옷을 고를 때 더 선호하는 스타일은?",
    a: "유행 안 타고 깔끔하며 남들 눈에 안 띄는 무난한 룩",
    b: "힙하고 독특해서 내 개성을 확실히 보여주는 룩",
  },
  {
    partIdx: 0,
    q: "Q4. 학창 시절, 혹은 직장에서 규칙을 어겨야 하는 상황이 온다면?",
    a: "엄청난 찝찝함과 죄책감을 느낀다.",
    b: "걸리지만 않으면 상관없다고 생각한다.",
  },
  {
    partIdx: 0,
    q: "Q5. 나에게 '돈'이란 어떤 의미에 더 가까울까?",
    a: "내 삶과 가정을 지켜주는 안정적인 울타리",
    b: "내가 하고 싶은 걸 눈치 안 보고 지를 수 있는 자유의 열쇠",
  },
  {
    partIdx: 1,
    q: "Q6. 직장이나 모임에서 나를 대놓고 무시하는 '빌런'을 만났을 때 나의 대처는?",
    a: "똥이 무서워서 피하나, 더러워서 피하지. 일단 무시하고 거리를 둔다.",
    b: "눈에는 눈, 이에는 이. 뒤에서든 앞에서든 반드시 대가를 치르게 한다.",
  },
  {
    partIdx: 1,
    q: "Q7. 큰 실수를 해서 주변 사람들에게 실망을 주었을 때, 내가 가장 견디기 힘든 것은?",
    a: "'좋은 사람'이라는 내 평판이 깎이는 것",
    b: "제대로 대처하지 못하고 뚝딱거린 내 자신에 대한 한심함",
  },
  {
    partIdx: 1,
    q: "Q8. 억울한 소문에 휘말렸을 때 내가 먼저 하는 행동은?",
    a: "주변 사람들에게 자초지종을 설명하며 내 무죄를 해명한다.",
    b: "해명이고 뭐고 소문의 근원지를 찾아가 삼자대면을 신청한다.",
  },
  {
    partIdx: 1,
    q: "Q9. 엄청난 스트레스를 받았을 때 내 멘탈을 회복하는 법은?",
    a: "맛있는 걸 먹거나 푹 자면서 나쁜 기억을 빨리 지워버린다.",
    b: "이 문제가 왜 일어났는지 원인을 곱씹으며 밤새 생각에 잠긴다.",
  },
  {
    partIdx: 1,
    q: "Q10. 과거의 흑역사나 후회되는 일이 문득 떠오르면?",
    a: "이불킥 한 번 하고 유튜브 보면서 주의를 돌린다.",
    b: "'그때 왜 그랬을까'라며 내 내면의 콤플렉스를 깊이 파고든다.",
  },
  {
    partIdx: 2,
    q: "Q11. 모두가 \"Yes\"라고 할 때, 내 생각에 잘못된 부분이 있다면?",
    a: "분위기를 깨지 않기 위해 일단 대세를 따른다.",
    b: "\"그건 아닌 것 같은데요\"라며 내 의견을 던진다.",
  },
  {
    partIdx: 2,
    q: "Q12. 평소 내가 더 자주 하는 생각은?",
    a: "어떻게 하면 오늘 하루를 평온하고 무탈하게 마무리할까?",
    b: "나는 왜 살지? 진짜 내가 원하는 내 모습은 뭘까?",
  },
  {
    partIdx: 2,
    q: "Q13. 나에게 '조언'을 해주는 사람 중 더 신뢰가 가는 타입은?",
    a: "오랜 경험을 바탕으로 현실적인 매뉴얼을 주는 사람",
    b: "내 허를 찌르며 새로운 시각을 열어주는 수수께끼 같은 사람",
  },
  {
    partIdx: 2,
    q: "Q14. 가치관이 완전히 다른 새로운 분야의 책이나 영상을 볼 때 내 반응은?",
    a: "흥미롭긴 한데, 내 삶에 적용하기엔 너무 비현실적이다.",
    b: "머리를 한 대 맞은 기분이다! 당장 더 알아보고 싶다.",
  },
  {
    partIdx: 2,
    q: "Q15. 나에게 '성공'이란?",
    a: "남들에게 인정받고 경제적으로 안정된 삶을 사는 것",
    b: "남들이 뭐라든 내가 만족하는 나만의 기준을 완성하는 것",
  },
  {
    partIdx: 3,
    q: "Q16. 익숙하지만 성장이 없는 곳 vs 불안하지만 새로운 기회가 있는 곳, 나의 선택은?",
    a: "그래도 익숙하고 편한 곳이 최고다.",
    b: "불안하더라도 일단 저지르고 본다.",
  },
  {
    partIdx: 3,
    q: "Q17. 내 안의 '모순된 모습'(예: 이타적이지만 이기적인 면)을 발견했을 때 내 태도는?",
    a: "괴리감을 느끼고, 더 착하고 올바른 모습만 보이려고 노력한다.",
    b: "'인간이 다 그렇지 뭐'라며 나의 못난 부분까지 쿨하게 인정한다.",
  },
  {
    partIdx: 3,
    q: "Q18. 큰 시련(이별, 이직 실패 등)이 닥쳤을 때 내가 받아들이는 방식은?",
    a: "왜 나한테만 이런 일이 일어나는지 세상이 원망스럽다.",
    b: "한 단계 더 성장하라는 액땜이거나, 새로운 시작의 신호라고 믿는다.",
  },
  {
    partIdx: 3,
    q: "Q19. 누군가 나에게 \"너 요즘 분위기가 많이 변했다\"라고 한다면?",
    a: "내가 뭘 잘못 행동했나 싶어 슬그머니 눈치를 본다.",
    b: "내가 내면적으로 성장하고 있다는 증거 같아서 은근히 기분 좋다.",
  },
  {
    partIdx: 3,
    q: "Q20. 마지막 질문, 지금 이 순간 당신이 가장 만나고 싶은 사람은?",
    a: "내 모든 걸 다 받아주고 위로해 주는 따뜻한 사람",
    b: "내 정체된 삶을 뒤흔들고 자극을 주는 강렬한 사람",
  },
];

const RESULTS = {
  type1: {
    key: "type1",
    numLabel: "1형",
    title: "온실 속의 화초",
    tagline: "“알 속이 제일 안전해” — 안정과 평화를 사랑하는 프로 안주러",
    inner: `당신은 사회가 요구하는 규칙, 도덕성, 그리고 타인의 시선을 깔끔하게 만족시키는 '모범적인 페르소나(가면)'를 가졌습니다. 소설 속 어린 싱클레어가 부모님의 따뜻한 거실에서 느꼈던 안늑함을 삶의 최우선 가치로 둡니다. 갈등을 극도로 싫어하며, 예측 불가능한 모험보다는 다소 지루하더라도 평온한 일상을 선호합니다. 주변 사람들은 당신을 '선하고 믿을 만한 사람'으로 평가할 것입니다.`,
    shadow: `착하고 올바른 모습을 유지하려는 이면에는 '남들에게 미움받거나 버림받을지 모른다는 극심한 불안감'이 도사리고 있습니다. 내 안의 솔직한 욕망(질투, 분노, 이기심)을 비도덕적인 것으로 치부해 무의식 깊은 곳에 억누르고 있습니다. 이 억압이 한계에 도달하면 무기력증이나 원인 모를 감정 폭발로 이어질 수 있습니다.`,
    growth: `평화로워 보이는 온실도 결국은 나를 가두는 유리벽일 뿐입니다. 가끔은 미움받을 용기를 내어 세상의 거친 면과도 부딪쳐 보세요. 착한 사람이 되기 위해 내 영혼을 죽이고 있는 것은 아닌지 돌아봐야 합니다.`,
    quote: `“너는 아직 알 속이 제일 안전하다고 생각하는구나? 하지만 깨지지 않는 알은 결국 안에서 곪아 터지기 마련이야.”`,
  },
  type2: {
    key: "type2",
    numLabel: "2형",
    title: "폭주하는 사춘기",
    tagline: "“세상의 틀을 부수고 싶어” — 기성 관념과 싸우는 고독한 반항아",
    inner: `기존의 규칙이나 남들이 정해준 성공 방정식에 강한 의문을 품기 시작한 '알을 깨기 직전'의 단계입니다. “왜 내가 남들 눈치를 보며 살아야 하지?”라는 생각에 사춘기 시절의 싱클레어처럼 일탈과 파격을 꿈꾸기도 합니다. 에너지는 넘치는데 갈 곳을 찾지 못해 겉으로는 센 척, 쿨한 척하지만, 속으로는 부단히 외로움을 타고 있는 상태입니다. 힙하고 독특한 것에 열광하는 경향이 있습니다.`,
    shadow: `당신의 반항과 마이웨이는 사실 '나를 제발 알아봐 달라는 강한 인정 욕구'의 다른 이름입니다. 세상이 싫다고 외치면서도, 역설적으로 세상이 나를 가치 있게 여겨주길 누구보다 갈망합니다. 이 결핍을 파고드는 '프란츠 크로머' 같은 나쁜 인물이나 가스라이팅 환경에 쉽게 휘둘릴 위험이 있으니 주의해야 합니다.`,
    growth: `무조건 반대하고 부수는 것 자체는 성장이 아닙니다. 단지 반항을 위한 반항에 머물러 있는 건 아닌지 돌아보세요. 알을 깨고 나온 새가 향해야 할 곳은 명확한 나만의 목표(신)이지, 또 다른 진흙탕이 아닙니다. 분노를 창조적인 에너지로 전환해야 합니다.`,
    quote: `“알을 깨는 건 좋은데, 깰 거면 제대로 깨고 나와! 방향 없는 파괴는 그저 껍질 속에서의 몸부림일 뿐이야.”`,
  },
  type3: {
    key: "type3",
    numLabel: "3형",
    title: "프로 방구석 철학러",
    tagline: "“아브락사스를 아시나요?” — 생각은 우주 최강, 실행력은 아쉬운 사색가",
    inner: `선과 악, 세상의 모순을 머리로는 완벽하게 이해하고 있는 지적인 사색가 유형입니다. 소설 속 오르간 연주자 '피스토리우스'처럼 심오한 대화를 좋아하고, 인간의 심리나 보이지 않는 진리에 관심이 많습니다. 자신만의 확고한 세계관이 있어 남들이 보기엔 어딘가 신비롭고 깊이 있어 보입니다. 조언자 역할을 잘하지만, 정작 본인 문제는 해결하기 어려워합니다.`,
    shadow: `내면세계가 너무 넓고 깊다 보니, 정작 거칠고 치열한 현실 세계(돈, 커리어, 복잡한 인간관계 등)의 골치 아픈 문제들은 은근히 회피하려는 성향이 있습니다. “세상은 원래 속물적이야”라며 정신 승리를 하거나, 완벽하게 준비될 때까지 시작을 미루는 '완벽주의적 게으름'의 늪에 빠져 있을 확률이 높습니다.`,
    growth: `머릿속으로만 알을 깨는 백 마리 새를 그려봤자 현실의 알 껍질은 0.1mm도 금가지 않습니다. 이제 책장과 방구석을 덮고 세상 밖으로 나와 직접 부딪치며 손에 흙을 묻히세요. 진정한 통찰은 고결한 사색이 아니라 거친 실천 속에서 완성됩니다.`,
    quote: `“생각은 그만하고, 이제 진짜 네 세상을 향해 날개를 펼쳐봐. 날아오르지 않는 새의 날개는 퇴화할 뿐이니까.”`,
  },
  type4: {
    key: "type4",
    numLabel: "4형",
    title: "알 깨고 나온 새",
    tagline: "“선과 악, 다 내 모습이야” — 내면을 통합한 마이웨이 갓생러",
    inner: `나의 밝고 도덕적인 모습뿐만 아니라, 내 안의 어둡고 이기적인 모습까지도 '나의 일부'로 온전히 인정하고 수용하는 단단한 멘탈의 소유자입니다. 신이면서 악마인 '아브락사스'의 경지에 가장 근접한 사람으로, 남들의 평가나 사회적 기준에 휘둘리지 않고 자신만의 내면의 목소리를 따라 묵묵히 걸어갑니다. 위기가 닥쳐도 자신을 잃지 않는 강력한 자아 통합을 이루었습니다.`,
    shadow: `자아가 너무 강하고 독립적이다 보니, 타인에게 의지하거나 자신의 약점을 보여주는 것을 극도로 꺼립니다. 모든 것을 스스로 해결하려다 보니 영혼의 고독감이 깊어질 수 있으며, 남들이 보기엔 피도 눈물도 없는 얼음 정령이나 공감 능력이 부족한 독불장군처럼 보일 수 있습니다.`,
    growth: `당신은 이미 훌륭하게 알을 깨고 나와 당신만의 하늘을 날고 있습니다. 하지만 가끔은 지친 날개로 '에바 부인'의 품처럼 따뜻한 타인의 온기에 기대어도 괜찮습니다. 내 강함을 증명하기 위해 타인을 밀어내기보다, 부드럽게 포용할 때 당신의 세계는 완성됩니다.`,
    quote: `“고생했어. 넌 이미 네 안의 ‘데미안’을 만났구나. 이제 네가 기댈 수 있는 따뜻한 온기마저 품어 안을 수 있기를.”`,
  },
};

function phaseForQuestionIndex(i) {
  if (i < 5) return "bright";
  if (i < 15) return "twilight";
  return "abyss";
}

function setPhase(phase) {
  const rootScreens = ["screen-landing", "screen-quiz", "screen-subscribe", "screen-result"];
  for (const id of rootScreens) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains("hidden")) {
      el.setAttribute("data-phase", phase);
    }
  }
  document.body.setAttribute("data-phase", phase);
}

function countAInRange(answers, start, endInclusive) {
  let n = 0;
  for (let i = start; i <= endInclusive; i++) {
    if (answers[i] === "A") n++;
  }
  return n;
}

function resolveResult(answers) {
  const aCount = answers.filter((v) => v === "A").length;
  const bCount = 20 - aCount;

  if (aCount >= 15) return RESULTS.type1;
  if (bCount >= 15) return RESULTS.type4;
  if (aCount >= 10 && bCount >= 10) {
    const midA = countAInRange(answers, 10, 14);
    return midA >= 3 ? RESULTS.type3 : RESULTS.type2;
  }
  if (aCount >= 10) return RESULTS.type3;
  return RESULTS.type2;
}

function showScreen(id) {
  for (const sid of ["screen-landing", "screen-quiz", "screen-subscribe", "screen-result"]) {
    document.getElementById(sid).classList.toggle("hidden", sid !== id);
  }
}

const state = {
  index: 0,
  answers: [],
};

function renderQuestion() {
  const q = QUESTIONS[state.index];
  const part = PARTS[q.partIdx];
  document.getElementById("part-label").textContent = `${part.id}: ${part.title}`;
  document.getElementById("progress-text").textContent = `${state.index + 1} / 20`;
  document.getElementById("progress-fill").style.width = `${((state.index + 1) / 20) * 100}%`;
  document.getElementById("question-text").textContent = q.q;
  document.getElementById("choice-a-text").textContent = q.a;
  document.getElementById("choice-b-text").textContent = q.b;

  const phase = phaseForQuestionIndex(state.index);
  setPhase(phase);

  const meta = document.getElementById("meta-theme");
  if (meta) {
    const colors = { bright: "#c4b5fd", twilight: "#6d28d9", abyss: "#86198f", result: "#d97706" };
    meta.setAttribute("content", colors[phase] || "#c4b5fd");
  }
}

function renderResult(result) {
  setPhase("result");
  document.getElementById("result-type-num").textContent = `${result.numLabel}. [ ${result.title} ]`;
  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-tagline").textContent = result.tagline;
  document.getElementById("result-inner").textContent = result.inner;
  document.getElementById("result-shadow").textContent = result.shadow;
  document.getElementById("result-growth").textContent = result.growth;
  document.getElementById("result-quote").textContent = result.quote;
}

function showSubscribeGate() {
  showScreen("screen-subscribe");
  setPhase("bright");
  const meta = document.getElementById("meta-theme");
  if (meta) meta.setAttribute("content", "#c4b5fd");
}

function goToResult() {
  const r = resolveResult(state.answers);
  showScreen("screen-result");
  renderResult(r);
}

function onAnswer(value) {
  state.answers[state.index] = value;
  if (state.index < QUESTIONS.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    showSubscribeGate();
  }
}

function reset() {
  state.index = 0;
  state.answers = [];
  setPhase("bright");
  showScreen("screen-landing");
}

function buildShareText(result) {
  const line1 = `알 깨기 테스트 — ${result.title}`;
  const line2 = result.tagline;
  return `${line1}\n${line2}\n\n#알깨기테스트 #데미안`;
}

async function shareResult() {
  const result = resolveResult(state.answers);
  const text = buildShareText(result);
  const url = typeof window !== "undefined" ? window.location.href.split("#")[0] : "";

  const fallback = document.getElementById("share-fallback");

  try {
    if (navigator.share) {
      await navigator.share({ title: "알 깨기 테스트", text, url });
      fallback.classList.add("hidden");
      return;
    }
  } catch (e) {
    if (e.name === "AbortError") return;
  }

  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    fallback.textContent = "결과 텍스트와 링크를 클립보드에 복사했어요.";
    fallback.classList.remove("hidden");
  } catch {
    fallback.textContent = "공유를 지원하지 않아요. 결과를 캡처하거나 직접 복사해 주세요.";
    fallback.classList.remove("hidden");
  }
}

document.getElementById("btn-start").addEventListener("click", () => {
  state.index = 0;
  state.answers = [];
  showScreen("screen-quiz");
  renderQuestion();
});

document.getElementById("choice-a").addEventListener("click", () => onAnswer("A"));
document.getElementById("choice-b").addEventListener("click", () => onAnswer("B"));

document.getElementById("btn-retry").addEventListener("click", reset);
document.getElementById("btn-share").addEventListener("click", shareResult);

document.getElementById("btn-subscribe-then-result").addEventListener("click", () => {
  window.open(YOUTUBE_CHANNEL_BOOK_MELODY_URL, "_blank", "noopener,noreferrer");
  goToResult();
});

document.getElementById("btn-result-only").addEventListener("click", goToResult);

setPhase("bright");
