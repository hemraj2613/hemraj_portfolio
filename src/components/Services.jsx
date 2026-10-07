import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Terminal,
  Network,
  Layers,
  Smartphone,
  Database,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Wrench,
  X,
  ChevronRight,
} from "lucide-react";

export const Services = ({
  services = [],
  servicesList = [],
  onSelectService,
}) => {
  const [selectedService, setSelectedService] = useState(null);

  const allServices = services.length > 0 ? services : servicesList;

  const iconMap = {
    Terminal,
    Network,
    Layers,
    Smartphone,
    Database,
    BarChart2,
  };

  const handleOpenService = (service) => {
    setSelectedService(service);

    if (onSelectService) {
      onSelectService(service);
    }
  };

  const handleCloseService = () => {
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 bg-[#050505] border-t border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                mb-4
                rounded-full
                bg-[#0a0a0a]
                border border-[#1e293b]
                text-xs
                font-mono
                text-[#38bdf8]
              "
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Engineering Services</span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Specialized Software
              <span className="text-[#38bdf8]"> Development</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                text-sm
                sm:text-base
                leading-relaxed
                text-[#94a3b8]
              "
            >
              From Django backends and REST APIs to Flutter applications,
              full-stack systems, databases, and data-driven solutions.
            </p>
          </div>

          {/* Header CTA */}
          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-white
              text-black
              text-xs
              font-bold
              hover:bg-slate-200
              transition-colors
              shrink-0
            "
          >
            Request a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* =========================================================
            SCROLL HINT
        ========================================================== */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
            Services
          </span>

          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-600">
            <span>Scroll to explore</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* =========================================================
            HORIZONTAL SERVICE CAROUSEL
        ========================================================== */}
        {allServices.length > 0 ? (
          <div
            className="
              flex
              gap-4
              overflow-x-auto
              overflow-y-hidden
              pb-5
              snap-x
              snap-mandatory
              scrollbar-none
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {allServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Terminal;

              const visibleDeliverables =
                service.deliverables?.slice(0, 2) || [];

              const remainingDeliverables = Math.max(
                (service.deliverables?.length || 0) - 2,
                0,
              );

              return (
                <motion.article
                  key={service.id || index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    flex-none

                    /* Mobile */
                    w-[85vw]

                    /* Small */
                    sm:w-[48%]

                    /* Medium */
                    md:w-[34%]

                    /* Large */
                    lg:w-[31%]

                    /* Extra large - 4 cards */
                    xl:w-[24%]

                    min-h-[320px]

                    snap-start

                    rounded-2xl
                    bg-[#0a0a0a]
                    border border-[#1e293b]
                    hover:border-[#38bdf8]/50

                    transition-all
                    duration-300

                    overflow-hidden
                  "
                >
                  {/* Top Glow */}
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-[1px]
                      bg-gradient-to-r
                      from-transparent
                      via-[#38bdf8]
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Icon + Category */}
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-[#050505]
                          border border-[#1e293b]
                          flex
                          items-center
                          justify-center
                          text-[#38bdf8]
                          group-hover:border-[#38bdf8]/40
                          group-hover:scale-105
                          transition-all
                        "
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span
                        className="
                          max-w-[130px]
                          px-2
                          py-1
                          rounded-full
                          bg-[#050505]
                          border border-[#1e293b]
                          text-[9px]
                          font-mono
                          text-[#64748b]
                          truncate
                        "
                      >
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-5">
                      <h3
                        className="
                          text-base
                          sm:text-lg
                          font-bold
                          text-white
                          leading-tight
                          group-hover:text-[#38bdf8]
                          transition-colors
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          text-[#94a3b8]
                          leading-relaxed
                          line-clamp-3
                        "
                      >
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Deliverables */}
                    {visibleDeliverables.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-[#1e293b]">
                        <div
                          className="
                            mb-3
                            text-[9px]
                            font-mono
                            font-bold
                            uppercase
                            tracking-widest
                            text-[#64748b]
                          "
                        >
                          What I Deliver
                        </div>

                        <div className="space-y-2">
                          {visibleDeliverables.map((deliverable, idx) => (
                            <div
                              key={`${deliverable}-${idx}`}
                              className="
                                  flex
                                  items-start
                                  gap-2
                                  text-[11px]
                                  text-[#94a3b8]
                                "
                            >
                              <CheckCircle2
                                className="
                                    w-3.5
                                    h-3.5
                                    shrink-0
                                    mt-0.5
                                    text-[#38bdf8]
                                  "
                              />

                              <span className="line-clamp-2">
                                {deliverable}
                              </span>
                            </div>
                          ))}
                        </div>

                        {remainingDeliverables > 0 && (
                          <button
                            type="button"
                            onClick={() => handleOpenService(service)}
                            className="
                              mt-3
                              text-[10px]
                              font-mono
                              text-[#38bdf8]
                              hover:text-white
                              transition-colors
                            "
                          >
                            +{remainingDeliverables} more
                          </button>
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    <div
                      className="
                        mt-auto
                        pt-4
                        border-t
                        border-[#1e293b]
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <button
                        type="button"
                        onClick={() => handleOpenService(service)}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          text-[11px]
                          font-semibold
                          text-white
                          hover:text-[#38bdf8]
                          transition-colors
                        "
                      >
                        View Details
                        <ArrowRight
                          className="
                            w-3.5
                            h-3.5
                            group-hover:translate-x-1
                            transition-transform
                          "
                        />
                      </button>

                      <a
                        href="#contact"
                        className="
                          text-[10px]
                          font-mono
                          text-slate-600
                          hover:text-[#38bdf8]
                          transition-colors
                        "
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* =========================================================
             EMPTY STATE
          ========================================================== */
          <div
            className="
              py-16
              text-center
              rounded-2xl
              bg-[#0a0a0a]
              border border-[#1e293b]
            "
          >
            <Wrench className="w-10 h-10 mx-auto text-slate-700 mb-4" />

            <h3 className="text-white font-semibold">No services available</h3>

            <p className="mt-2 text-sm text-slate-500">
              Services will appear here once they are added.
            </p>
          </div>
        )}
      </div>

      {/* ===========================================================
          SERVICE DETAILS MODAL
      ============================================================ */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              p-4
              bg-black/80
              backdrop-blur-md
            "
            onClick={handleCloseService}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-2xl
                max-h-[90vh]
                overflow-y-auto
                rounded-2xl
                bg-[#0a0a0a]
                border border-[#1e293b]
                shadow-2xl
              "
            >
              {/* Modal Header */}
              <div
                className="
                  sticky
                  top-0
                  z-10
                  flex
                  items-center
                  justify-between
                  gap-4
                  px-6
                  py-5
                  bg-[#0a0a0a]/95
                  backdrop-blur-md
                  border-b
                  border-[#1e293b]
                "
              >
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = iconMap[selectedService.icon] || Terminal;

                    return (
                      <div
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-[#050505]
                          border border-[#1e293b]
                          flex
                          items-center
                          justify-center
                          text-[#38bdf8]
                        "
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    );
                  })()}

                  <div>
                    <span
                      className="
                        text-[10px]
                        font-mono
                        text-[#38bdf8]
                      "
                    >
                      {selectedService.category}
                    </span>

                    <h3 className="mt-1 text-lg font-bold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseService}
                  aria-label="Close service details"
                  className="
                    w-9
                    h-9
                    shrink-0
                    rounded-full
                    bg-[#050505]
                    border border-[#1e293b]
                    flex
                    items-center
                    justify-center
                    text-slate-400
                    hover:text-white
                    hover:border-slate-600
                    transition-colors
                  "
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7">
                {/* Description */}
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-[#94a3b8]
                  "
                >
                  {selectedService.shortDesc}
                </p>

                {/* Deliverables */}
                {selectedService.deliverables?.length > 0 && (
                  <div className="mt-7">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-white">
                        Included Deliverables
                      </h4>

                      <span
                        className="
                          text-[10px]
                          font-mono
                          text-[#64748b]
                        "
                      >
                        {selectedService.deliverables.length} items
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.deliverables.map(
                        (deliverable, index) => (
                          <div
                            key={`${deliverable}-${index}`}
                            className="
                              flex
                              items-start
                              gap-3
                              p-3
                              rounded-xl
                              bg-[#050505]
                              border border-[#1e293b]
                            "
                          >
                            <CheckCircle2
                              className="
                                w-4
                                h-4
                                shrink-0
                                mt-0.5
                                text-[#38bdf8]
                              "
                            />

                            <span
                              className="
                                text-xs
                                leading-relaxed
                                text-[#94a3b8]
                              "
                            >
                              {deliverable}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Modal CTA */}
                <div
                  className="
                    mt-7
                    pt-6
                    border-t
                    border-[#1e293b]
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  <a
                    href="#contact"
                    onClick={handleCloseService}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-full
                      bg-white
                      text-black
                      text-xs
                      font-semibold
                      hover:bg-slate-200
                      transition-colors
                    "
                  >
                    Discuss This Service
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCloseService}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-full
                      border border-[#1e293b]
                      text-slate-300
                      text-xs
                      hover:text-white
                      hover:bg-[#151515]
                      transition-colors
                    "
                  >
                    Close
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
