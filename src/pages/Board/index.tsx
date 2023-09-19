/**
 * react router dom / data그냥 하드코딩 -> data/boardData.tsx
 * 게시판 : 
 * @returns 제목, 내용, 댓글, 업로드 날짜 수정 날짜, 글쓴ㅇㅣ,
 * 
 * 댓글: 작성자(이메일), 내용, 등록일자
 */

import { useNavigate } from "react-router-dom";
import { data } from "../../data/boardData";


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

function BoardListPage() {
  const navigate = useNavigate();
  const boardData = data
  return (
    <div>
      <h2>게시판</h2>
      <hr />
      <div onClick={() => {
        navigate(`/`)
      }} style={{ cursor: "pointer" }}>main 가기</div>
      {boardData.map((val, idx) => {
        return (
          <div>
            <h3 onClick={() => {
              { <BoardList key={idx} {...val} />; }
            }} style={{ cursor: "pointer", marginLeft: "50px" }}>{val.title}</h3>



            <div><BoardList key={idx} {...val} /></div>
            {
              // val.comment &&
              val.comment.map((val: Comment, idx: number) => {
                return <CommentList key={idx} {...val} />
              })
            }
          </div>
          // <div style={{ border: "solid 5px red", width: "100%", height: "300px" }}>
          //   <div>
          //     <div>
          //       <h3>내용</h3>
          //       <div>제목 : {val.title}</div>
          //       
          //     </div>


          //     <div>
          //       <h3>댓글</h3>
          //       <div>이메일: {val.comment.email}</div>
          //       <div>내용: {val.comment.content}</div>
          //       <div>등록 날짜: {val.comment.uploadDate}</div>
          //     </div>
          //   </div>
          // </div>
        )

      })}

    </div>
  )

  function BoardList(props: Board) {
    return (
      <div>
        <div>업로드 날짜 : {props.uploadDate}</div>
        <div>수정 날짜 : {props.recentDate}</div>
        <div>글쓴이 : {props.owner}</div>
        <div>내용 : {props.content}</div>
      </div>
    )
  }

  function CommentList(props: Comment) {
    return (
      <div>
        <h5>{`댓글`}</h5>
        <div>글쓴이 : {props.email}</div>
        <div>업로드 날짜 : {props.uploadDate}</div>
        <div>내용 : {props.content}</div>
      </div>
    )
  }
}
export default BoardListPage;