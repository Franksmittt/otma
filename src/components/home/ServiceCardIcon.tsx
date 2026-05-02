type Props = { href: string; className?: string };

/** Simple line icons for service cards on the home page. */
export function ServiceCardIcon({ href, className = "h-8 w-8" }: Props) {
  const stroke = { fill: "none" as const, stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (href) {
    case "/services/house-removals":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "/services/long-distance":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "/services/packing":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "/services/cleaning":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "/services/storage":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "/services/crate-rentals":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case "/services/pet-relocation":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "/services/vehicle-transport":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M14 16V5a1 1 0 00-1-1H5a2 2 0 00-2 2v4.5M14 16h5l3 3v-3a2 2 0 00-2-2h-1M14 16H9m5 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0m8 0a2 2 0 11-4 0" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
}
