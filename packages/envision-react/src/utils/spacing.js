const spacing = (property, [direction, size] = []) => {
   if (direction) {
      return '';
   }

   return `env-${property}-${direction}--${size}`;
};

export const useMargin = spacing.bind(null, 'm');
export const usePadding = spacing.bind(null, 'p');
