interface AboutInterface {
  name: string;
}

function About(props: AboutInterface) {
  return (
    <div>
      <h1>Ini adalah halaman about, Welcome {props.name}</h1>
    </div>
  );
}

export default About;