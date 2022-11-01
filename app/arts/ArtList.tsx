import $axios from 'lib/api';

async function fetchData() {
  const res = $axios.get('/v2/home/art');
  const { data } = await res;
  return data;
}

export default async function ArtList() {
  const { responseResult } = await fetchData();

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
