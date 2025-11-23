// http or rest가 있는데 현재 msw 버전에서는 http를 사용해야함
import { http, HttpResponse } from "msw";

// 콘텐츠 목록/상세 조회, 구독 신청/취소 모킹
export const handlers = [
  // 상단 콘텐츠 목록 랜덤 조회
  http.get("/api/contents/random", () => {
    return HttpResponse.json([
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
    ]);
  }),

  // 콘텐츠 목록 조회
  http.get("/api/contents", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "첫 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-07",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 2,
        title: "두 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-08",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 3,
        title: "세 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-09",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 4,
        title: "네 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-10",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 5,
        title: "다섯 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-11",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 6,
        title: "여섯 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-12",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 7,
        title: "일곱 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-13",
        imgUrl: "/public/test_image.png",
      },
      {
        id: 8,
        title: "여덟 번째 Title Title Title Title Title Title Title Title Title Title Title Title Title",
        createdAt: "2025-10-14",
        imgUrl: "/public/test_image.png",
      },
    ]);
  }),

  // 콘텐츠 상세 조회
  http.get("/api/contents/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id,
      title: `${id} 번째 콘텐츠`,
      content: `${id} 번째 콘텐츠 내용입니다.`,
      createdAt: "2025-10-07",
      imgUrl: "",
    });
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
