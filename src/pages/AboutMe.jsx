import Sidebar from "../components/Sidebar"

const AboutMe = () => {
  return (
    <main className="main-container">
    <section className="aboutme-container">
    <div className="main-title">
                    <h2>Who <span>I am</span><span className="bg-text">Myself</span></h2>
    </div>
    <section className="aboutme-info">
    <p>I decided to live abroad for new challenges, experiences and knowledge. My career is made in Finance and Banking Industry and now I would like to explore my other passion that is programming. </p>
    <p>I love learning and be able to transform my knowledge in solutions. Learning programming makes this possible and is an exciting experience for me. Therefore, I'm looking forward to making a carrer as a programmer</p>
    
    <div className="quotation">
      <q>Only those who dare to fail greatly can ever achieve greatly</q> 
      <p className="quotation-name">Robert F. Kennedy</p>
      </div>
      
      </section>
      </section>
    <Sidebar />
    </main>
  )
}

export default AboutMe