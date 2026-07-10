import { NavLink } from 'react-router-dom';

const TABS = [
  { to: '/', label: 'ABOUT' },
  { to: '/work', label: 'WORK' },
  { to: '/play', label: 'PLAY' },
  { to: '/sidequests', label: 'SIDEQUESTS' },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-end px-8 md:px-12 lg:px-16 py-6">
      <div className="flex items-center gap-6">
        {TABS.map((tab, i) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === '/'}
            style={{ animationDelay: `${i * 0.08}s` }}
            className={({ isActive }) =>
              `tactile fade-in mono text-xs tracking-widest transition-colors ${
                isActive
                  ? 'text-neutral-900 underline-link'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
