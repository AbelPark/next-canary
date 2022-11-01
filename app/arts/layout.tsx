export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>이곳은 아트레이아웃 입니다?</h1>
      <div>{children}</div>
    </>
  );
}
