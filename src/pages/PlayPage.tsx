import { useState } from 'react';

const likes = [
  { label: 'Vitaly Jewelry', image: '/vitaly-jewelry.png' },
  { label: 'Pokemon White', image: '/pokemon-white.avif' },
  { label: 'Chaps CP3047', image: '/chaps-cp3047.png' },
  { label: 'Gemini Owala', image: '/gemini-owala.png' },
  { label: 'Evolv Kronos', image: '/evolv-kronos.avif' },
  { label: 'Arc and Dia', image: '/browsers.png' },
  { label: 'Dickies Belt', image: '/dickies-belt.png' },
  { label: 'Kirkland Gim', image: '/kirkland-seaweed.png' },
  { label: 'Adidas Adizero Evo SL', image: '/running-shoes.webp' },
  { label: 'Thé Noir 29', image: '/the-noir-29.webp' },
  { label: 'Darryl Hoodie', image: '/darryl-hoodie.png' },
  { label: 'Nep2une Jeans', image: '/neptune-jeans.png' },
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function PlayPage() {
  const [shuffledLikes] = useState(() => shuffle(likes));

  return (
    <section className="px-8 md:px-12 lg:px-16 pt-8 pb-24 min-h-[50vh]">
      <p className="mono text-xs text-neutral-400 tracking-widest mb-4">PLAY</p>
      <p className="text-neutral-500 leading-relaxed text-base mb-10">current favorite things + hobbies</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shuffledLikes.map((like) => (
          <div
            key={like.label}
            className="group relative overflow-hidden border border-neutral-100 rounded-md aspect-square"
          >
            {like.image && (
              <img
                src={like.image}
                alt={like.label}
                className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-contain"
              />
            )}
            <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/60 transition-colors duration-300 flex items-center justify-center p-4">
              <p className="text-sm font-medium text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {like.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
