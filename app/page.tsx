import Image from "next/image";

export default function Home() {
  return (
    /*
    <div>
      <button className="add-node-btn">+</button>
    </div>
    */
    <main>
      <section className="home-section" id="home">
        <h1>Course Mapper</h1>
        <p>Visualize your degree. Plan your path.</p>
      </section>

      <section className="about-section" id="about">
        <h1>About</h1>
        <p>
          Course Mapper helps students visualize courses, prerequisites, and their path through college.
        </p>
      </section>
    </main>
  );
}
