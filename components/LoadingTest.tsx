import $axios from 'lib/api';
import { useQuery } from 'react-query';
import SkeletonCard from 'ui/SkeletonCard';

async function fetchData() {
  const { data } = await $axios.get('/v2/home/art', { timeout: 5000 });
  return data;
}

export default function SuspenseTest() {
  const { data, isLoading } = useQuery<any, Error>('art', fetchData);

  if (isLoading)
    return (
      <>
        <SkeletonCard />
      </>
    );
  else
    return (
      <section>
        {data.responseResult.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </section>
    );
}
