import React, { lazy, Suspense } from 'react';

const LazyScores = lazy(() => import('./Scores'));

const Scores = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyScores {...props} />
  </Suspense>
);

export default Scores;
