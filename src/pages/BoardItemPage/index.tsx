import { useState } from "react";
import { data } from "../../data/boardData";
import { useParams } from "react-router-dom";

export interface Board {
  id: number,
  title: string,
  content: string,
  comment: Comment[],
  uploadDate: string,
  recentDate: string,
  owner: string,
}

export interface Comment {
  id: number,
  email: string,
  content: string,
  uploadDate: string,
}

function BoardItemPage() {
  const { id } = useParams();

  const [boardData, setBoardDate] = useState<Board | null>(data[id ? parseInt(id) : 0]);


  // function BoardItem(props: Board) {
  //   return (
  //     <div>
  //       <div>업로드 날짜 : {props.uploadDate}</div>
  //       <div>수정 날짜 : {props.recentDate}</div>
  //       <div>글쓴이 : {props.owner}</div>
  //       <div>내용 : {props.content}</div>
  //     </div>
  //   )
  // }

  return (
    <div>
      <div>
        <div>업로드 날짜 : {boardData!.uploadDate}</div>
        <div>수정 날짜 : {boardData!.recentDate}</div>
        <div>글쓴이 : {boardData!.owner}</div>
        <div>내용 : {boardData!.content}</div>
      </div>
    </div>
  )


}
export default BoardItemPage;