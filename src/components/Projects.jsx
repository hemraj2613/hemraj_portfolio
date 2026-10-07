import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderGit2,
  ExternalLink,
  Github,
  X,
  CheckCircle2,
  ArrowUpRight,
  Star,
} from "lucide-react";

import { initialProjects } from "../../server/db.js";

export const Projects = ({
  projects = initialProjects,
  onLikeProject,
  onViewProject,
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // DYNAMIC FILTERS

  const filters = useMemo(() => {
    const categories = [
      ...new Set(projects.map((project) => project.category).filter(Boolean)),
    ];

    return ["All", ...categories];
  }, [projects]);

  // FILTER PROJECTS

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  // RESET FILTER IF CATEGORY NO LONGER EXISTS

  useEffect(() => {
    if (!filters.includes(activeFilter)) {
      setActiveFilter("All");
    }
  }, [filters, activeFilter]);

  // OPEN MODAL

  const handleOpenModal = (project) => {
    setSelectedProject(project);

    if (onViewProject) {
      onViewProject(project.id);
    }
  };

  // CLOSE MODAL

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // ESC KEY + BODY SCROLL

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);

      const originalOverflow = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // RENDER

  return (
    <section
      id="projects"
      className="
        relative
        py-24
        bg-[#050505]
        border-t
        border-[#1e293b]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}

        <div className="mb-12">
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
              border
              border-[#1e293b]
              text-xs
              font-mono
              text-[#38bdf8]
            "
          >
            <FolderGit2 className="w-3.5 h-3.5" />

            <span>My Projects</span>
          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              sm:text-base
              text-slate-400
              leading-relaxed
            "
          >
            A collection of web, mobile, backend, and data-driven projects built
            using modern technologies and practical software engineering
            principles.
          </p>
        </div>

        {/* FILTERS */}

        <div
          className="
            flex
            gap-2
            overflow-x-auto
            pb-3
            mb-10
            scrollbar-none
          "
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            const count =
              filter === "All"
                ? projects.length
                : projects.filter((project) => project.category === filter)
                    .length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  whitespace-nowrap
                  border
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-white text-black border-white font-semibold shadow-lg"
                      : "bg-[#0a0a0a] text-slate-400 border-[#1e293b] hover:text-white hover:border-slate-600"
                  }
                `}
              >
                <span>{filter}</span>

                <span
                  className={`
                    min-w-5
                    h-5
                    px-1.5
                    flex
                    items-center
                    justify-center
                    rounded-full
                    text-[10px]
                    ${
                      isActive
                        ? "bg-black/10 text-black"
                        : "bg-[#151515] text-slate-500"
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/*  PROJECT GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-[#0a0a0a]
                  border
                  border-[#1e293b]
                  hover:border-[#38bdf8]/40
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* PROJECT IMAGE*/}

                <div
                  className="
                    relative
                    aspect-video
                    overflow-hidden
                    bg-slate-900
                  "
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div
                      className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        bg-[#0f172a]
                      "
                    >
                      <FolderGit2
                        className="
                          w-12
                          h-12
                          text-slate-600
                        "
                      />
                    </div>
                  )}

                  {/* Gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />

                  {/* Category */}

                  {project.category && (
                    <span
                      className="
                        absolute
                        top-4
                        left-4
                        px-3
                        py-1
                        rounded-full
                        bg-black/80
                        backdrop-blur-md
                        border
                        border-[#1e293b]
                        text-[11px]
                        font-mono
                        text-[#38bdf8]
                      "
                    >
                      {project.category}
                    </span>
                  )}

                  {/* Featured */}

                  {project.featured && (
                    <span
                      className="
                        absolute
                        top-4
                        right-4
                        flex
                        items-center
                        gap-1.5
                        px-3
                        py-1
                        rounded-full
                        bg-white/95
                        text-black
                        text-[10px]
                        font-semibold
                      "
                    >
                      <Star
                        className="
                          w-3
                          h-3
                          fill-current
                        "
                      />
                      Featured
                    </span>
                  )}
                </div>

                {/* CARD CONTENT*/}

                <div className="p-6">
                  {/* Title */}

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      group-hover:text-[#38bdf8]
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Short Title */}

                  {project.shortTitle &&
                    project.shortTitle !== project.title && (
                      <p
                        className="
                          mt-1
                          text-xs
                          font-mono
                          text-[#38bdf8]/70
                        "
                      >
                        {project.shortTitle}
                      </p>
                    )}

                  {/* Tagline */}

                  {project.tagline && (
                    <p
                      className="
                        mt-2
                        text-xs
                        font-medium
                        text-slate-500
                      "
                    >
                      {project.tagline}
                    </p>
                  )}

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-sm
                      text-slate-400
                      leading-relaxed
                      line-clamp-3
                    "
                  >
                    {project.description ||
                      project.tagline ||
                      "Project details coming soon."}
                  </p>

                  {/* Technologies */}

                  {project.technologies?.length > 0 && (
                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                        mt-5
                      "
                    >
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="
                              px-2.5
                              py-1
                              rounded-lg
                              bg-[#050505]
                              border
                              border-[#1e293b]
                              text-[10px]
                              font-mono
                              text-slate-300
                            "
                        >
                          {tech}
                        </span>
                      ))}

                      {project.technologies.length > 6 && (
                        <span
                          className="
                            px-2.5
                            py-1
                            rounded-lg
                            text-[10px]
                            font-mono
                            text-slate-500
                          "
                        >
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* CARD BUTTONS*/}

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-3
                      mt-6
                      pt-5
                      border-t
                      border-[#1e293b]
                    "
                  >
                    {/* View Details */}

                    <button
                      type="button"
                      onClick={() => handleOpenModal(project)}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-white
                        text-black
                        text-xs
                        font-semibold
                        hover:bg-slate-200
                        transition-colors
                      "
                    >
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {/* External Links */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      {/* GitHub */}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="
                            flex
                            items-center
                            gap-2
                            px-3
                            py-2
                            rounded-full
                            border
                            border-[#1e293b]
                            text-slate-300
                            hover:text-white
                            hover:bg-[#151515]
                            hover:border-slate-600
                            transition-colors
                            text-xs
                          "
                        >
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      )}

                      {/* Live Demo */}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo of ${project.title}`}
                          className="
                            flex
                            items-center
                            gap-2
                            px-3
                            py-2
                            rounded-full
                            border
                            border-[#1e293b]
                            text-[#38bdf8]
                            hover:text-white
                            hover:bg-[#151515]
                            hover:border-[#38bdf8]/40
                            transition-colors
                            text-xs
                          "
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* EMPTY STATE */}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              flex
              flex-col
              items-center
              justify-center
              py-20
              text-center
            "
          >
            <FolderGit2
              className="
                w-10
                h-10
                text-slate-700
                mb-4
              "
            />

            <h3
              className="
                text-white
                font-semibold
              "
            >
              No projects found
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >
              Try selecting another project category.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="
                mt-5
                px-4
                py-2
                rounded-full
                bg-white
                text-black
                text-xs
                font-semibold
                hover:bg-slate-200
                transition-colors
              "
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>

      {/* PROJECT DETAILS MODAL*/}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
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
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-3xl
                max-h-[90vh]
                overflow-y-auto
                bg-[#0a0a0a]
                border
                border-[#1e293b]
                rounded-2xl
                shadow-2xl
              "
            >
              {/* MODAL IMAGE */}

              <div className="relative">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="
                      w-full
                      aspect-video
                      object-cover
                    "
                  />
                ) : (
                  <div
                    className="
                      w-full
                      aspect-video
                      flex
                      items-center
                      justify-center
                      bg-[#0f172a]
                    "
                  >
                    <FolderGit2
                      className="
                        w-16
                        h-16
                        text-slate-600
                      "
                    />
                  </div>
                )}

                {/* Image Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-transparent
                    to-transparent
                  "
                />

                {/* Close Button */}

                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label="Close project details"
                  className="
                    absolute
                    top-4
                    right-4
                    p-2
                    rounded-full
                    bg-black/80
                    backdrop-blur-md
                    text-white
                    border
                    border-white/10
                    hover:bg-black
                    transition-colors
                  "
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Featured */}

                {selectedProject.featured && (
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-1.5
                      rounded-full
                      bg-white
                      text-black
                      text-xs
                      font-semibold
                    "
                  >
                    <Star
                      className="
                        w-3.5
                        h-3.5
                        fill-current
                      "
                    />
                    Featured Project
                  </div>
                )}
              </div>

              {/* MODAL CONTENT*/}

              <div className="p-6 sm:p-8">
                {/* Category */}

                <span
                  className="
                    text-xs
                    font-mono
                    text-[#38bdf8]
                  "
                >
                  {selectedProject.category}
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-2
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                  "
                >
                  {selectedProject.title}
                </h3>

                {/* Tagline */}

                {selectedProject.tagline && (
                  <p
                    className="
                      mt-3
                      text-sm
                      font-medium
                      text-slate-500
                    "
                  >
                    {selectedProject.tagline}
                  </p>
                )}

                {/* Description */}

                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-slate-400
                  "
                >
                  {selectedProject.description || selectedProject.tagline}
                </p>

                {/*  KEY FEATURES */}

                {selectedProject.features?.length > 0 && (
                  <div className="mt-8">
                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-white
                        mb-4
                      "
                    >
                      Key Features
                    </h4>

                    <div
                      className="
                        grid
                        sm:grid-cols-2
                        gap-3
                      "
                    >
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={`${feature}-${index}`}
                          className="
                              flex
                              items-start
                              gap-2
                              text-sm
                              text-slate-400
                            "
                        >
                          <CheckCircle2
                            className="
                                w-4
                                h-4
                                text-[#38bdf8]
                                shrink-0
                                mt-0.5
                              "
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TECHNOLOGIES*/}

                {selectedProject.technologies?.length > 0 && (
                  <div className="mt-8">
                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-white
                        mb-3
                      "
                    >
                      Technologies
                    </h4>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                              px-3
                              py-1.5
                              rounded-lg
                              bg-[#050505]
                              border
                              border-[#1e293b]
                              text-xs
                              font-mono
                              text-[#38bdf8]
                            "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* ACTION BUTTONS */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mt-8
                    pt-6
                    border-t
                    border-[#1e293b]
                  "
                >
                  {/* GitHub */}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
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
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}

                  {/* Live Demo */}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2.5
                        rounded-full
                        border
                        border-[#1e293b]
                        text-[#38bdf8]
                        text-xs
                        hover:text-white
                        hover:bg-[#151515]
                        hover:border-[#38bdf8]/40
                        transition-colors
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  {/* Like */}

                  {onLikeProject && (
                    <button
                      type="button"
                      onClick={() => onLikeProject(selectedProject.id)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2.5
                        rounded-full
                        border
                        border-[#1e293b]
                        text-slate-300
                        text-xs
                        hover:text-white
                        hover:bg-[#151515]
                        transition-colors
                      "
                    >
                      Like Project
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
