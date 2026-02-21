import { stlLibrary } from "@/data/mock-data";

export default function StlLibraryPage() {
  return (
    <section className="stack">
      <h1>STL Library</h1>
      <p className="muted">Download-ready cookie cutter models shared by the community.</p>
      <div className="grid grid-2">
        {stlLibrary.map((file) => (
          <article className="card" key={file.id}>
            <p className="badge">{file.theme}</p>
            <h2>{file.title}</h2>
            <p>Difficulty: {file.difficulty}</p>
            <p className="muted">⬇️ {file.downloads} downloads</p>
          </article>
        ))}
      </div>
    </section>
  );
}
