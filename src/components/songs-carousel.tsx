import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Atom, Disc3 } from "lucide-react";
import useMeasure from "react-use-measure";

const favouriteSongs = [
  { title: "So Hot You're Hurting My Feelings", link: "https://open.spotify.com/track/5B6Kjha6RRIMWGN7zGsAaT?si=967f973fb27a4735", artists: "Caroline Polachek" },
  { title: "Charger", link: "https://open.spotify.com/track/3InNdtWYQV1Wx81qST5rU1?si=3224a7bd868f4194", artists: "ELIO, Charli XCX" },
  { title: "Buttered Up", link: "https://open.spotify.com/track/76qG2dFFvnWtTFfYMiAFWC?si=df7792b7932a4c2f", artists: "Sycco" },
  { title: "Enything", link: "https://open.spotify.com/track/2UKoazaZ4EJHGIa2UJRcPO?si=c50f94b66cf4442e", artists: "quickly, quickly" },
  { title: "Constant Repeat", link: "https://open.spotify.com/track/0U9ltIN4q3aBKGZDZq5cAW?si=f340d56ec60448fb", artists: "Charli XCX" },
  { title: "Lion Heart", link: "https://open.spotify.com/track/6EF8CAfIYXxjYQ5YRe4mMi?si=92478eb0b815446d", artists: "DROELOE, Lisa van Nes" },
  { title: "Roadside Flowers", link: "https://open.spotify.com/track/0S6xsdmMHpByJoMuN9l44K?si=f214fac11d4640dc", artists: "DROELOE, Iris Penning" },
  { title: "Open Blinds", link: "https://open.spotify.com/track/6e6N3W0Xd3iJOJxUL3bkJr?si=477c0066edf744bb", artists: "DROELOE" },
];

const SongsCarousel = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })

    return controls.stop;
  }, [xTranslation, width]);

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };
  return (
    <div className="overflow-hidden w-full relative">
      <motion.div className="flex scrollbar-hide whitespace-nowrap gap-x-3" ref={ref} style={{ x: xTranslation }}>
        {[...favouriteSongs, ...favouriteSongs].map((song, index) => (
          <div
            className="relative group p-[1px] rounded-md bg-gradient-to-tr from-[#25262A] via-[#1F2126] to-[#313236] text-white transition-all duration-150 ease-out min-w-[300px] max-w-[300px]"
          >
            <div className="absolute inset-0 rounded-md p-[2px] bg-gradient-to-r from-[#636FA4] to-[#E8CBC0] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            <a href={song.link} className="relative z-10 bg-card p-[20px] rounded-md flex gap-[12px] h-full w-full" target="_blank">
              <div className="p-[10px] rounded-sm bg-inner-card flex items-center justify-center w-fit">
                <Disc3 className="w-[24px] h-[24px] text-light-primary" />
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <h6 className="text-md font-medium w-full text-ellipsis">"{truncateTitle(song.title, 22)}"</h6>
                <p className="text-sm h-full overflow-hidden text-ellipsis line-clamp-1">{song.artists}</p>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SongsCarousel;
