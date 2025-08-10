'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import sample from '../data/sample-products.json';

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-inner">
          <h1>Wave — Ride the Deals</h1>
          <p>Original products. Trustworthy checkout. Fast delivery.</p>
          <Link href="/products" className="btn primary">Shop Now</Link>
        </div>
        <motion.img
          src="/logo.svg"
          alt="Wave logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{maxWidth: 360}}
        />
      </section>

      <section className="featured">
        <h2>Featured</h2>
        <div className="grid">
          {sample.slice(0,4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
