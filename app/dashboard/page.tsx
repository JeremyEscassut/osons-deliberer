export default function Dashboard(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tableau de bord</h2>
      <p className="text-neutral-600">Zone authentifiée — actions selon votre rôle (citoyen, expert, admin).</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">Vos réclamations</div>
        <div className="card">Réclamations à valider (experts)</div>
      </div>
    </div>
  );
}
