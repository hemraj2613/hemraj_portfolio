import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquareQuote, 
  Star, 
  Heart, 
  Plus, 
  CheckCircle, 
  X, 
  Building 
} from 'lucide-react';

export const Testimonials = ({
  testimonials = [],
  onAddTestimonial,
  onLikeTestimonial
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [projectRelation, setProjectRelation] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !role || !content) return;

    setSubmitting(true);
    try {
      if (onAddTestimonial) {
        await onAddTestimonial({
          name,
          role,
          company,
          content,
          rating,
          projectRelation,
        });
      }
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setModalOpen(false);
        setName('');
        setRole('');
        setCompany('');
        setContent('');
        setProjectRelation('');
      }, 1800);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#050505] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a0a0a] border border-[#1e293b] text-[#38bdf8] text-xs font-mono mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>PEER RECOMMENDATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What Engineering Leaders & Clients Say
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            Verified feedback from CTOs, Engineering Managers, and Staff Engineers who have collaborated with Hemraj.
          </p>
        </div>

        {/* Top Action Bar */}
        <div className="flex justify-end max-w-6xl mx-auto mb-8">
          <button
            id="btn-add-testimonial"
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border border-[#38bdf8]/40 text-sky-300 hover:text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#38bdf8]" />
            <span>Leave a Recommendation</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#1e293b] flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all bg-[#0a0a0a] group"
            >
              <div className="space-y-4">
                {/* Rating stars & likes */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <button
                    onClick={() => onLikeTestimonial && onLikeTestimonial(t.id)}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                    title="Endorse"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500/20 text-rose-400" />
                    <span>{t.likes || 1}</span>
                  </button>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#1e293b] flex items-center gap-3 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border border-[#1e293b] object-cover bg-[#050505]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#94a3b8] font-mono">
                    {t.role} {t.company ? `@ ${t.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Add Recommendation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel w-full max-w-lg rounded-2xl border border-[#1e293b] bg-[#050505] p-6 sm:p-8 shadow-2xl space-y-5 my-8"
            >
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
                <h3 className="font-serif text-lg font-bold text-white">
                  Add Peer Recommendation
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-white">Thank You for Your Endorsement!</h4>
                  <p className="text-xs text-[#94a3b8]">Your testimonial has been stored in the MongoDB database.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Title / Role *</label>
                      <input
                        type="text"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="e.g. VP of Engineering"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Team</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Stripe / Meta"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project / Relationship Context</label>
                    <input
                      type="text"
                      value={projectRelation}
                      onChange={(e) => setProjectRelation(e.target.value)}
                      placeholder="e.g. CloudPulse System Migration"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Recommendation Content *</label>
                    <textarea
                      required
                      rows={4}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Share your thoughts on Hemraj's architecture skills, velocity, and reliability..."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0a0a0a] border border-[#1e293b] text-xs sm:text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Rating: {rating} / 5 Stars</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 cursor-pointer"
                        >
                          <Star className={`w-5 h-5 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1e293b] flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-2 rounded-full bg-white hover:bg-slate-100 text-black text-xs font-bold shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? 'Saving...' : 'Post Recommendation'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
