-- Simple SQL schema for Wave demo (Postgres)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  name TEXT,
  password_hash TEXT,
  role TEXT DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  description TEXT,
  price INT,
  currency TEXT DEFAULT 'ETB',
  image_url TEXT,
  category TEXT,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  total INT,
  status TEXT DEFAULT 'pending',
  payment_provider TEXT,
  payment_ref TEXT,
  created_at TIMESTAMP DEFAULT now()
);
