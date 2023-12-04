export default async function Memes() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  const demMemes = data.data.memes;

  return (
    <div>
      <h2>Memes</h2>
      <p>
        Here's an API to fetch random memes:{" "}
        <a href="https://api.imgflip.com/get_memes">
          https://api.imgflip.com/get_memes
        </a>
      </p>

      <ul>
        {demMemes.map((src) => {
          return (
            <li key={src.id}>
              <img
                src={`${src.url}`}
                alt={`${src.name}`}
                style={{ width: "50px" }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
