export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>루트 레이아웃입니다?!</h1>
      <div>{children}</div>
    </>
  );
}
