import { Link } from 'react-router-dom';

const items = [
  {
    title: 'Constellation Software Workflow Automation',
    tag: 'Internship',
    year: '2026',
    image: '/CSI-Gif-2026_NoLoop_2.gif',
    link: '/under-construction',
    fit: 'contain' as const,
    bg: '#2547C8',
  },
  {
    title: 'Robotics + Geospatial Analytics Research',
    tag: 'Project',
    year: '2024',
    image: '/spot.gif',
    link: 'https://ieeexplore.ieee.org/document/10534979',
  },
  {
    title: 'Cane Tags + Braille Business Cards',
    tag: 'Project',
    year: '2024',
    image: '/cane-tag.gif',
    link: '/under-construction',
    fit: 'contain' as const,
  },
];

export default function WorkPage() {
  return (
    <section className="px-8 md:px-12 lg:px-16 pt-8 pb-24 min-h-[50vh]">
      <p className="mono text-xs text-neutral-400 tracking-widest mb-10">WORK</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {items.map((item, i) => {
          const isInternal = item.link.startsWith('/');
          const CardTag = isInternal ? Link : 'a';
          const linkProps = isInternal
            ? { to: item.link }
            : { href: item.link, target: '_blank', rel: 'noopener noreferrer' };

          return (
            <CardTag
              key={item.title}
              {...(linkProps as any)}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="tactile-card fade-in group block"
            >
              <div
                className="overflow-hidden rounded-md border border-neutral-100 aspect-[16/10] mb-3"
                style={{ backgroundColor: item.bg ?? '#ffffff' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                />
              </div>
              <p className="font-semibold text-sm tracking-tight group-hover:underline">{item.title}</p>
              <p className="mono text-xs text-neutral-400 mt-0.5">
                {item.tag} · {item.year}
              </p>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}
