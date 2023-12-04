import { v4 as uuidv4 } from "uuid";

export default async function Dogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();
  const imageSrc = data.message;

  return (
    <div className="dog">
      <h2>Dogs</h2>
      <p>
        Here's an API to fetch 10 random dog images:
        <a href="https://dog.ceo/api/breeds/image/random/10">
          https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <ul>
        {imageSrc.map((src) => {
          return (
            <li key={uuidv4()}>
              <img src={`${src}`} style={{ width: "100px" }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
