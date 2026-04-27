import Image from 'next/image';

const partners = [
  { name: 'TurboRater', logo: '/logos/turborater.png', role: 'Rating Engine' },
  { name: 'Momentum by NowCerts', logo: '/logos/momentum-nowcerts.png', role: 'AMS & CRM' },
  { name: 'IVANS', logo: '/logos/ivans.png', role: 'Carrier Downloads' },
  { name: 'Gail', logo: '/logos/gail.png', role: 'Voice AI' },
];

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-10">
          Powered by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-3">
              <div className="h-14 flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={56}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
