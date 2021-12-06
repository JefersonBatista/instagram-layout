const stories = [
  {
    userImg: "9gag 1.png",
    userName: "9gag",
  },
  {
    userImg: "meowed 1.png",
    userName: "meowed",
  },
  {
    userImg: "barked 1.png",
    userName: "barked",
  },
  {
    userImg: "nathanwpylestrangeplanet 1.png",
    userName: "nathanwpylestrangeplanet",
  },
  {
    userImg: "wawawiwacomicsa 1.png",
    userName: "wawawiwacomicsa",
  },
  {
    userImg: "respondeai 1.png",
    userName: "respondeai",
  },
  {
    userImg: "filomoderna 1.png",
    userName: "filomoderna",
  },
  {
    userImg: "memeriagourmet 1.png",
    userName: "memeriagourmet",
  },
];

export default function Stories() {
  return (
    <div className="stories-box">
      <div className="stories">
        {stories.map((story) => (
          <Story userImg={story.userImg} userName={story.userName} />
        ))}

        <ion-icon
          class="stories-button"
          name="chevron-forward-circle"
        ></ion-icon>
      </div>
    </div>
  );
}

function Story({ userImg, userName }) {
  return (
    <div>
      <div className="thumb">
        <img
          className="background-img"
          src="images/stories_background_circle.png"
          alt="Plano de fundo dos stories"
        />
        <img
          className="user-img"
          src={`images/${userImg}`}
          alt="Usuário do story"
        />
      </div>
      <p>{userName}</p>
    </div>
  );
}
