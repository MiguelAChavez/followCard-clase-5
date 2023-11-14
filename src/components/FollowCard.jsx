import { useState } from "react";
import "./followCard.css";
function FollowCard({ Usuario, siguiendo, children }) {
  const [isSiguiendo, setSiguiendo] = useState(siguiendo);
  const handleClick = () => {
    setSiguiendo(!isSiguiendo);
  };
  const texto = isSiguiendo ? "siguiendo" : "Seguir";
  return (
    <article className="followCard">
      <header className="followCard-header">
        <img
          src={`https://unavatar.io/${Usuario}`}
          alt={`avatar de ${children}`}
          className="followCard-avatar"
        />
        <div className="followCard-info">
          <strong>{children}</strong>
          <span className="followCard-userName">@{Usuario}</span>
        </div>
      </header>
      <aside>
        <button className="followCard-button" onClick={handleClick}>
          {texto}
        </button>
      </aside>
    </article>
  );
}

export default FollowCard;
