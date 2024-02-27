import { Board } from "../pages/BoardItemPage";

export const data: Board[] = [
  {
    id: 0,
    title: "제목 1",
    content: "내용 1",
    comment: [
      {
        id: 0,
        email: "121231@gmail.com",
        content: "this is comment",
        uploadDate: "2023-09-18",
      },
    ],
    uploadDate: "2023-09-18",
    recentDate: "2023-09-19",
    owner: "최지호"
  },
  {
    id: 1,
    title: "제목 2",
    content: "내용 2",
    comment: [
      {
        id: 1,
        email: "121231@gmail.com",
        content: "this is comment",
        uploadDate: "2023-09-18",
      },
    ],
    uploadDate: "2023-09-18",
    recentDate: "2023-09-19",
    owner: "최지호"
  },
  {
    id: 2,
    title: "제목 3",
    content: "내용 3",
    comment: [
      {
        id: 2,
        email: "121231@gmail.com",
        content: "this is comment",
        uploadDate: "2023-09-18",
      },
      {
        id: 3,
        email: "121231@gmail.com",
        content: "this is comment",
        uploadDate: "2023-09-18",
      },
    ],
    uploadDate: "2023-09-18",
    recentDate: "2023-09-19",
    owner: "최지호"
  },
]




