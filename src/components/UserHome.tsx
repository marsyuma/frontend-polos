import ListLost from "./ListLost";
import { useNavigate } from 'react-router-dom';

function UserHome() {
    const navigate = useNavigate();

  const handleLostItemClick = () => {
    navigate('/user/insertlost');
  };

    return (
        <>
            <h1>User Home</h1>
            <button onClick={handleLostItemClick}>Lost an Item</button>
            <ListLost />
        </>
    );
}
export default UserHome;