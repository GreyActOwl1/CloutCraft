export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen min-h-screen bg-gray-100 dark:bg-black overflow-x-hidden">
      {children}
    </div>
  );
}
