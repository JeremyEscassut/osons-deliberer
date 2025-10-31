import './styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Osons Délibérer',
  description: "Plateforme participative de délibération citoyenne"
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr">
      <body>
        <header className="bg-white border-b">
          <div className="container py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Osons Délibérer</h1>
            <nav>
              <a className="mr-4 text-sm text-neutral-600" href="/">Accueil</a>
              <a className="mr-4 text-sm text-neutral-600" href="/dashboard">Tableau de bord</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t py-6 mt-12 text-center text-sm text-neutral-500">© Osons Délibérer — prototype</footer>
      </body>
    </html>
  );
}
