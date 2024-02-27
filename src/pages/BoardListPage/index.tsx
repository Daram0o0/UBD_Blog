/**
 * react router dom / data그냥 하드코딩 -> data/boardData.tsx
 * 게시판 : 
 * @returns 제목, 내용, 댓글, 업로드 날짜 수정 날짜, 글쓴ㅇㅣ,
 * 
 * 댓글: 작성자(이메일), 내용, 등록일자
 */

import { useNavigate, useParams } from "react-router-dom";
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


  console.log(useParams());
  const boardData = data
  return (
    <div>
      <h2>게시판</h2>
      <hr />
      {/* <div onClick={() => {
        navigate(`/`)
      }} style={{ cursor: "pointer" }}>main 가기</div> */}

      <div>
        {
          boardData.map((val, idx) => {
            return <div onClick={() => { navigate(`/board/${val.id}`) }}>{val.title}</div>
          })
        }
        {/* <h3 onClick={() => {
          navigate(`/board/${id}`)
        }} style={{ cursor: "pointer", marginLeft: "50px" }}>{boardData[parseInt(id!)].title}</h3> */}


        {/* {(val.id === parseInt(id!)) &&


          <div><BoardList key={idx} {...val} /></div>

        } */}

        {/* {val.comment &&
              val.comment.map((val: Comment, idx: number) => {
                return <CommentList key={idx} {...val} />
              })
            } */}




      </div>




    </div>
  )

  // function BoardList(props: Board) {
  //   return (
  //     <div>
  //       <div>업로드 날짜 : {props.uploadDate}</div>
  //       <div>수정 날짜 : {props.recentDate}</div>
  //       <div>글쓴이 : {props.owner}</div>
  //       <div>내용 : {props.content}</div>
  //     </div>
  //   )
  // }

  // function CommentList(props: Comment) {
  //   return (
  //     <div>
  //       <h5>{`댓글`}</h5>
  //       <div>글쓴이 : {props.email}</div>
  //       <div>업로드 날짜 : {props.uploadDate}</div>
  //       <div>내용 : {props.content}</div>
  //     </div>
  //   )
  // }
}
export default BoardListPage;