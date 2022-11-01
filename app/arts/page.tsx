import AlertPage from 'components/AlertPage';
import $axios from 'lib/api';
import { Suspense } from 'react';
import SkeletonCard from 'ui/SkeletonCard';
import ArtList from './ArtList';

export default function Page() {
  return (
    <>
      <h1>이곳은 아트페이지 입니다</h1>
      <Suspense fallback={<SkeletonCard isLoading={true} />}>
        {/* @ts-ignore */}
        <ArtList />
      </Suspense>
    </>
  );
}
