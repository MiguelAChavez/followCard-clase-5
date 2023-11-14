import "./App.css";
import { DATA_USERS } from "./Data";
import FollowCard from "./components/followCard";

function App() {
  return (
    <>
      <section className="followCards-container">
        <h2>A quién seguir</h2>
        {DATA_USERS.map((user) => (
          <FollowCard
            key={user.Usuario}
            Usuario={user.Usuario}
            siguiendo={user.siguiendo}
          >
            {user.nombre}
          </FollowCard>
        ))}
      </section>
    </>
  );
}

export default App;
