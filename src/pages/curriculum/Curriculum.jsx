import "./curriculum-styles.css";
import CodeSkillslList from "../../components/code-skills-list/CodeSkillsList";
import OtherSkillsList from "../../components/other-skills-list/OtherSkillsList";
import Navbar from "../../components/navbar/Navbar";

const Curriculum = () => {
  return (
    <main className="main-container">
      <Navbar />
      <section className="curriculum-page-container">
        <div className="main-title">
          <h2>
            My <span>Skills</span>
            <span className="bg-text">Curriculum</span>
          </h2>
        </div>
        <CodeSkillslList />
        <OtherSkillsList />
      </section>
    </main>
  );
};

export default Curriculum;
