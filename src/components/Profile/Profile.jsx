import './Profile.css';
import Sidebar from '../Sidebar/Sidebar'
import ClothesSection from '../ClothesSection/ClothesSection'

const Profile = ({items, handleOpenFormModal}) => {
  return (
    <main className="profile">
      <Sidebar />
      <ClothesSection />
    </main>
  )
}

export default Profile