import { links } from './constants';
import { Item } from './item';

export const Footer = () => {
  return (
    <footer className='container flex items-center justify-center gap-2.5 py-4'>
      {links.map((link, idx) => (
        <Item key={idx} {...link} />
      ))}
    </footer>
  );
};
