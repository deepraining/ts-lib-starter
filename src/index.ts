export { double, triple } from './extra';

interface Rect {
  w: number;
  h: number;
}

function area(r: Rect): number {
  const { w, h } = r;

  return w * h;
}

export default area;
