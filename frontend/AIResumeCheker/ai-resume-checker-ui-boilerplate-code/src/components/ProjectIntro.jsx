import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  BrainCircuit,
  FileSearch,
  Gauge,
} from "lucide-react";

import AILogo from "@/components/layout/AILogo";

/* =========================================================
   PARTICLES
========================================================= */

const PARTICLES = [
  {
    left: "7%",
    top: "18%",
    size: 3,
    delay: 0.2,
    duration: 5.2,
  },
  {
    left: "14%",
    top: "74%",
    size: 2,
    delay: 1.1,
    duration: 6.4,
  },
  {
    left: "23%",
    top: "34%",
    size: 2,
    delay: 0.6,
    duration: 4.8,
  },
  {
    left: "31%",
    top: "83%",
    size: 3,
    delay: 1.7,
    duration: 5.8,
  },
  {
    left: "42%",
    top: "14%",
    size: 2,
    delay: 0.9,
    duration: 6.2,
  },
  {
    left: "52%",
    top: "72%",
    size: 2,
    delay: 2.1,
    duration: 5.1,
  },
  {
    left: "62%",
    top: "23%",
    size: 3,
    delay: 1.4,
    duration: 6.8,
  },
  {
    left: "71%",
    top: "82%",
    size: 2,
    delay: 0.4,
    duration: 5.7,
  },
  {
    left: "79%",
    top: "35%",
    size: 2,
    delay: 2.4,
    duration: 6.1,
  },
  {
    left: "88%",
    top: "68%",
    size: 3,
    delay: 1.8,
    duration: 5.4,
  },
  {
    left: "94%",
    top: "17%",
    size: 2,
    delay: 0.7,
    duration: 6.5,
  },
  {
    left: "5%",
    top: "51%",
    size: 2,
    delay: 2.8,
    duration: 5.9,
  },
];

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    icon: Gauge,
    label: "ATS Scoring",
  },
  {
    icon: BrainCircuit,
    label: "AI Analysis",
  },
  {
    icon: FileSearch,
    label: "Smart Insights",
  },
];

/* =========================================================
   TEAM MEMBERS
========================================================= */

const TEAM_MEMBERS = [
  "Onik",
  "Johyra Ajmayen",
  "Diya Sarker",
];

/* =========================================================
   AUTO FIT
   Makes entire content fit inside one viewport
========================================================= */

function useAutoFit(ref, padding = 18) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    function fitContent() {
      const element = ref.current;

      if (!element) return;

      const viewportHeight =
        window.visualViewport?.height ||
        window.innerHeight;

      const viewportWidth =
        window.visualViewport?.width ||
        window.innerWidth;

      /*
        offsetHeight / offsetWidth ignore transform scale,
        which is exactly what we want here.
      */
      const contentHeight =
        element.offsetHeight;

      const contentWidth =
        element.offsetWidth;

      if (!contentHeight || !contentWidth) {
        return;
      }

      const availableHeight =
        viewportHeight - padding * 2;

      const availableWidth =
        viewportWidth - padding * 2;

      const heightScale =
        availableHeight / contentHeight;

      const widthScale =
        availableWidth / contentWidth;

      /*
        Never upscale beyond original size.
      */
      const calculatedScale = Math.min(
        1,
        heightScale,
        widthScale,
      );

      /*
        Prevent content becoming absurdly tiny.
        Mobile has separate compact styles anyway.
      */
      setScale(
        Math.max(0.68, calculatedScale),
      );
    }

    const frame =
      requestAnimationFrame(fitContent);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(fitContent)
        : null;

    if (ref.current && resizeObserver) {
      resizeObserver.observe(ref.current);
    }

    window.addEventListener(
      "resize",
      fitContent,
    );

    window.visualViewport?.addEventListener(
      "resize",
      fitContent,
    );

    document.fonts?.ready?.then(() => {
      fitContent();
    });

    return () => {
      cancelAnimationFrame(frame);

      resizeObserver?.disconnect();

      window.removeEventListener(
        "resize",
        fitContent,
      );

      window.visualViewport?.removeEventListener(
        "resize",
        fitContent,
      );
    };
  }, [ref, padding]);

  return scale;
}

/* =========================================================
   PROJECT INTRO
========================================================= */

