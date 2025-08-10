'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [lang, setLang] = useState('en');
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="Wave" style={{height:44}}/>
        </Link>
        <nav className="nav">
          <Link href="/products">Products</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="controls">
          <select value={lang} onChange={(e)=>setLang(e.target.value)} aria-label="Language switcher">
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>
          <Link href="/cart" className="btn ghost">Cart</Link>
        </div>
      </div>
    </header>
  )
}
