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
    <main className="text-slate-900">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-900">
            The Launch Project
          </div>

          <div className="hidden md:flex gap-8 font-medium text-slate-700">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#impact" className="hover:text-blue-700">Impact</a>
            <a href="#stories" className="hover:text-blue-700">Stories</a>
            <a href="#media" className="hover:text-blue-700">Media Hub</a>
            <a href="#partners" className="hover:text-blue-700">Partners</a>
            <a href="#join" className="hover:text-blue-700">Join</a>
          </div>

          <a
            href="#join"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold"
          >
            Join the Mission
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
            Empowering first-generation and underserved youth through leadership
            development, communication training, mentorship, and real-world
            career exploration.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
            >
              Support the Mission
            </a>

            <a
              href="#partners"
              className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-slate-900"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
<section className="bg-slate-900 text-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-bold mb-6 text-white">
      Leadership Isn&apos;t Taught. It&apos;s Built.
    </h2>

    <p className="text-xl text-gray-200 max-w-5xl">
      Through the Launchpad Leadership Lab, students move from passive learners
      to active, career-ready leaders through hands-on simulations,
      storytelling, communication practice, and mentorship.
    </p>
  </div>
</section>

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

          {loading ? (
            <p className="text-center text-slate-500">Loading impact metrics...</p>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {homepage.metrics.map((metric) => (
                <div key={metric._id} className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-4xl font-bold">{metric.value}</h3>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="stories" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Latest Workshop Stories
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Stories, recaps, and student leadership moments from The Launch Project.
        </p>

        {loading ? (
          <p className="text-center text-slate-500">Loading latest stories...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {homepage.stories.map((story) => (
              <div key={story._id} className="bg-white rounded-lg shadow overflow-hidden">
                {story.mainImageUrl ? (
                  <img
                    src={story.mainImageUrl}
                    alt={story.title}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="bg-slate-800 text-white h-48 flex items-center justify-center">
                    Workshop Story
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{story.title}</h3>
                  <p className="mt-3">
                    {story.excerpt || "Published from The Launch Project CMS."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="media" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Media Hub</h2>

          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Videos and photo galleries that show the mission in action.
          </p>

          <h3 className="text-3xl font-bold mb-6">Latest Videos</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {homepage.videos.map((video) => (
              <div key={video._id} className="bg-white rounded-lg shadow overflow-hidden">
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="bg-slate-800 text-white h-48 flex items-center justify-center">
                    Video
                  </div>
                )}

                <div className="p-6">
                  <h4 className="text-2xl font-bold">{video.title}</h4>
                  <p className="mt-3">{video.description}</p>
                  {video.youtubeUrl && (
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      className="inline-block mt-4 text-blue-700 font-bold"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-6">Photo Galleries</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {homepage.galleries.map((gallery) => (
              <div key={gallery._id} className="bg-white rounded-lg shadow overflow-hidden">
                {gallery.firstPhotoUrl ? (
                  <img
                    src={gallery.firstPhotoUrl}
                    alt={gallery.title}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="bg-yellow-400 h-48 flex items-center justify-center font-bold">
                    Photo Gallery
                  </div>
                )}

                <div className="p-6">
                  <h4 className="text-2xl font-bold">{gallery.title}</h4>
                  <p className="mt-3">{gallery.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Partner Highlights
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          We work with schools, mentors, sponsors, and community leaders to give
          students real-world exposure, professional networks, and leadership
          opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {homepage.partners.map((partner) => (
            <div key={partner._id} className="bg-white rounded-lg shadow p-6 text-center">
              {partner.logoUrl && (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-24 w-24 object-cover mx-auto rounded-full mb-4"
                />
              )}

              <h3 className="text-2xl font-bold">{partner.name}</h3>
              <p className="mt-3">{partner.description}</p>

              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  className="inline-block mt-4 text-blue-700 font-bold"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="join"
        className="bg-gradient-to-r from-slate-900 to-blue-900 py-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Join the Mission
            </h2>

            <p className="mt-6 text-xl text-slate-700">
              Get updates, volunteer, become a partner, or support the next
              generation of leaders.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 shadow"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 shadow"
              />

              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 shadow"
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
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold shadow"
            >
              Join the Mission
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-8 text-center">
        <p className="font-bold">The Launch Project</p>
        <p className="text-sm text-slate-400 mt-2">
          Built by Golden Cloud Services
        </p>
      </footer>
    </main>
  );
}