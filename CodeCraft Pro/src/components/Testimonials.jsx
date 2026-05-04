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
    <section className="testimonials-section">
      <h2 className="testimonials-title">Real Results from <span>Real Students</span></h2>
      <div className="testimonials-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="message">{profile.message}</p>
            <div className="profile-info">
              <img src={profile.photo} alt={profile.name} className="profile-photo" />
              <div className="profile-details">
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