export default function ProjectIntro({
  onFinish,
  duration = 10000,
}) {
  const reduceMotion =
    useReducedMotion();

  const contentRef =
    useRef(null);

  const contentScale =
    useAutoFit(contentRef, 18);

  const [secondsLeft, setSecondsLeft] =
    useState(
      Math.max(
        1,
        Math.ceil(duration / 1000),
      ),
    );

  /* =======================================================
     AUTO FINISH
  ======================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onFinish();
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [duration, onFinish]);

  /* =======================================================
     COUNTDOWN
  ======================================================= */

  useEffect(() => {
    setSecondsLeft(
      Math.max(
        1,
        Math.ceil(duration / 1000),
      ),
    );

    const interval =
      window.setInterval(() => {
        setSecondsLeft((current) => {
          if (current <= 1) {
            return 0;
          }

          return current - 1;
        });
      }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [duration]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,

        scale:
          reduceMotion
            ? 1
            : 1.035,

        filter:
          reduceMotion
            ? "blur(0px)"
            : "blur(10px)",
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        inset-0
        z-[9999]

        h-[100svh]
        w-screen

        overflow-hidden

        bg-[#070A13]
        text-white
      "
    >
      {/* ===================================================
          BASE BACKGROUND
      =================================================== */}

      <div
        className="
          fixed
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(145deg, #050713 0%, #080D1D 30%, #0B1430 58%, #0A1022 78%, #050812 100%)",
        }}
      />

      {/* ===================================================
          LEFT VIOLET AURORA
      =================================================== */}

      <motion.div
        className="
          fixed

          -top-[25vw]
          -left-[20vw]

          h-[70vw]
          w-[70vw]

          min-h-[500px]
          min-w-[500px]

          rounded-full

          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.30) 0%, rgba(99,102,241,0.13) 35%, transparent 68%)",

          filter:
            "blur(55px)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  0,
                  100,
                  30,
                  0,
                ],

                y: [
                  0,
                  30,
                  90,
                  0,
                ],

                scale: [
                  1,
                  1.1,
                  0.96,
                  1,
                ],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===================================================
          RIGHT BLUE AURORA
      =================================================== */}

      <motion.div
        className="
          fixed

          -right-[25vw]
          -bottom-[30vw]

          h-[75vw]
          w-[75vw]

          min-h-[550px]
          min-w-[550px]

          rounded-full

          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(79,124,255,0.30) 0%, rgba(37,99,235,0.13) 38%, transparent 70%)",

          filter:
            "blur(65px)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  0,
                  -80,
                  -20,
                  0,
                ],

                y: [
                  0,
                  -70,
                  10,
                  0,
                ],

                scale: [
                  1,
                  0.94,
                  1.08,
                  1,
                ],
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===================================================
          CYAN CENTER GLOW
      =================================================== */}

      <motion.div
        className="
          fixed

          left-[35%]
          top-[35%]

          h-[420px]
          w-[420px]

          rounded-full

          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.11) 0%, transparent 68%)",

          filter:
            "blur(65px)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  -40,
                  70,
                  -40,
                ],

                y: [
                  20,
                  -50,
                  20,
                ],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===================================================
          PERSPECTIVE GRID
      =================================================== */}

      <div
        className="
          fixed

          inset-x-0
          bottom-[-25%]

          h-[65%]

          pointer-events-none
          overflow-hidden

          opacity-30
        "
        style={{
          perspective:
            "700px",

          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 38%, black 100%)",

          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 38%, black 100%)",
        }}
      >
        <motion.div
          className="
            absolute
            inset-[-40%]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,92,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.13) 1px, transparent 1px)",

            backgroundSize:
              "58px 58px",

            transform:
              "rotateX(62deg)",

            transformOrigin:
              "center center",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0px 0px",
                    "0px 58px",
                  ],
                }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* ===================================================
          PARTICLES
      =================================================== */}

      <div
        className="
          fixed
          inset-0

          overflow-hidden

          pointer-events-none
        "
      >
        {PARTICLES.map(
          (
            particle,
            index,
          ) => (
            <motion.span
              key={index}
              className="
                absolute
                rounded-full
                bg-violet-300
              "
              style={{
                left:
                  particle.left,

                top:
                  particle.top,

                width:
                  particle.size,

                height:
                  particle.size,

                boxShadow:
                  "0 0 12px rgba(167,139,250,0.85)",
              }}
              animate={
                reduceMotion
                  ? {
                      opacity:
                        0.4,
                    }
                  : {
                      opacity: [
                        0.08,
                        0.9,
                        0.08,
                      ],

                      y: [
                        0,
                        -18,
                        0,
                      ],

                      scale: [
                        0.8,
                        1.35,
                        0.8,
                      ],
                    }
              }
              transition={{
                duration:
                  particle.duration,

                delay:
                  particle.delay,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
            />
          ),
        )}
      </div>

      {/* ===================================================
          VIGNETTE
      =================================================== */}

      <div
        className="
          fixed
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.34) 100%)",
        }}
      />

      {/* ===================================================
          TOP GLOWING LINE
      =================================================== */}

      <motion.div
        className="
          fixed

          left-1/2
          top-0

          h-px
          w-[75%]
          max-w-[900px]

          -translate-x-1/2

          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,92,255,0.85), rgba(34,211,238,0.65), transparent)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [
                  0.35,
                  1,
                  0.35,
                ],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===================================================
          LEFT TOP LABEL
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.6,
          duration: 0.8,
        }}
        className="
          fixed
          left-5
          top-5

          hidden

          text-[9px]
          uppercase
          tracking-[0.22em]
          text-[#475569]

          lg:block
        "
      >
        Team Blue

        <div
          className="
            mt-1
            text-[#334155]
          "
        >
          SE Project
        </div>
      </motion.div>

      {/* ===================================================
          RIGHT TOP LABEL
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 10,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="
          fixed
          right-5
          top-5

          hidden

          text-right
          text-[9px]
          uppercase
          tracking-[0.22em]
          text-[#475569]

          lg:block
        "
      >
        AI Resume Platform

        <div
          className="
            mt-1
            text-[#334155]
          "
        >
          Presentation Mode
        </div>
      </motion.div>

      {/* ===================================================
          MAIN SCREEN
      =================================================== */}

      <main
        className="
          relative
          z-10

          flex

          h-[100svh]
          w-full

          items-center
          justify-center

          overflow-hidden

          px-3
          py-3

          sm:px-5
          sm:py-4

          lg:px-8
          lg:py-5
        "
      >
        {/* =================================================
            AUTO FIT CONTENT
        ================================================= */}

        <div
          ref={contentRef}
          className="
            relative

            mx-auto

            flex
            w-full
            max-w-[960px]

            flex-col

            items-center

            text-center

            will-change-transform
          "
          style={{
            transform:
              `scale(${contentScale})`,

            transformOrigin:
              "center center",
          }}
        >
          {/* ===============================================
              LOGO AREA
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.45,
              y: 22,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.95,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
            className="
              relative

              flex

              h-[88px]
              w-[88px]

              items-center
              justify-center

              sm:h-[100px]
              sm:w-[100px]
            "
          >
            {/* Outer orbit */}

            <motion.div
              className="
                absolute
                inset-0
                rounded-[30px]
              "
              style={{
                border:
                  "1px solid rgba(139,124,255,0.18)",

                boxShadow:
                  "inset 0 0 30px rgba(124,92,255,0.05)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate:
                        360,
                    }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span
                className="
                  absolute

                  -top-[3px]
                  left-1/2

                  h-[6px]
                  w-[6px]

                  -translate-x-1/2

                  rounded-full
                  bg-cyan-300
                "
                style={{
                  boxShadow:
                    "0 0 12px rgba(34,211,238,1)",
                }}
              />
            </motion.div>

            {/* Inner orbit */}

            <motion.div
              className="
                absolute
                inset-[10px]

                rounded-[24px]
              "
              style={{
                border:
                  "1px dashed rgba(79,124,255,0.22)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate:
                        -360,
                    }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Logo glow */}

            <motion.div
              className="
                absolute
                inset-[18px]

                rounded-full
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(124,92,255,0.45), transparent 70%)",

                filter:
                  "blur(15px)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [
                        0.85,
                        1.2,
                        0.85,
                      ],

                      opacity: [
                        0.35,
                        0.9,
                        0.35,
                      ],
                    }
              }
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div
              className="
                relative
                z-10
              "
            >
              <AILogo size={60} />
            </div>
          </motion.div>

          {/* ===============================================
              PROJECT TYPE
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.65,
            }}
            className="
              mt-4

              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-violet-400/20

              bg-white/[0.05]

              px-3.5
              py-1.5

              backdrop-blur-xl

              sm:mt-5
              sm:px-4
              sm:py-2
            "
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 35px rgba(0,0,0,0.15)",
            }}
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [
                        0,
                        15,
                        -10,
                        0,
                      ],

                      scale: [
                        1,
                        1.15,
                        1,
                      ],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles
                size={13}
                className="
                  text-violet-300
                "
              />
            </motion.div>

            <span
              className="
                text-[9px]

                font-semibold

                uppercase

                tracking-[0.16em]

                text-violet-100

                sm:text-[11px]
                sm:tracking-[0.2em]
              "
            >
              Software Engineering Project
            </span>
          </motion.div>

          {/* ===============================================
              PRESENTED BY
          =============================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.55,
            }}
            className="
              mt-4

              text-[9px]

              font-semibold

              uppercase

              tracking-[0.34em]

              text-[#64748B]

              sm:mt-5
              sm:text-[10px]
            "
          >
            Presented by
          </motion.p>

          {/* ===============================================
              TEAM NAME
          =============================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
              filter:
                "blur(7px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter:
                "blur(0px)",
            }}
            transition={{
              delay: 1,
              duration: 0.75,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
            className="
              mt-1.5

              font-display

              text-xl

              font-semibold

              tracking-[-0.03em]

              text-white

              sm:text-2xl
              md:text-[27px]
            "
          >
            Team{" "}

            <span
              className="
                text-transparent
              "
              style={{
                background:
                  "linear-gradient(100deg, #C4B5FD, #818CF8, #67E8F9)",

                WebkitBackgroundClip:
                  "text",

                backgroundClip:
                  "text",
              }}
            >
              Blue
            </span>
          </motion.h2>

          {/* ===============================================
              TEAM MEMBERS
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 0.75,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
            className="
              mt-3

              flex
              max-w-full
              flex-wrap

              items-center
              justify-center

              gap-2

              rounded-2xl

              border
              border-white/[0.07]

              bg-white/[0.035]

              px-3
              py-2

              backdrop-blur-xl

              sm:gap-3
              sm:rounded-full
              sm:px-5
            "
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {TEAM_MEMBERS.map(
              (
                name,
                index,
              ) => (
                <div
                  key={name}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  {index !== 0 && (
                    <span
                      className="
                        hidden
                        text-violet-400
                        sm:inline
                      "
                    >
                      •
                    </span>
                  )}

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 7,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        1.5 +
                        index *
                          0.17,

                      duration:
                        0.45,
                    }}
                    className="
                      rounded-full

                      bg-white/[0.035]

                      px-2.5
                      py-1

                      text-[11px]

                      font-medium

                      text-[#CBD5E1]

                      sm:bg-transparent
                      sm:px-0
                      sm:py-0
                      sm:text-sm
                    "
                  >
                    {name}
                  </motion.span>
                </div>
              ),
            )}
          </motion.div>

          {/* ===============================================
              DIVIDER
          =============================================== */}

          <div
            className="
              relative

              my-4

              h-px
              w-[150px]

              sm:my-5
              sm:w-[210px]
            "
          >
            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                delay: 1.8,
                duration: 0.9,
              }}
              className="
                absolute
                inset-0

                origin-center
              "
              style={{
                background:
                  "linear-gradient(90deg, transparent, #7C5CFF, #4F7CFF, #22D3EE, transparent)",
              }}
            />

            <motion.span
              className="
                absolute

                left-1/2
                top-1/2

                h-[5px]
                w-[5px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-white
              "
              style={{
                boxShadow:
                  "0 0 14px rgba(124,92,255,1)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [
                        0.8,
                        1.6,
                        0.8,
                      ],

                      opacity: [
                        0.5,
                        1,
                        0.5,
                      ],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* ===============================================
              PROJECT TITLE LABEL
          =============================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2,
              duration: 0.45,
            }}
            className="
              text-[9px]

              font-semibold

              uppercase

              tracking-[0.32em]

              text-[#64748B]

              sm:text-[10px]
            "
          >
            Project Title
          </motion.p>

          {/* ===============================================
              MAIN TITLE
          =============================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.95,
              filter:
                "blur(15px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter:
                "blur(0px)",
            }}
            transition={{
              delay: 2.2,
              duration: 1,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
            className="
              relative

              mt-1.5

              font-display

              text-[42px]

              font-semibold

              leading-none

              tracking-[-0.06em]

              sm:text-6xl

              md:text-7xl

              lg:text-[78px]
            "
          >
            <span
              className="
                text-white
              "
            >
              Resu
            </span>

            <motion.span
              className="
                text-transparent
              "
              style={{
                background:
                  "linear-gradient(100deg, #C4B5FD 0%, #7C5CFF 25%, #818CF8 50%, #4F7CFF 72%, #67E8F9 100%)",

                backgroundSize:
                  "220% 100%",

                WebkitBackgroundClip:
                  "text",

                backgroundClip:
                  "text",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%",
                      ],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Mate
            </motion.span>

            {/* Title glow */}

            <motion.span
              aria-hidden="true"
              className="
                absolute

                -inset-x-8
                top-1/2
                -z-10

                h-10

                -translate-y-1/2

                rounded-full

                blur-3xl
              "
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(124,92,255,0.20), rgba(79,124,255,0.20), transparent)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [
                        0.35,
                        0.8,
                        0.35,
                      ],

                      scaleX: [
                        0.8,
                        1.08,
                        0.8,
                      ],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>

          {/* ===============================================
              DESCRIPTION
          =============================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.8,
              duration: 0.65,
            }}
            className="
              mt-3

              max-w-[580px]

              px-2

              text-xs

              leading-5

              text-[#94A3B8]

              sm:mt-4
              sm:text-sm
              sm:leading-6

              md:text-[15px]
            "
          >
            AI-powered resume analysis,
            ATS scoring and intelligent
            optimization designed to help
            candidates build stronger
            resumes.
          </motion.p>

          {/* ===============================================
              FEATURES
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 3.2,
              duration: 0.65,
            }}
            className="
              mt-4

              flex
              max-w-full
              flex-wrap

              items-center
              justify-center

              gap-2
            "
          >
            {FEATURES.map(
              ({
                icon: Icon,
                label,
              }) => (
                <motion.div
                  key={label}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -2,
                          scale:
                            1.025,
                        }
                  }
                  className="
                    flex
                    items-center
                    gap-1.5

                    rounded-full

                    border
                    border-white/[0.07]

                    bg-white/[0.035]

                    px-3
                    py-1.5

                    text-[10px]

                    font-medium

                    text-[#AAB4C5]

                    backdrop-blur-lg

                    sm:text-[11px]
                  "
                >
                  <Icon
                    size={12}
                    className="
                      text-violet-300
                    "
                  />

                  {label}
                </motion.div>
              ),
            )}
          </motion.div>

          {/* ===============================================
              ENTER BUTTON
          =============================================== */}

          <motion.button
            type="button"
            onClick={onFinish}
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 3.55,
              duration: 0.6,
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                    scale: 1.025,
                  }
            }
            whileTap={{
              scale: 0.98,
            }}
            className="
              group

              relative

              mt-4

              flex

              h-11

              items-center
              justify-center

              gap-2

              overflow-hidden

              rounded-full

              border
              border-white/10

              px-5

              text-xs

              font-semibold

              text-white

              outline-none

              focus-visible:ring-2
              focus-visible:ring-violet-400/70

              sm:mt-5
              sm:h-12
              sm:px-7
              sm:text-sm
            "
            style={{
              background:
                "linear-gradient(135deg, #7C5CFF 0%, #6366F1 45%, #4F7CFF 100%)",

              boxShadow:
                "0 16px 40px -14px rgba(79,124,255,0.75)",
            }}
          >
            {/* Button shimmer */}

            <motion.span
              aria-hidden="true"
              className="
                absolute

                inset-y-0

                w-[40%]

                skew-x-[-20deg]
              "
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.24), transparent)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      left: [
                        "-60%",
                        "130%",
                      ],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: "easeInOut",
              }}
            />

            <span
              className="
                relative
                z-10
              "
            >
              Enter ResuMate
            </span>

            <ArrowRight
              size={15}
              className="
                relative
                z-10

                transition-transform
                duration-200

                group-hover:translate-x-1
              "
            />
          </motion.button>

          {/* ===============================================
              COUNTDOWN
          =============================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 3.9,
              duration: 0.55,
            }}
            className="
              mt-2.5

              flex

              items-center

              gap-2

              text-[10px]

              text-[#64748B]

              sm:mt-3
              sm:text-[11px]
            "
          >
            <span
              className="
                relative

                flex

                h-2
                w-2

                items-center
                justify-center
              "
            >
              <motion.span
                className="
                  absolute

                  h-full
                  w-full

                  rounded-full

                  bg-cyan-400
                "
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [
                          1,
                          2.1,
                          1,
                        ],

                        opacity: [
                          0.8,
                          0,
                          0.8,
                        ],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              <span
                className="
                  relative

                  h-1.5
                  w-1.5

                  rounded-full

                  bg-cyan-300
                "
              />
            </span>

            <span>
              Auto-launching in{" "}

              <strong
                className="
                  font-semibold
                  text-[#A8B3C7]
                "
              >
                {secondsLeft}s
              </strong>
            </span>
          </motion.div>
        </div>
      </main>

      {/* ===================================================
          BOTTOM PROGRESS TRACK
      =================================================== */}

      <div
        className="
          fixed

          bottom-0
          left-0
          right-0

          z-20

          h-[3px]

          bg-white/[0.04]
        "
      >
        <motion.div
          className="
            h-full
          "
          style={{
            background:
              "linear-gradient(90deg, #7C5CFF 0%, #6366F1 35%, #4F7CFF 68%, #22D3EE 100%)",

            boxShadow:
              "0 0 16px rgba(79,124,255,0.8)",
          }}
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration:
              duration / 1000,

            ease:
              "linear",
          }}
        />
      </div>
    </motion.div>
  );
}