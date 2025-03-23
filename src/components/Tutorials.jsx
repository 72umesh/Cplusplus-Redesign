import cimage from "../assets/images/c++.png";

function Tutorials() {
  return (
    <div className="tutorial">
      <h1 className="page-title">Tutorials</h1>
      <div className="tutorial-container">
        <h2>C++ Language</h2>
        <div className="tutorial-container-descriptions">
          <img src={cimage} alt="cplusplus image" className="cpluslpus-image" />
          <div>
            <p>
              Learn C++ from its basics or introduce yourself to new language
              features with The C++ Language Tutorial
            </p>
            <p>
              A fast paced self-teaching tutorial covering the modern concepts
              of this programming language
            </p>
          </div>
        </div>
        <h3>Supplemental Papers</h3>
        <div>
          <p>ASCII Codes</p>
          <p>Numerical bases</p>
          <p>Boolean operations</p>
        </div>
      </div>
    </div>
  );
}
export default Tutorials;
