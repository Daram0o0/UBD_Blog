import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>main</h2>
      <hr />
      <div onClick={() => {
        navigate(`/board`)
      }} style={{ cursor: 'pointer' }}>대충 게시판 이동</div>
    </div>

  )
}
export default Main;