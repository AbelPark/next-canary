import $axios from 'lib/api';
import { useQuery } from 'react-query';

async function fetchData() {
  const { data } = await $axios.get('/v2/home/art', { timeout: 5000 });
  return data;
}

export default function SuspenseTest() {
  const { data } = useQuery<any, Error>('art', fetchData, { suspense: true });

  const { responseResult } = data;

  return (
    <section>
      {responseResult.map((item: any, idx: number) => {
        return (
          <div key={idx}>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
