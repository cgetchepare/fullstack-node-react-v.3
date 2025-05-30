import User from "@/components/User";

const Home = () => {

  const username = "Gustavo";

  return (
    <main>
      <User name={username}>
        <p>Este é um conteúdo extra fornecido como children.</p>
      </User>
      <h2>Bem-vindo!</h2>
    </main>
  )
};

export default Home;

