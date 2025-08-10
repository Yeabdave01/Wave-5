'use client';
import { useRouter } from 'next/navigation';
import sample from '../../../data/sample-products.json';

export default function ProductPage({ params }) {
  const id = params.id;
  const product = sample.find(s => s.id === id);
  if (!product) return <div className='container'><h2>Product not found</h2></div>;
  return (
    <div className='container'>
      <div className='product-detail'>
        <img src={product.image} alt={product.name} className='product-image'/>
        <div className='product-meta'>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className='price'>ETB {product.price}</p>
          <button className='btn primary'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
