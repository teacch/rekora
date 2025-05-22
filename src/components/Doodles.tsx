export function Doodles() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="absolute top-20 left-20 w-24 h-16 text-rekora-light-blue/10"
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,40 Q15,20 30,30 Q40,5 50,20 Q65,5 70,20 Q85,10 90,30 Q100,20 90,40 Q95,50 80,50 Q85,65 70,55 Q65,70 50,60 Q35,70 30,55 Q15,65 20,50 Q5,50 10,40 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute bottom-40 left-32 w-16 h-16 text-rekora-light-blue/10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 16.5C3 17.5 2 21.5 2 21.5C2 21.5 6 20.5 7 19C7.5 18.5 8 17 7 16C6 15 5 15.5 4.5 16.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 4C18.5 8 19.5 14 14.5 19C9.5 14 8.5 8 14.5 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 20C16.5 20 15 18 14 16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 14C13 14 10.5 16.5 9 16.5C7.5 16.5 6.5 15.5 6.5 14C6.5 12.5 9 10 9 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className="absolute top-20 right-20 w-32 h-64 text-rekora-light-blue/10"
        viewBox="0 0 100 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M80,10 Q40,50 80,100 Q40,150 80,190" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      <svg
        className="absolute bottom-20 right-32 w-16 h-16 text-rekora-light-blue/10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7.5" cy="10" r="1.5" fill="currentColor" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="10" r="1.5" fill="currentColor" />
        <circle cx="7.5" cy="15" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="15" r="1.5" fill="currentColor" />
      </svg>
    </div>
  )
}
