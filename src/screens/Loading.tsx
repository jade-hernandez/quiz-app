export function Loading() {
  return (
    <main className='mx-auto flex min-h-dvh w-full max-w-160 items-center justify-center p-4'>
      <p
        role='status'
        className='text-sm text-muted lg:text-base'
      >
        Chargement…
      </p>
    </main>
  );
}
