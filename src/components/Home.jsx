import { Link } from "react-router";
import homeData from "../constants/homeData";

function Home() {
  return (
    <div className="home">
      <h1 className="page-title">Home</h1>

      <div className="home-grid">
        {homeData.map((data) => (
          <div className="home-grid-containers">
            <Link to={data.to} className="title">
              {data.title}
            </Link>
            <p>{data.p1}</p>
            <p>{data.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
