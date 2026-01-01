import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page Not Found</h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#2E5C48',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontWeight: '500'
                }}
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
}
