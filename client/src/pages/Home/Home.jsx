import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="row w-100">
          <h1 className="text-center p-3">數據平台入口</h1>
        </div>
        <div className="row w-100 justify-content-center">
          <div className="col-md-5 col-12 m-md-0 mb-5">
            <Link className="btn btn-primary w-100 ratio ratio-1x1 d-flex align-items-center justify-content-center" to="/login">
              登入
            </Link>
          </div>
          <div className="col-md-5 col-12">
            <Link className="btn btn-primary w-100 ratio ratio-1x1 d-flex align-items-center justify-content-center" to="/register">
              註冊
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
