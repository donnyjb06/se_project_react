import './Profile.css';
import Sidebar from '../Sidebar/Sidebar'
import ClothesSection from '../ClothesSection/ClothesSection'

const Profile = ({items}) => {
  return (
    <main className="profile">
      <Sidebar />
      <ClothesSection items={items}/>
    </main>
  )
}

export default Profile