// see samples in index.ts

import type Scrollbar from 'smooth-scrollbar';

export interface ComposeFunc {
  (x: number, y: number): string;
}

export type FixedElementOptions = Partial<{
  top: number;
  bottom: number;
  left: number;
  right: number;
  compose: ComposeFunc;
}>;

function defaultComposeFunc(x: number, y: number) {
  return `translate3d(${x}px, ${y}px, 0)`;
}

export function fixedElement(
  scrollbar: Scrollbar,
  target: HTMLElement,
  options: FixedElementOptions = {}
) {
  const pinOptions = {
    compose: defaultComposeFunc,
    ...options,
  };

  // make sure content element's size equals to real content's size,
  // otherwise we cannot calculate offsets correctly
  // TODO: maybe we should include this in the default styles?
  scrollbar.contentEl.style.width = scrollbar.contentEl.style.height = 'fit-content';

  // adjust positioning
  target.style.position = 'absolute';

  function pinElement() {
    const { top, bottom, left, right, compose } = pinOptions;
    const { offset, limit } = scrollbar;
    let x = 0;
    let y = 0;

    if (top !== undefined) {
      y = offset.y + top;
      target.style.top = '0px';
    } else if (bottom !== undefined) {
      y = offset.y - limit.y - bottom;
      target.style.bottom = '0px';
    }

    if (left !== undefined) {
      x = offset.x + left;
      target.style.left = '0px';
    } else if (right !== undefined) {
      x = offset.x - limit.x - right;
      target.style.right = '0px';
    }

    target.style.transform = compose(x, y);
  }

  scrollbar.addListener(pinElement);
  scrollbar.update(); // force an update
  pinElement();

  return {
    setOption(opt: FixedElementOptions = {}) {
      Object.assign(pinOptions, opt);
    },
    flush() {
      pinElement();
    },
    unpin() {
      scrollbar.removeListener(pinElement);
    },
  };
}
