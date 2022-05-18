import Sidebar from "../components/Sidebar"
import SkillslList from "../components/SkillsList"
import SkillsOthers from "../components/SkillsOthers"

const Curriculum = () => {
  return (
    <main className="main-container">
    <section className="curriculum-page-container">
    <div className="main-title">
                    <h2>My <span>Skills</span><span className="bg-text">Curriculum</span></h2>
    </div>
    <SkillslList />
    <SkillsOthers />
    </section>
    <Sidebar />
    </main>
  )
}

export default Curriculum