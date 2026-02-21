import { products } from "@/data/mock-data";

export default function ProductsPage() {
  return (
    <section className="stack">
      <h1>Products</h1>
      <p className="muted">Mock catalog from community bakers.</p>
      <div className="grid grid-2">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <p className="badge">{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.priceSAR} SAR</p>
            <p className="muted">❤️ {product.likes} likes</p>
          </article>
        ))}
      </div>
    </section>
  );
}
