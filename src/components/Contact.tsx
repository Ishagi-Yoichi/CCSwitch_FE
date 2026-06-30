import React, { useState } from "react";
import type { ReactElement } from "react";

export default function ContactPage(): ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form logic here
    setSubmitted(true);
  };

  const contactReasons = [
    { text: "General inquiries and support", icon: "💬" },
    { text: "Content corrections or update requests", icon: "📝" },
    { text: "Feedback and suggestions", icon: "💡" },
    { text: "Collaboration opportunities", icon: "🤝" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/30 pt-16 pb-28 relative overflow-hidden font-sans selection:bg-blue-500/10 selection:text-blue-600">
      {/* Ambient background glows matching your platform theme */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100/20 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/10 via-emerald-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-20">
        {/* Section 1: Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-3 block">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                CC Switch
              </span>
            </h1>
            <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              Have questions, suggestions, or feedback about our website
              content? We’d love to hear from you. Reach out whether you want to
              report an issue, suggest improvements, or share setup
              configurations.
            </p>

            {/* Inline list of contact focus points */}
            <ul className="mt-8 space-y-3">
              {contactReasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-xs md:text-sm text-slate-600 font-semibold bg-white/60 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-sm"
                >
                  <span className="text-base">{reason.icon}</span>
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Interactive Form Layout */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:border-slate-200/60 transition-all duration-300">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-2xl mx-auto border border-emerald-100">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Message sent successfully!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto font-medium">
                    Thank you for reaching out. We aim to respond as quickly as
                    possible and continuously improve the resources we provide
                    for the community.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-blue-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-tight">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-tight">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-tight">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-tight">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more about your feedback or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md shadow-blue-100 transition-all duration-150"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Alternative Contact Vectors (Inspired by image_55baf7.png) */}
        <section className="bg-slate-100/50 border border-slate-200/40 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">
              Prefer direct structural tracking?
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              For configuration patches, you can drop into repository issues or
              read standard threads.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/faq"
              className="bg-white border border-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-slate-50 shadow-sm transition-all"
            >
              Go to FAQs
            </a>
            <a
              href="https://github.com/farion1231/cc-switch"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-slate-800 shadow-sm transition-all"
            >
              Open Hub Issue
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
