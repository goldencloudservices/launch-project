export default function Home() {
  return (
    <main>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-900">
            The Launch Project
          </div>

          <div className="hidden md:flex gap-8 font-medium text-slate-700">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#impact" className="hover:text-blue-700">Impact</a>
            <a href="#media" className="hover:text-blue-700">Media Hub</a>
            <a href="#donate" className="hover:text-blue-700">Donate</a>
            <a href="#partners" className="hover:text-blue-700">Partner</a>
          </div>

          <a
            href="#donate"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold"
          >
            Donate
          </a>
        </div>
      </nav>

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold">The Launch Project</h1>

          <p className="text-2xl mt-6">
            Launching Leaders. Building Futures. Fueling the Mission.
          </p>

          <p className="text-lg mt-8 max-w-3xl mx-auto">
            Empowering first-generation and underserved youth through
            leadership development, communication training, mentorship,
            and real-world career exploration.
          </p>

          <a
            href="#donate"
            className="inline-block mt-10 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
          >
            Support the Mission
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">
          Leadership Isn't Taught. It's Built.
        </h2>

        <p className="text-lg">
          Through the Launchpad Leadership Lab, students move from passive
          learners to active, career-ready leaders through hands-on simulations,
          storytelling, communication practice, and mentorship.
        </p>
      </section>

      <section id="impact" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Impact Dashboard
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-4xl font-bold">120+</h3>
              <p>Students Served</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-4xl font-bold">35</h3>
              <p>Leadership Labs</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-4xl font-bold">18</h3>
              <p>Community Partners</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-4xl font-bold">500+</h3>
              <p>Volunteer Hours</p>
            </div>
          </div>
        </div>
      </section>

      <section id="media" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">Media Hub</h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Grassroots stories, workshop recaps, photo galleries, and videos that
          show the mission in action.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-slate-800 text-white h-48 flex items-center justify-center">
              Video Recap
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Launchpad Leadership Lab</h3>
              <p className="mt-3">
                A multi-cam recap from a student leadership workshop.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-yellow-400 h-48 flex items-center justify-center font-bold">
              Photo Gallery
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Workshop Moments</h3>
              <p className="mt-3">
                Photos from leadership labs, simulations, and student activities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-slate-200 h-48 flex items-center justify-center">
              Student Story
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Crew Member Spotlight</h3>
              <p className="mt-3">
                Personal stories that connect donors to the mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="bg-gradient-to-r from-slate-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Join the Mission
            </h2>

            <p className="mt-6 text-xl text-slate-700">
              Get updates on student success stories, leadership labs, and
              opportunities to help.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 w-full md:w-96 shadow"
              />

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold shadow">
                Join the Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Partner With Us
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto">
          We work with schools, mentors, sponsors, and community leaders to give
          students real-world exposure, professional networks, and leadership
          opportunities.
        </p>
      </section>
    </main>
  );
}