import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__by-line">Developed by Donovan Jabbar</p>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer