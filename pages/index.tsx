import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>이곳은 아트페이지 입니다</h1>
      <Link href="/arts">아트페이지로 이동</Link>
      <Link href="/my">마이페이지로 이동</Link>
    </>
  );
}
