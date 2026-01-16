import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section  className="w-full min-h-screen bg-[#020817] px-4 py-16 max-[700px]: px-14">
      <div id='contact' className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        
        {/* LEFT – FORM */}
        <div className="bg-[#0b1225] rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-indigo-400 mb-6">
            Send me a message
          </h2>

          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-gray-300">Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 rounded-md bg-[#020817] border border-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full mt-1 rounded-md bg-[#020817] border border-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-300">Subject *</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full mt-1 rounded-md bg-[#020817] border border-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message *</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project or idea..."
                className="w-full mt-1 rounded-md bg-[#020817] border border-gray-700 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition text-white py-2 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT – INFO */}
        <div className="space-y-6">
          
          {/* CARD */}
          <InfoCard icon={<Mail />} title="Email" text="rohanvivoy28@gmail.com" />
          <InfoCard icon={<Phone />} title="Phone" text="+91 7992407946" />
          <InfoCard icon={<MapPin />} title="Location" text="Chandauli,UP,India" />

          {/* SOCIAL */}
          <div className="bg-[#0b1225] rounded-2xl p-6 shadow-lg">
            <h3 className="text-indigo-400 font-semibold mb-4">
              Connect with me
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
             <a href="https://github.com/TechRoh5/"><Social icon={<Github />} label="GitHub" value="Techroh5.github.io" /></a> 
             <br />
             <a href="https://www.instagram.com/rohans_k__?igsh=MWFha3pkd3RrODVkZQ=="> <Social icon={<Instagram />} label="Instagram" value="Rohan__k" /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

/* REUSABLE COMPONENTS */

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-[#0b1225] rounded-2xl p-5 flex gap-4 items-center shadow-lg">
    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-sm text-white">{text}</p>
    </div>
  </div>
);

const Social = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <span className="text-indigo-400">{icon}</span>
    <span>{label}</span>
    <span className="text-gray-400">{value}</span>
  </div>
);
