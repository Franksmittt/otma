import { SITE, SUBURBS } from "@/lib/site-config";

export function MovingCompanyJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: SITE.name,
    image: `${SITE.url}/images/otma-eco-park.jpg`,
    "@id": `${SITE.url}/#organization`,
    url: SITE.url,
    telephone: "+27-72-100-0936",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SUBURBS.map((s) => ({
      "@type": "Place",
      name: s.name,
      url: `${SITE.url}/movers-in/${s.slug}`,
    })),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "06:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "14:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(SITE.rating.value),
      reviewCount: String(SITE.rating.count),
      bestRating: String(SITE.rating.best),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
