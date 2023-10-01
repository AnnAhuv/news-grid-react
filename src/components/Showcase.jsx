import { NavLink } from "react-router-dom";

const Showcase = () => {
  return (
    <header id="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="category category-sports">Sports</div>
            <h1>Some Sports Article</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eum
              impedit ratione ullam id? Dolorem et corrupti reiciendis, ex
              officia beatae placeat repellat vitae quas suscipit neque autem
              illo vero!
            </p>
            <a href="article.html" >
              <NavLink to="/article" className="btn btn-primary">Read More</NavLink>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Showcase;
