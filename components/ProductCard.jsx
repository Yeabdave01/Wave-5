'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductCard({product}){
  return (
    <motion.article className="card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h3>{product.name}</h3>
          <p className="price">ETB {product.price}</p>
        </div>
      </Link>
    </motion.article>
  )
}
