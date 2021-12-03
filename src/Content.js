import Post from "./Post";

const posts = [
  {
    user: {
      name: "jeff",
      photo: "minha_foto.jpg",
    },
    image: "jujuba.jpeg",
    likes: {
      mainLikeUser: "respondeai",
      mainLikePhoto: "respondeai 2.png",
      likesNumber: "167.823",
    },
  },

  {
    user: {
      name: "meowed",
      photo: "meowed 2.png",
    },
    image: "gato-telefone 1.png",
    likes: {
      mainLikeUser: "barked",
      mainLikePhoto: "barked 2.png",
      likesNumber: "27.612",
    },
  },

  {
    user: {
      name: "barked",
      photo: "barked 2.png",
    },
    image: "dog 1.png",
    likes: {
      mainLikeUser: "adorableanimals",
      mainLikePhoto: "adorableanimals 1.png",
      likesNumber: "45.625",
    },
  },
];

export default function Content() {
  return (
    <main className="content">
      {posts.map((post) => (
        <Post user={post.user} image={post.image} likes={post.likes} />
      ))}
    </main>
  );
}
