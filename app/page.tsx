export default function Home(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Bienvenue sur Osons Délibérer</h2>
      <p className="text-neutral-600 mb-4">Plateforme participative pour soumettre des doléances, voter et valider via des experts.</p>
      <section className="card">
        <h3 className="text-lg font-semibold">Commencer</h3>
        <ul className="mt-2 list-disc list-inside text-neutral-700">
          <li>Se connecter / créer un compte</li>
          <li>Soumettre une réclamation (claim)</li>
          <li>Consulter et voter</li>
        </ul>
      </section>
    </div>
  );
}
