import './Profile.css';
import Sidebar from '../Sidebar/Sidebar'
import ClothesSection from '../ClothesSection/ClothesSection'

const Profile = ({items, handleOpenFormModal}) => {
  return (
    <main className="profile">
      <Sidebar />
      <ClothesSection items={items} openAddModal={handleOpenFormModal}/>
    </main>
  )
}

export default Profile