export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 50" {...props}>
      {/* Outer Circle */}
      <circle cx="25" cy="25" r="20" fill="#7b68ee" stroke="#7b68ee" strokeWidth="4" />

      {/* Inner Circle */}
      <circle cx="25" cy="25" r="18" fill="white" stroke="#7b68ee" strokeWidth="4" />

      {/* Letter P */}
      <text x="17" y="32" fontSize="14" fontFamily="Arial" fontWeight="900" fill="#7b68ee">
        P
      </text>

      {/* Letter N */}
      <text x="23.9" y="32" fontSize="14" fontFamily="Arial" fontWeight="900" fill="#7b68ee">
        N
      </text>
    </svg>
  );
}
