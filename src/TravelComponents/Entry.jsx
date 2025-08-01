import articlePin from "../assets/pin.png";

const Entry = (props) => {
  // console.log(props);
  return (
    <article className="article-entry">
      <div className="article-image-container">
        <img
          className="article-image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>

      <div className="article-content">
        <img className="article-pin" src={articlePin} alt="pin" />
        <span>{props.title}</span>
        <a href={props.urlGoogle} target="_blank">
          Visit the Country
        </a>
        <h2 style={{ marginBottom: 0 }}>{props.city}</h2>
        <small>{props.date}</small>
        <p>{props.description}</p>
      </div>
    </article>
  );
};
export default Entry;
