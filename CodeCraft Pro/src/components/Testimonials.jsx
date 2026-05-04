import './Testimonials.css';
import john from '../assets/photomale.jpg';
import michael from '../assets/youngmen.avif';
import  selam from '../assets/photowo.jpg';
import  Sarah from '../assets/photowome.jpg';

export function Testimonials() {
  const profiles = [
    {
      id: 1,
      name: "John Harvard",
      role: "Frontend Developer at Vercel",
      photo: john, // Using a placeholder for now
      message: "The Fullstack AI course changed how I approach architecture. I went from junior to lead engineer in six months."
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Data Analyst",
      photo: Sarah,
      message: "The Power BI dashboarding techniques taught here are industry-leading. Highly recommend CodeCraft Pro."
    },
     {
      id: 3,
      name: "michael Harvard",
      role: "Frontend Developer at Vercel",
      photo: michael, // Using a placeholder for now
      message: "The Fullstack AI course changed how I approach architecture. I went from junior to lead engineer in six months."
    },
     {
      id: 1,
      name: "John Harvard",
      role: "Frontend Developer at Vercel",
      photo: john, // Using a placeholder for now
      message: "The Fullstack AI course changed how I approach architecture. I went from junior to lead engineer in six months."
    },
     {
      id: 2,
      name: "Sarah Chen",
      role: "Data Analyst",
      photo: Sarah,
      message: "The Power BI dashboarding techniques taught here are industry-leading. Highly recommend CodeCraft Pro."
    },
    {
      id: 4,
      name: "selam Chen",
      role: "Data Analyst",
      photo: selam,
      message: "The Power BI dashboarding techniques taught here are industry-leading. Highly recommend CodeCraft Pro."
    }
  ];

  return (
   <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">Student <span>Success Stories</span></h2>
      <p className="testimonials-subtitle">Join 5,000+ developers who transformed their careers.</p>
      
      <div className="testimonals-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="inner-container">
            <div className="message">"{profile.message}"</div>
            
            <div className="profile-row">
              <div className="photo">
                <img src={profile.photo} alt={profile.name} />
              </div>
              <div className="profile-text">
                <h4 className="name">{profile.name}</h4>
                <p className="role">{profile.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}