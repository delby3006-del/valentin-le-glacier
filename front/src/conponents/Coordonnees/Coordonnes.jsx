export default function Coordonnees({
  showAdresse = true,
  showTelephone = true,
}) {
  return (
    <div className="coordonnee">
      {showAdresse && (
        <p className="adresse">📍 40, rue Jean Jaurès — 87 000 Limoges</p>
      )}

      {showTelephone && <p className="telephone">📞 tél : 05 55 57 47 33</p>}
    </div>
  );
}
