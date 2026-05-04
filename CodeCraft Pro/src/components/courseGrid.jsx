import './CourseGrid.css';

const courses = [
  {
    id: 1,
    title: "Fullstack AI Development",
    description: "Build AI-powered apps from scratch to enterprise-scale deployment.",
    date: "May 22, 2026",
    totalPrice: 2400.00,
    discountPrice: 1620.00,
    willLearn: ["React 19 & Next.js", "OpenAI API Integration", "Node.js Backend", "Vector Databases"],
    discountNote: "25% off + extra 10% until May 8"
  },
  {
    id: 2,
    title: "Data Analytics with Power BI",
    description: "Analyze data and create interactive dashboards like a pro.",
    date: "Jun 27, 2026",
    totalPrice: 1200.00,
    discountPrice: 900.00,
    willLearn: ["DAX Query Language", "Data Modeling", "Dashboard Automation", "SQL for Data Science"],
    discountNote: "25% discount for one-time payment"
  }
];

export function CourseGrid() {
  return (
    <div className="course-container">
      <h2 className="section-title">Master Your Craft</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="card-top">
              <span className="course-date">Next Cohort: {course.date}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
            </div>
            
            <div className="learning-points">
              <h4>What you'll master:</h4>
              <ul>
                {course.willLearn.map((item, index) => (
                  <li key={index}><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>

            <div className="card-bottom">
              <div className="price-tag">
                <span className="old-price">${course.totalPrice}</span>
                <span className="new-price">${course.discountPrice}</span>
                <p className="urgency">{course.discountNote}</p>
              </div>

              <div className="course-buttons">
                <button className="btn-register">Enroll Now</button>
                <button className="btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}