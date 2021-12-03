export default function Post({ user, image, likes }) {
  return (
    <article className="post">
      <PostTop name={user.name} photo={user.photo} />
      <img
        className="post-img"
        src={`./images/${image}`}
        alt="Foto da postagem"
      />
      <PostBottom
        mainLikeUser={likes.mainLikeUser}
        mainLikePhoto={likes.mainLikePhoto}
        likesNumber={likes.likesNumber}
      />
    </article>
  );
}

function PostTop({ name, photo }) {
  return (
    <div className="post-top">
      <div className="user">
        <img src={`./images/${photo}`} alt="Foto do usuário" />
        <p className="name">{name}</p>
      </div>
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}

function PostBottom({ mainLikeUser, mainLikePhoto, likesNumber }) {
  return (
    <div className="post-bottom">
      <div className="left">
        <div className="actions">
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="info">
          <img src={`./images/${mainLikePhoto}`} alt="Foto de quem curtiu" />
          <p>
            Curtido por <b>{mainLikeUser}</b> e{" "}
            <b>outras {likesNumber} pessoas</b>
          </p>
        </div>
      </div>
      <div className="right">
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}
