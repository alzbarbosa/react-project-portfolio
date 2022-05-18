import Sidebar from "../components/Sidebar"

import image2 from "../img/andre-photo01.jpg"

const Homepage = () => {
  return (
      <main className="main-container">
      <article className="homepage-container">
      <section className="main-title">
          <h2>My <span>Portfolio</span><span className="bg-text">Welcome</span></h2>
      </section>
    <section className="intro">
            <h1 className="title-intro">
                Hi, I am <strong>Andre Barbosa</strong>
            </h1>
            <p className="subtitle-intro">React dev</p>
            <img src={image2} alt="me" className="intro__img" />
        </section>
        <section>
            <p className="homepage-introduction">I'm a React developer looking for new opportunies in my career to create amazing pages and interactive solutions to our customers</p>
        </section>
        </article>
    <Sidebar />
    </main>

  )
}

export default Homepage