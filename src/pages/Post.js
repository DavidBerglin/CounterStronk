import { useParams } from "react-router-dom";
import "./Post.css";

function Post() {
  const { id } = useParams();

  const posts = {
    "ak-skins": {
      title: 'Top 5 AK skins that scream: "I switched to CT because it\'s easier"',
      content: [
        "#5 – AK-47 | Elite Build: Looks like a factory worker’s dirty jumpsuit.",
        "#4 – AK-47 | Slate: Clean, boring. Your favorite food is plain pasta.",
        "#3 – AK-47 | Safari Mesh: This isn't a skin. It's punishment.",
        "#2 – AK-47 | Frontside Misty: Tribal tattoo energy, 2011 Facebook vibes.",
        "#1 – AK-47 | Black Laminate: Smells like woodshop and disappointment."
      ]
    },
    "knives": {
      title: "What your knife says about you",
      content: [
        "Karambit: You flick your mouse more than your wrist.",
        "Butterfly Knife: You're stuck in 2015 – but in a charming way.",
        "Bayonet: Tactical. Practical. Probably over 30.",
        "Gut Knife: You love pain. Yours and others'.",
        "Flip Knife: Default energy. You play Mirage only."
      ]
    },
    "aim-hiders": {
      title: "Top 3 skins to hide your aim",
      content: [
        "#3 – M4A4 | Neo-Noir: Colorful chaos to match your spray.",
        "#2 – AWP | Electric Hive: Bright enough to blind observers.",
        "#1 – AK-47 | Safety Net: You're bad. At least you're visible."
      ]
    }
  };

  const post = posts[id];

  if (!post) {
    return <div className="post-page"><h2>Post not found</h2></div>;
  }

  return (
    <div className="post-page">
      <h2>{post.title}</h2>
      <div className="post-content">
        {post.content.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
