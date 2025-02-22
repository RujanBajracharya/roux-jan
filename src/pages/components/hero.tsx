export function Hero() {
  return (
    <main className="h-[640px] bg-dark-primary flex flex-col justify-center items-start gap-[32px] px-[120px]">
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <h1 className="bg-gradient-to-r from-[#636FA4] to-[#E8CBC0] inline-block text-transparent bg-clip-text text-5xl font-bold h-[55px]">hi, i am rujan</h1>
        <p className="font-medium text-gray-400 text-xl">i write random stuff here. this site is not finished yet.</p>
      </div>
      <a className="px-[24px] py-[12px] bg-gradient-to-r from-[#636FA4] to-[#E8CBC0] inline-block text-dark-primary font-semibold rounded-2xl hover:cursor-pointer" href="/blog/about-me">learn more about me</a>
    </main>
  )
}