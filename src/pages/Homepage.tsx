import React from 'react';
import Header from '../components/layout/header/Header';
import '../app/globals.css';

export default function Homepage(): JSX.Element {
    return (
        <div className="min-h-screen text-foreground">
            <Header />
            <main className="p-4">
                <h2>Welcome to the Homepage</h2>
                <p>This is the main content of the homepage.</p>
            </main>
        </div>
    );
};