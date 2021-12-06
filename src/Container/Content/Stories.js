const stories = [
  {
    image: "9gag 1.png",
    userName: "9gag",
  },
  {
    image: "meowed 1.png",
    userName: "meowed",
  },
  {
    image: "barked 1.png",
    userName: "barked",
  },
  {
    image: "nathanwpylestrangeplanet 1.png",
    userName: "nathanwpylestrangeplanet",
  },
  {
    image: "wawawiwacomicsa 1.png",
    userName: "wawawiwacomicsa",
  },
  {
    image: "respondeai 1.png",
    userName: "respondeai",
  },
  {
    image: "filomoderna 1.png",
    userName: "filomoderna",
  },
  {
    image: "memeriagourmet 1.png",
    userName: "memeriagourmet",
  },
];

export default function Stories() {
  return (
    <div className="stories-box">
      <div className="stories">
        {stories.map((story) => (
          <Story image={story.image} userName={story.userName} />
        ))}

        <ion-icon
          class="stories-button"
          name="chevron-forward-circle"
        ></ion-icon>
      </div>
    </div>
  );
}

function Story({ image, userName }) {
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
          src={`images/${image}`}
          alt="Usuário do story"
        />
      </div>
      <p>{userName}</p>
    </div>
  );
}
