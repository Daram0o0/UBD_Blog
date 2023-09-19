/**
 * react router dom / data그냥 하드코딩 -> data/boardData.tsx
 * 게시판 : 
 * @returns 제목, 내용, 댓글, 업로드 날짜 수정 날짜, 글쓴ㅇㅣ,
 * 
 * 댓글: 작성자(이메일), 내용, 등록일자
 */

import { data } from "../../data/boardData";

function Board() {
  const boardData = data
  return (
    <div>
      <h2>게시판</h2>
      <hr />
      {boardData.map((val, idx) => {
        return (
          <div style={{ border: "solid 5px red", width: "100%", height: "300px" }}>
            <div>
              <div>
                <h3>내용</h3>
                <div>제목 : {val.title}</div>
                <div>업로드 날짜 : {val.uploadDate}</div>
                <div>수정 날짜 : {val.recentDate}</div>
                <div>글쓴이 : {val.owner}</div>
                <div>내용 : {val.content}</div>
              </div>


              <div>
                <h3>댓글</h3>
                <div>이메일: {val.comment.email}</div>
                <div>내용: {val.comment.content}</div>
                <div>등록 날짜: {val.comment.uploadDate}</div>
              </div>
            </div>
          </div>
        )

      })}

    </div>
  )
}
export default Board;