import SuspenseTest from 'components/SuspenseTest';
import { Suspense } from 'react';
import SkeletonCard from 'ui/SkeletonCard';

export default function Arts() {
  return (
    <>
      <h1>이곳은 아트페이지</h1>
      <Suspense fallback={<SkeletonCard />}>
        <SuspenseTest />
      </Suspense>
    </>
  );
}
