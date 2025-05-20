import { useMemo } from "react";

export function EdukidsDoodles() {
  const doodles = [
    {
      name: "Rocket",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-rekora-light-blue/10"
        >
          <path d="M4.5 16.5C3 17.5 2 21.5 2 21.5C2 21.5 6 20.5 7 19C7.5 18.5 8 17 7 16C6 15 5 15.5 4.5 16.5Z" />
          <path d="M14.5 4C18.5 8 19.5 14 14.5 19C9.5 14 8.5 8 14.5 4Z" />
          <path d="M16.5 20C16.5 20 15 18 14 16.5" />
          <path d="M13 14C13 14 10.5 16.5 9 16.5C7.5 16.5 6.5 15.5 6.5 14C6.5 12.5 9 10 9 10" />
        </svg>
      ),
    },
    {
      name: "Atom",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-rekora-light-blue/10"
        >
          <circle cx="12" cy="12" r="2" />
          <ellipse
            cx="12"
            cy="12"
            rx="7"
            ry="3"
            transform="rotate(45 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="7"
            ry="3"
            transform="rotate(-45 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "Microscope",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-rekora-light-blue/10"
        >
          <path d="M9 21h6l3-6-5-3v-3" />
          <circle cx="9" cy="15" r="2" />
          <path d="M6 18l3-3" />
        </svg>
      ),
    },
    {
      name: "DNA",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-rekora-light-blue/10"
        >
          <path d="M7 4c1.5 4 4.5 4 6 8s4.5 4 6 8" />
          <path d="M17 4c-1.5 4-4.5 4-6 8s-4.5 4-6 8" />
          <line x1="9" y1="8" x2="15" y2="16" />
          <line x1="15" y1="8" x2="9" y2="16" />
        </svg>
      ),
    },
    {
      name: "Pi",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-rekora-light-blue/10"
        >
          <path d="M6 4v16" />
          <path d="M6 4h12" />
          <path d="M18 4v16" />
        </svg>
      ),
    },
  ];

  const positions = useMemo(() => {
    // Mostly left positions, only one right position
    const spots = [
      { top: "0%", left: "10%" },
      { top: "0%", left: "45%" },
      { bottom: "10%", left: "0%" },
      { top: "20%", left: "1%" },
      { top: "4%", right: "15%" }, // Only one on right side
    ];
    return spots.sort(() => 0.5 - Math.random()); // shuffle a bit
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {positions.map((pos, i) => {
        const doodle = doodles[i % doodles.length];
        return (
          <div
            key={doodle.name + i}
            className="absolute text-rekora-light-blue/40"
            style={pos}
          >
            {doodle.svg}
          </div>
        );
      })}
    </div>
  );
}
