import './SocialProff.css';
import PAYPAL from "../assets/paypal.png";
import meta from "../assets/meta.jpg";
import vercel from "../assets/vercel.png";
import amazon from "../assets/amazon.png"; 



export function SocialProff() {
  return (
    <div className="stats-section">
      <div className="stats-header">
        <h1 className="stats-number">5k+ <span className="stats-label">Active Students</span></h1>
        <p className="stats-subtext">Our graduates work at the world's most innovative companies</p>
      </div>
      
      <div className="company-logos">
        {/* Replace with your actual logo filenames */}
        <img src={PAYPAL} alt="paypal" className="company-img"/>
        <img src={meta} alt="Meta" className="company-img"/>
        <img src={vercel} alt="vercel" className="company-img"/>
        <img src={amazon} alt="Amazon" className="company-img"/>
      </div>
    </div>
  );
}