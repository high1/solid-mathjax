import { JSX } from 'solid-js';
import MathJax from 'Mathjax.mdx';

export const App = (): JSX.Element => (
  <div class="flex flex-col items-center justify-center h-full bg-amber-50">
    <MathJax
      components={{
        h1: (props) => <h1 class="text-sky-600" {...props} />,
        h2: (props) => <div class="text-9xl text-teal-700" {...props} />,
      }}
    />
  </div>
);
