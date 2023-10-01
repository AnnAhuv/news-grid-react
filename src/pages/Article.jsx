const Article = () => {
  return (
    <section id="article">
      <div className="container">
        <div className="page-container">
          <article className="card">
            <img src="img/articles/ent1.jpg" alt="" />
            <h1 className="l-heading">Lorem ipsum dolor sit amet.</h1>
            <div className="meta">
              <small>
                <i className="fas fa-user" /> Written By John Doe January 12,
                2019
              </small>
              <div className="category category-ent">Entertainment</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              maxime magnam eligendi hic commodi aperiam ut placeat
              perspiciatis, dolore expedita reprehenderit quisquam dicta nam,
              architecto et asperiores dolor ipsa? Blanditiis, accusamus
              repudiandae. Suscipit, ea perspiciatis. Ut nisi inventore sint
              explicabo, suscipit praesentium quisquam nemo dolor. Omnis
              laboriosam reprehenderit cum et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur natus rem accusantium! Labore eligendi nihil
              modi maxime voluptatibus voluptates nostrum iusto sunt aliquam,
              deserunt dolorum et velit dolores iste eveniet magnam veniam
              suscipit molestiae aliquid earum saepe rem a? Odit ad optio
              praesentium commodi culpa cupiditate quisquam vero esse, nobis
              facere, accusantium, nesciunt voluptates debitis facilis. Esse
              magnam deleniti libero iusto distinctio? Maiores iusto error
              inventore quos amet sit, ratione officia officiis possimus? Ex
              sequi dolorum, eius cum sapiente ipsa repudiandae, consequatur
              iusto nobis porro amet? Tempora illum, similique aperiam sint,
              enim in harum quia facilis iste hic ut quis, deserunt voluptate!
              Sunt enim consequuntur unde sequi, nostrum error asperiores
              voluptate cupiditate numquam ab esse facere molestias commodi
              beatae veritatis a ipsa hic quibusdam porro eligendi saepe rem
              quae laboriosam tenetur. Laboriosam harum deleniti sit sint, alias
              distinctio fugiat beatae? Officia mollitia similique dolore,
              officiis accusamus doloribus commodi labore.
            </p>
          </article>
          <aside id="categories" className="card">
            <h2>Categories</h2>
            <ul className="list">
              <li>
                <a href="#">
                  <i className="fas fa-chevron-right" /> Sports
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-chevron-right" /> Entertainment
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-chevron-right" /> Technology
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-chevron-right" /> Fashion
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-chevron-right" /> Shopping
                </a>
              </li>
            </ul>
          </aside>
          <aside className="card bg-secondary">
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              ea.
            </p>
            <a href="#" className="btn btn-dark btn-block">
              Join Now
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Article;
