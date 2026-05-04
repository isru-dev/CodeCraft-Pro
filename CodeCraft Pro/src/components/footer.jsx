import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <h2 className="footer-logo">CodeCraft <span>Pro</span></h2>
          <p className="brand-description">
            Empowering the next generation of software engineers through 
            industry-standard mentorship and high-end technical training.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">YouTube</a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="footer-links">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">Fullstack Development</a></li>
            <li><a href="#">AI & Machine Learning</a></li>
            <li><a href="#">Data Analytics</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>support@codecraftpro.com</li>
            <li>Hawassa, Ethiopia</li>
            <li>+251 900 000 000</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CodeCraft Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}