import MyContainer from "@/components/Container/MyContainer";

export const metadata = {
  title: "Career Page - Dragon News",
};
const CareerPage = () => {
  return (
    <MyContainer className="mt-10">
      <div className="bg-base-100 text-base-content">
        <section className="py-16 text-center bg-base-200">
          <MyContainer>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Join Our Team
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              We are building the future of digital news. If you are passionate
              about technology, creativity, and innovation - we would love to
              have you with us.
            </p>
          </MyContainer>
        </section>

        <section className="py-16">
          <MyContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Why Work With Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card bg-base-200 p-6 shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">💡 Innovation</h3>
                <p>
                  Work with modern technologies like Next.js and build scalable
                  applications used by thousands.
                </p>
              </div>

              <div className="card bg-base-200 p-6 shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">🌱 Growth</h3>
                <p>
                  Continuous learning environment with mentorship and real-world
                  challenges.
                </p>
              </div>

              <div className="card bg-base-200 p-6 shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">🤝 Culture</h3>
                <p>
                  Friendly team, flexible work environment, and supportive
                  leadership.
                </p>
              </div>
            </div>
          </MyContainer>
        </section>

        <section className="py-16 bg-base-200">
          <MyContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Open Positions
            </h2>

            <div className="space-y-6">
              <div className="card bg-base-100 shadow p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    Frontend Developer (Next.js)
                  </h3>
                  <p className="opacity-70">
                    Full-time • Remote / On-site • 1+ year experience
                  </p>
                </div>
                <button className="btn btn-primary mt-4 md:mt-0">
                  Apply Now
                </button>
              </div>

              <div className="card bg-base-100 shadow p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    Backend Developer (Node.js)
                  </h3>
                  <p className="opacity-70">
                    Full-time • Dhaka • 1-2 years experience
                  </p>
                </div>
                <button className="btn btn-primary mt-4 md:mt-0">
                  Apply Now
                </button>
              </div>

              <div className="card bg-base-100 shadow p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                  <p className="opacity-70">
                    Part-time • Remote • Creative mindset required
                  </p>
                </div>
                <button className="btn btn-primary mt-4 md:mt-0">
                  Apply Now
                </button>
              </div>
            </div>
          </MyContainer>
        </section>

        <section className="pt-16 text-center">
          <MyContainer>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See Your Role?
            </h2>
            <p className="mb-6 opacity-80">
              We are always looking for talented people. Send us your CV and
              we'll get in touch when a suitable role opens.
            </p>
            <button className="btn btn-outline btn-primary">Send Resume</button>
          </MyContainer>
        </section>
      </div>
    </MyContainer>
  );
};

export default CareerPage;
