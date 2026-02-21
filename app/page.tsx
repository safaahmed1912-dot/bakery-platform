import Link from "next/link";
import { communityHighlights, products, stlLibrary } from "@/data/mock-data";

export default function HomePage() {
  return (
    <section className="stack">
      <div className="hero card">
        <p className="badge">Community-first MVP</p>
        <h1>منصة موحّدة للخبازات: بيع، مشاركة، وتصميم.</h1>
        <p>
          ابدئي بسرعة عبر عرض منتجاتك، مشاركة ملفات STL لقوالب الكوكيز، واستقبال طلبات
          التصميم من المجتمع.
        </p>
        <div className="hero-actions">
          <Link href="/products" className="btn primary">Explore Products</Link>
          <Link href="/designer-request" className="btn">Request a Design</Link>
        </div>
      </div>

      <div className="grid grid-3">
        <article className="card">
          <h2>Popular Products</h2>
          <ul className="list">
            {products.slice(0, 3).map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <strong>{item.priceSAR} SAR</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Top STL Downloads</h2>
          <ul className="list">
            {stlLibrary.slice(0, 3).map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <strong>{item.downloads}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Community Highlights</h2>
          <ul className="bullet-list">
            {communityHighlights.map((highlight) => (
              <li key={highlight.title}>
                <strong>{highlight.title}</strong>
                <p>{highlight.detail}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
