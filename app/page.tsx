"use client";

import { useEffect, useState } from "react";

type Story = {
  _id: string;
  title: string;
  excerpt?: string | null;
  slug?: string | null;
  mainImageUrl?: string | null;
};

type Video = {
  _id: string;
  title: string;
  youtubeUrl?: string | null;
  description?: string | null;
  thumbnailUrl?: string | null;
};

type Gallery = {
  _id: string;
  title: string;
  description?: string | null;
  firstPhotoUrl?: string | null;
};

type Partner = {
  _id: string;
  name: string;
  website?: string | null;
  description?: string | null;
  logoUrl?: string | null;
};

type Metric = {
  _id: string;
  label: string;
  value: string;
};

type HomepageData = {
  stories: Story[];
  videos: Video[];
  galleries: Gallery[];
  partners: Partner[];
  metrics: Metric[];
};

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Get Updates");
  const [homepage, setHomepage] = useState<HomepageData>({
    stories: [],
    videos: [],
    galleries: [],
    partners: [],
    metrics: [],
  });
  const [loading, setLoading] = useState(true);
  const [activePhase, setActivePhase] = useState("flight");

  useEffect(() => {
    const loadHomepage = async () => {
      try {
        const response = await fetch("/api/homepage");
        const data = await response.json();

        setHomepage({
          stories: data.stories || [],
          videos: data.videos || [],
          galleries: data.galleries || [],
          partners: data.partners || [],
          metrics: data.metrics || [],
        });
      } catch {
        setHomepage({
          stories: [],
          videos: [],
          galleries: [],
          partners: [],
          metrics: [],
        });
      } finally {
        setLoading(false);
      }
    };

    loadHomepage();
  }, []);

  const submitLead = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, interest }),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        setName("");
        setEmail("");
        setInterest("Get Updates");
      }
    } catch {
      alert("Unable to submit form.");
    }
  };

  return (
    <main className="bg-white text-slate-900">
      <nav className="bg-white/95 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-extrabold text-2xl text-slate-950">
            The Launch Project
          </a>

          <div className="hidden md:flex gap-8 font-semibold text-slate-700">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#impact" className="hover:text-blue-700">Impact</a>
            <a href="#stories" className="hover:text-blue-700">Stories</a>
            <a href="#media" className="hover:text-blue-700">Media Hub</a>
            <a href="#partners" className="hover:text-blue-700">Partners</a>
            <a href="#join" className="hover:text-blue-700">Join</a>
          </div>

          <a
            href="#join"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-extrabold shadow"
          >
            Join the Mission
          </a>
        </div>
      </nav>

      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-bold uppercase tracking-widest mb-4">
              Leadership Development for Underserved Youth
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Launching Leaders. Building Futures.
            </h1>

            <p className="text-xl text-slate-200 mt-8 max-w-2xl">
              The Launch Project empowers first-generation and underserved youth
              through leadership labs, communication training, mentorship, and
              real-world career exploration.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#join"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-extrabold text-center"
              >
                Support the Mission
              </a>

              <a
                href="#media"
                className="border border-white/60 hover:bg-white hover:text-slate-950 text-white px-8 py-4 rounded-xl font-extrabold text-center"
              >
                View Media Hub
              </a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="bg-slate-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white">
                Leadership Isn&apos;t Taught. It&apos;s Built.
              </h2>

              <p className="text-slate-200 mt-5 text-lg">
                Students move from passive learners to active, career-ready
                leaders through hands-on simulations, storytelling, reflection,
                teamwork, and mentorship.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-8">
  {[
    {
      id: "flight",
      title: "✈ The Flight Deck",
      text: "Students begin by building trust, developing communication skills, and preparing for leadership challenges."
    },
    {
      id: "refuel",
      title: "⛽ The Refuel",
      text: "Students pause to reflect, receive coaching, strengthen confidence, and prepare for the next challenge."
    },
    {
      id: "simulation",
      title: "🚀 The Simulation",
      text: "Students put everything into practice through real-world leadership exercises and collaborative problem solving."
    }
  ].map((phase) => (
    <button
      key={phase.id}
      onClick={() => setActivePhase(phase.id)}
      className={`rounded-xl p-4 text-center font-extrabold transition-all ${
        activePhase === phase.id
          ? "bg-yellow-400 text-slate-950 shadow-lg"
          : "bg-white text-slate-950 hover:bg-slate-100"
      }`}
    >
      {phase.title}
    </button>
  ))}
</div>

<div className="mt-6 bg-white text-slate-950 rounded-xl p-6 shadow">
  {activePhase === "flight" && (
    <p>
      Students begin by building trust, developing communication skills, and preparing for leadership challenges.
    </p>
  )}

  {activePhase === "refuel" && (
    <p>
      Students pause to reflect, receive coaching, strengthen confidence, and prepare for the next challenge.
    </p>
  )}

  {activePhase === "simulation" && (
    <p>
      Students put everything into practice through real-world leadership exercises and collaborative problem solving.
    </p>
  )}
</div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold uppercase tracking-widest">
              Impact
            </p>
            <h2 className="text-5xl font-extrabold mt-3">
              Impact Dashboard
            </h2>
          </div>

          {loading ? (
            <p className="text-center text-slate-600">Loading impact metrics...</p>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {homepage.metrics.map((metric) => (
                <div
                  key={metric._id}
                  className="bg-white p-8 rounded-2xl shadow border border-slate-200 text-center"
                >
                  <h3 className="text-5xl font-extrabold text-slate-950">
                    {metric.value}
                  </h3>
                  <p className="mt-3 text-slate-700 font-semibold">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="stories" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold uppercase tracking-widest">
              Stories
            </p>
            <h2 className="text-5xl font-extrabold mt-3">
              Latest Workshop Stories
            </h2>
            <p className="text-xl text-slate-600 mt-5 max-w-3xl mx-auto">
              Recaps and student leadership moments from The Launch Project.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-slate-600">Loading latest stories...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {homepage.stories.map((story) => (
                <div
                  key={story._id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200"
                >
                  {story.mainImageUrl ? (
                    <img
                      src={story.mainImageUrl}
                      alt={story.title}
                      className="h-64 w-full object-cover"
                    />
                  ) : (
                    <div className="bg-slate-900 text-white h-64 flex items-center justify-center">
                      Workshop Story
                    </div>
                  )}

                  <div className="p-7">
                    <h3 className="text-2xl font-extrabold text-slate-950">
                      {story.title}
                    </h3>
                    <p className="mt-4 text-slate-700 leading-relaxed">
                      {story.excerpt || "Published from The Launch Project CMS."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="media" className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-bold uppercase tracking-widest">
              Media Hub
            </p>
            <h2 className="text-5xl font-extrabold mt-3">
              Videos & Photo Galleries
            </h2>
            <p className="text-xl text-slate-300 mt-5 max-w-3xl mx-auto">
              Videos and images that show the mission in action.
            </p>
          </div>

          <h3 className="text-3xl font-extrabold mb-8">Latest Videos</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {homepage.videos.map((video) => (
              <div
                key={video._id}
                className="bg-white text-slate-950 rounded-3xl shadow-lg overflow-hidden"
              >
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="bg-slate-800 text-white h-56 flex items-center justify-center">
                    Video
                  </div>
                )}

                <div className="p-7">
                  <h4 className="text-2xl font-extrabold">{video.title}</h4>
                  <p className="mt-4 text-slate-700">{video.description}</p>

                  {video.youtubeUrl && (
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      className="inline-block mt-5 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-extrabold mb-8">Photo Galleries</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {homepage.galleries.map((gallery) => (
              <div
                key={gallery._id}
                className="bg-white text-slate-950 rounded-3xl shadow-lg overflow-hidden"
              >
                {gallery.firstPhotoUrl ? (
                  <img
                    src={gallery.firstPhotoUrl}
                    alt={gallery.title}
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="bg-yellow-400 h-56 flex items-center justify-center font-bold">
                    Photo Gallery
                  </div>
                )}

                <div className="p-7">
                  <h4 className="text-2xl font-extrabold">{gallery.title}</h4>
                  <p className="mt-4 text-slate-700">{gallery.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold uppercase tracking-widest">
              Partners
            </p>
            <h2 className="text-5xl font-extrabold mt-3">
              Partner Highlights
            </h2>
            <p className="text-xl text-slate-600 mt-5 max-w-3xl mx-auto">
              Schools, mentors, sponsors, and community leaders helping students
              access real-world opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homepage.partners.map((partner) => (
              <div
                key={partner._id}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 text-center"
              >
                {partner.logoUrl && (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-28 w-28 object-cover mx-auto rounded-full mb-5 border border-slate-200"
                  />
                )}

                <h3 className="text-2xl font-extrabold text-slate-950">
                  {partner.name}
                </h3>
                <p className="mt-4 text-slate-700">{partner.description}</p>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    className="inline-block mt-5 text-blue-700 font-extrabold"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="bg-gradient-to-r from-slate-950 to-blue-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <p className="text-blue-700 font-bold uppercase tracking-widest">
              Get Involved
            </p>

            <h2 className="text-5xl font-extrabold text-slate-950 mt-3">
              Join the Mission
            </h2>

            <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
              Get updates, volunteer, become a partner, or support the next
              generation of leaders.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-5 py-4 rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-500 shadow"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="px-5 py-4 rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-500 shadow"
              />

              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="px-5 py-4 rounded-xl bg-white border-2 border-slate-300 text-slate-950 shadow"
              >
                <option>Get Updates</option>
                <option>Donate</option>
                <option>Volunteer</option>
                <option>Partner</option>
                <option>Bring This Program to My School</option>
              </select>
            </div>

            <button
              onClick={submitLead}
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-extrabold shadow"
            >
              Join the Mission
            </button>

            <p className="text-sm text-slate-500 mt-5">
              We&apos;ll only use your information to follow up about The Launch Project.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-10 text-center">
        <p className="text-xl font-extrabold">The Launch Project</p>
        <p className="text-sm text-slate-400 mt-2">
          San Diego, CA • Built by Golden Cloud Services
        </p>
      </footer>
    </main>
  );
}