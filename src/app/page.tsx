import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
  // Select first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Explore the Unknown</h1>
          <p className={styles.heroSubtitle}>
            Equip yourself with the best gear for your next adventure.
            From mountain peaks to deep forests, we have you covered.
          </p>
          <Link href="/products" className={styles.ctaButton}>
            Shop Now
          </Link>
        </div>
      </section>

      <div className="container">
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Gear</h2>
            <Link href="/products" className={styles.viewAll}>
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Categories</h2>
          </div>
          {/* A simple category grid could go here, but for now we focus on products */}
        </section>
      </div>
    </>
  );
}
