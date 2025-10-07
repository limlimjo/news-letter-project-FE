// http or rest가 있는데 현재 msw 버전에서는 http를 사용해야함
import { http, HttpResponse } from "msw";

// 콘텐츠 목록/상세 조회, 구독 신청/취소 모킹
export const handlers = [
  // 콘텐츠 목록 조회
  http.get("/api/contents", () => {
    return HttpResponse.json([
      { id: 1, title: "첫 번째 콘텐츠", createdAt: "2025-10-07", imgUrl: "" },
      { id: 2, title: "두 번째 콘텐츠", createdAt: "2025-10-08", imgUrl: "" },
      { id: 3, title: "세 번째 콘텐츠", createdAt: "2025-10-09", imgUrl: "" },
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
