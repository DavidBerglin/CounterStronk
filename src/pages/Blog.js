import BlogCard from "../components/BlogCard";
import "./Blog.css";

function Blog() {
  const posts = [
    {
      id: "ak-skins",
      title: 'Top 5 AK skins that scream: "I switched to CT because it\'s easier"',
      excerpt: "Elite Build – When you want to look like a factory worker with a taste for dirt."
    },
    {
      id: "knives",
      title: "What your knife says about you",
      excerpt: "Butterfly Knife? You peaked in 2015, champ."
    },
    {
      id: "aim-hiders",
      title: "Top 3 skins to hide your aim",
      excerpt: "Electric Hive – Bright colors won't distract from your whiffs, but nice try."
    }
  ];

  return (
    <div className="blog-page">
      <h2>Latest Posts</h2>
      <div className="blog-list">
        {posts.map(post => (
          <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
