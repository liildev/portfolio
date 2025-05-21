import { Item } from './item';
import { bottomRow, middleRow, topRow } from './constant';

export function LogoCloud() {
  return (
    <section className='space-y-3 overflow-hidden py-12 sm:space-y-4 md:space-y-6'>
      <Item direction='left' logos={topRow} />
      <Item direction='right' logos={middleRow} />
      <Item direction='left' logos={bottomRow} />
    </section>
  );
}
