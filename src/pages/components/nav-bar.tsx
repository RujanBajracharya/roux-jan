import UnderlineHover from "../../components/hover-underline/hover-underline";
import { Github } from "../../components/icons/github";
import { Linkedin } from "../../components/icons/linkedin";
import "../../styles/global.css";

export function NavBar() {
  return (
    <nav className="w-full bg-transparent px-[120px] py-[24px] flex items-center justify-between fixed top-0 left-0">
      <span className="px-[32px] py-[16px] flex justify-between items-center outline-2 outline-dashed outline-outline-primary rounded-2xl bg-dark-primary">
        <h1 className="text-light-primary font-semibold">roux-jan</h1>
      </span>
      <div className="px-[32px] py-[16px] flex items-center gap-[24px] outline-2 outline-dashed outline-outline-primary rounded-2xl bg-dark-primary">
        <UnderlineHover>
          <a href="/roux-jan/" className="text-light-primary font-semibold">home</a>
        </UnderlineHover>
        <UnderlineHover>
          <a href="/roux-jan/blogs" className="text-light-primary font-semibold">blogs</a>
        </UnderlineHover>
        <UnderlineHover>
          <a href="/roux-jan/blog/about-me/" className="text-light-primary font-semibold">about me</a>
        </UnderlineHover>
        <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/rujan-bajracharya" target="_blank">
          <Linkedin />
        </a>
        <a className="hover:cursor-pointer" href="https://github.com/RujanBajracharya" target="_blank">
          <Github />
        </a>
      </div>
    </nav>
  );
}