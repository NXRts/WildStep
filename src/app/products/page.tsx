'use client';

import { useState } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function ProductListingPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.header}>
                <h1 className={styles.title}>Our Collection</h1>
                <div className={styles.controls}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${selectedCategory === category ? styles.activeFilter : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className={styles.grid}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className={styles.noResults}>
                    No products found in this category.
                </div>
            )}
        </div>
    );
}
