import { Link } from "react-router-dom";
import "./BlogCard.css"

function BlogCard({ id, title, excerpt }) {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={`/post/${id}`} className="read-more">Read more</Link>
    </div>
  );
}

export default BlogCard;
