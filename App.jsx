export default function App() {
  const skills = [
    "Python",
    "SQL",
    "React",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analysis",
    "Java",
    "Power BI",
  ];

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "300px",
          background:
            "linear-gradient(to bottom, #0f766e, #14b8a6)",
          color: "white",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <img
          src="/bujji.jpg"
          alt="profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <h1 style={{ fontSize: "32px" }}>
          Lingaraju Nakshatra
        </h1>

        <p style={{ marginTop: "20px", lineHeight: "30px" }}>
          Computer Science Engineering Student passionate
          about AI/ML, Cloud Computing and Full Stack
          Development.
        </p>

        <button
          style={{
            marginTop: "30px",
            backgroundColor: "white",
            color: "#0f766e",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Hire Me
        </button>

        {/* Contact Section */}
        <div style={{ marginTop: "40px" }}>
          <h2>Contact</h2>

          <p>
            📧{" "}
            <a
              href="mailto:lingarajunakshatra188@gmail.com"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              lingarajunakshatra188@gmail.com
            </a>
          </p>

          <p>
            📱{" "}
            <a
              href="tel:7675826353"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              7675826353
            </a>
          </p>

          <p>
            💻{" "}
            <a
              href="https://github.com/lingarajunakshatra188-lgtm/Lingaraju-Nakshatra"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              GitHub
            </a>
          </p>

          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/lingarajunakshatra/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "50px" }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            Hi, I'm
            <span style={{ color: "#14b8a6" }}>
              {" "}
              Nakshatra
            </span>
          </h1>

          <h2 style={{ color: "gray" }}>
            Full Stack & AI Enthusiast
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "30px",
              fontSize: "18px",
            }}
          >
            Passionate about building modern applications,
            solving real-world problems and learning cloud
            technologies.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                backgroundColor: "#14b8a6",
                color: "white",
                border: "none",
                padding: "14px 25px",
                borderRadius: "10px",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              View Projects
            </button>

            <a
              href="/Lingaraju_Nakshatra_Updated_Resume (1).pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  padding: "14px 25px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Resume
              </button>
            </a>
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginTop: "50px" }}>
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            Skills
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(200px,1fr))",
              gap: "20px",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow:
                    "0px 5px 15px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <h2 style={{ color: "#14b8a6" }}>
                  {skill}
                </h2>

                <p style={{ marginTop: "10px" }}>
                  Experience with modern development and
                  project implementation.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section style={{ marginTop: "60px" }}>
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            Projects
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "25px",
            }}
          >
            {/* Project 1 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "20px",
                boxShadow:
                  "0px 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h2>Online Grocery Shopping</h2>

              <p style={{ marginTop: "15px" }}>
                Built using Python and SQL with order
                tracking and authentication.
              </p>

              <a
                href="/Online Grocery Shopping.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#14b8a6",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "20px",
                boxShadow:
                  "0px 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h2>Trash to Treasure</h2>

              <p style={{ marginTop: "15px" }}>
                Recycling and sustainability focused
                platform using Python.
              </p>

              <a
                href="/Trash to Treshure.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#14b8a6",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "20px",
                boxShadow:
                  "0px 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h2>Driver Drowsiness Detection</h2>

              <p style={{ marginTop: "15px" }}>
                AI project using OpenCV and Machine
                Learning.
              </p>

              <a
                href="/Driver Drowsiness Detection.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#14b8a6",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Project →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}