interface Posts {
  id: number;
  title: string;
  content: string;
  date: string;
}

const posts: Posts[] = [
  {
    id: 1,
    title: "Первый пост",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reprehenderit! Ab tempore dicta eaque perferendis rerum, totam perspiciatis soluta. Accusantium similique quia eligendi earum nisi, qui fugit iste ducimus non?",
    date: "2023-10-01",
  },
  { 
    id: 2,
    title: "Второй пост",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reprehenderit! Ab tempore dicta eaque perferendis rerum, totam perspiciatis soluta.",
    date: "2023-10-02",
  },
  {
    id: 3,
    title: "Третий пост",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reprehenderit! Ab tempore dicta eaque perferendis rerum, totam perspiciatis soluta. Accusantium similique quia eligendi earum nisi, qui fugit iste ducimus non?",
    date: "2023-10-03",
  },
];

export default posts;