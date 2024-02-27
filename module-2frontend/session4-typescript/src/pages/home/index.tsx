interface HomeInterface {
  name: string;
  email: string;
}

function Home(props: HomeInterface) {
  return (
    <div>
      <h1>
        Welcome to TypeScript, {props.name}, {props.email}
      </h1>
    </div>
  );
}

export default Home;
