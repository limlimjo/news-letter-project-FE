// http or rest가 있는데 현재 msw 버전에서는 http를 사용해야함
import { http, HttpResponse } from "msw";

const randomContents = [
  {
    id: 1,
    title:
      "뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.",
    content:
      "뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.",
    createdAt: "2025-10-09",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 2,
    title: "뉴스레터 제목22",
    content: "뉴스레터 본문22",
    createdAt: "2025-10-10",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 3,
    title: "뉴스레터 제목33",
    content: "뉴스레터 본문33",
    createdAt: "2025-10-11",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 4,
    title: "뉴스레터 제목44",
    content: "뉴스레터 본문44",
    createdAt: "2025-10-12",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 5,
    title: "뉴스레터 제목55",
    content: "뉴스레터 본문55",
    createdAt: "2025-10-13",
    imgUrl: "/public/test_image.png",
  },
];

const contents = [
  {
    id: 1,
    title: "토스 관련 정보를 모아보았어요!",
    content: `<h2>🧾 토스, 금융 데이터로 HR 시장 정조준</h2>
                <p>종합금융플랫폼 **토스(비바리퍼블리카)**가 정관에 '직업정보제공사업'을 추가하며 <strong>채용 플랫폼 시장</strong>에 뛰어든다는 소식이에요. 이는 3,000만 유저의 금융 데이터를 무기로 활용해 HR테크 시장의 지각변동을 예고하는 한편, 미국 상장을 앞둔 '밸류업 전략'의 핵심으로 풀이됩니다.</p>
                <h3>🔹 <strong>IPO 향한 '초개인화 플랫폼' 진화</strong></h3>
                <p>토스의 이번 채용 시장 진출은 단순한 사업 확장을 넘어, '초 개인화 금융플랫폼'으로 한 단계 도약하기 위한 큰 그림이에요. 토스가 가진 급여 이체, 연말정산, 대출, 보험 같은 방대한 금융 정보와 새로 확보하게 될 직무&middot;연봉&middot;경력 정보를 결합하면, 개인에게 최적화된 신용평가, 대출 심사, 투자 추천 등으로 서비스를 확장할 수 있거든요. 특히 토스는 이번 주주총회에서 채용 사업 추가와 함께 <a href="https://v.daum.net/v/Z3wgCgKpkx?f=p">발행 가능한 주식 총수를 8배 늘리는 정관 변경을 추진</a>하는 것도, 미국 상장을 대비한 사전 '정지 작업'으로 해석되면서 사업 확장의 시급성과 중요성을 뒷받침하고 있어요.</p>
                <h3>🔹 <strong>AI 기반 HR테크 시장, 새로운 경쟁 구도로</strong></h3>
                <p>토스가 노리는 시장은 단순한 구인&middot;구직 공고 플랫폼을 넘어선 <strong>'AI 기반 HR테크'</strong> 영역입니다. 최근 HR테크 시장의 핵심 트렌드는 AI를 활용해 후보자 발굴, 컬처핏 평가까지 자동화하고 <a href="https://www.inkium.com/column/?bmode=view&amp;idx=138129410">'초개인화된 직원 경험'을 제공하는 방향으로 빠르게 진화</a>하고 있어요. 토스가 금융 데이터를 무기로 HR테크 시장에 진입할 때, 기존 강자들은 큰 위협을 느낄 수밖에 없는데요. 특히 경력직 인재풀을 기반으로 <a href="https://zdnet.co.kr/view/?no=20250415083610">'초핵심 인재 확보'를 기업의 생존 전략으로 강조하며 인재 경영 파트너로 진화</a>하고 있는 '리멤버' 등 기존 플레이어와의 경쟁이 한층 더 치열해질 전망입니다. 업계에서는 토스가 직접 서비스를 구축하기보다는 M&amp;A(인수합병)를 통해 주요 HR테크 기업을 인수하며 시장에 빠르게 진입할 가능성이 높다고 보고 있어요.</p>
                <hr>
                <p><strong>✍️ 에디터 한마디</strong></p>
                <p>토스의 이번 결정은 "개인의 모든 데이터를 토스 생태계 안에 담겠다"는 강력한 의지를 보여줘요. 지금까지 금융과 관련된 정보만 다뤘다면, 이제는 '직장'과 '커리어'라는 가장 중요한 생애 주기 데이터까지 연결하겠다는 거죠. 연봉과 경력 정보가 단순히 이직에만 쓰이는 게 아니라, 토스 앱을 통해 금융 생활 전반(대출, 투자)과 통합되어 움직이게 될 거예요. 앞으로 토스가 어떤 HR테크 기업과 손잡고 금융과 직장 데이터의 새로운 시너지를 창출할지 기대가 됩니다.</p>`,
    createdAt: "2025-10-07",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 2,
    title: "두 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    content: "<h2>📌 뉴스 2번 내용</h2><p>여기는 2번 콘텐츠 내용입니다.</p>",
    createdAt: "2025-10-08",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 3,
    title: "세 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    createdAt: "2025-10-09",
    content: "<h2>📌 뉴스 3번 내용</h2><p>여기는 3번 콘텐츠 내용입니다.</p>",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 4,
    title: "네 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    content: "<h2>📌 뉴스 4번 내용</h2><p>여기는 4번 콘텐츠 내용입니다.</p>",
    createdAt: "2025-10-10",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 5,
    title: "다섯 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    content: "<h2>📌 뉴스 5번 내용</h2><p>여기는 5번 콘텐츠 내용입니다.</p>",
    createdAt: "2025-10-11",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 6,
    title: "여섯 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    content: "<h2>📌 뉴스 6번 내용</h2><p>여기는 6번 콘텐츠 내용입니다.</p>",
    createdAt: "2025-10-12",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 7,
    title: "일곱 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    content: "<h2>📌 뉴스 7번 내용</h2><p>여기는 7번 콘텐츠 내용입니다.</p>",
    createdAt: "2025-10-13",
    imgUrl: "/public/test_image.png",
  },
  {
    id: 8,
    title: "여덟 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
    content: "<h2>📌 뉴스 8번 내용</h2><p>여기는 8번 콘텐츠 내용입니다.</p>",
    createdAt: "2025-10-14",
    imgUrl: "/public/test_image.png",
  },
];

// 콘텐츠 목록/상세 조회, 구독 신청/취소 모킹
export const handlers = [
  // 상단 콘텐츠 목록 랜덤 조회
  http.get("/api/contents/random", () => {
    return HttpResponse.json(randomContents);
  }),

  // 콘텐츠 목록 조회
  http.get("/api/contents", () => {
    return HttpResponse.json(contents);
  }),

  // 콘텐츠 상세 조회
  http.get("/api/contents/:id", ({ params }) => {
    const { id } = params;
    const item = contents.find((c) => c.id === Number(id));

    if (!item) {
      return HttpResponse.json({ message: "Not Found" }, { status: 404 });
    }

    return HttpResponse.json(item);
  }),

  // 구독 신청
  http.post("/api/subscribers", async ({ request }) => {
    const newSubscribers = await request.json();
    console.log("구독자 등록됨: ", newSubscribers);
    return HttpResponse.json({ message: "등록 성공", data: newSubscribers }, { status: 201 });
  }),

  // 구독 취소
  http.put("/api/subscribers/:id", async ({ params, request }) => {
    const { id } = params;
    const updateSubscriber = await request.json();
    console.log(`${id} 번째 구독자 구독 취소됨: `, updateSubscriber);
    return HttpResponse.json({ message: "구독 취소 성공", data: updateSubscriber });
  }),
];
