export default function DesignerRequestPage() {
  return (
    <section className="stack">
      <h1>Cookie Cutter Designer Request</h1>
      <p className="muted">Prototype form (currently local-only, no backend submission).</p>

      <form className="card form" action="#">
        <label>
          Design Title
          <input type="text" placeholder="e.g. Ramadan Lantern Set" />
        </label>
        <label>
          Theme
          <input type="text" placeholder="Eid, Birthday, Wedding..." />
        </label>
        <label>
          Target Size (mm)
          <input type="text" placeholder="e.g. 65 x 80" />
        </label>
        <label>
          Notes
          <textarea placeholder="Describe style, text, and any references." rows={4} />
        </label>
        <button type="button" className="btn primary">Save Mock Request</button>
      </form>
    </section>
  );
}
