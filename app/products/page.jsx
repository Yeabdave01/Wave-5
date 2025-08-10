'use client';
import ProductCard from '../../components/ProductCard';
import sample from '../../data/sample-products.json';

export default function Products() {
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="grid">
        {sample.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
