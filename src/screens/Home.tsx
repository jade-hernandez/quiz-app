export function Home() {
  return (
    <main className='flex min-h-dvh flex-col gap-3 p-4'>
      <header className='flex'>
        <span className='-rotate-2 rounded-lg bg-js px-3 py-1 display text-base leading-display shadow-sticker border-sticker'>
          Quiz App
        </span>
      </header>
      <div className='flex flex-col gap-3'>
        <p className='self-start rounded-full bg-chip px-3 text-xs font-bold border-sticker'>
          JavaScript et React · en français
        </p>
        <h1 className='display text-3xl leading-display'>
          Révise JavaScript et React,{" "}
          <span className='rounded-lg bg-js box-decoration-clone px-1'>
            une question à&nbsp;la&nbsp;fois.
          </span>
        </h1>
        <p className='text-sm'>
          Des questions corrigées et expliquées pour consolider les bases.
        </p>
      </div>
      <p className='mt-auto text-center text-xs text-muted'>
        Sans compte · tes scores restent sur ton appareil
      </p>
    </main>
  );
}
