import { profile } from "@/data/mock-data";

export default function ProfilePage() {
  return (
    <section className="stack">
      <h1>Profile</h1>
      <article className="card profile">
        <div>
          <p className="badge">Community Baker</p>
          <h2>{profile.name}</h2>
          <p className="muted">{profile.handle} · {profile.city}</p>
          <p>{profile.bio}</p>
        </div>
        <div className="stats">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
