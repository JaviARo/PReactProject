import "./NewFooter.css";

export default function NewFooter() {
  return (
    <>
      <footer className="footer">
        <div className="logos">
        <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
          <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        </div>

        <div className="cookies">©Copyright • Política de privacidad • Política de cookies</div>
      </footer>
    </>
  );
}