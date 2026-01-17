"use client";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

import { cn } from "./lib/utils";

export const dynamic = "force-static";

const LandingPage = () => {
  const circles = useMemo(() => Array.from({ length: 14 }), []);

  useGSAP(() => {
    gsap.fromTo(
      [".paragraph", ".buttons"],
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        delay: 3,
        y: 0,
      },
    );
  }, []);

  return (
    <>
      <LandingPageNavbar />
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#e8e9c9]">
        <div className="flex flex-col items-center justify-center overflow-hidden h-screen w-full">
          <div
            className="flex items-center justify-center w-full gap-8 text-8xl font-bold text-[#228D57]"
            style={{
              zIndex: 999,
            }}
          >
            <HeadingAnimation word="Control" />
            <span>&</span>
            <HeadingAnimation word="Manage" />
          </div>
          <div
            className="flex items-center justify-center w-full gap-8 text-8xl font-bold text-[#228D57]"
            style={{
              zIndex: 999,
            }}
          >
            <HeadingAnimation word="Your" />
            <HeadingAnimation word="Money" />
          </div>
          <p
            className="mt-10 max-w-[375px] text-center paragraph"
            style={{ zIndex: 99 }}
          >
            Track spending in real time, set smart goals, and build financial
            habits that grow your future.
          </p>
          <div
            className="flex items-center justify-center mt-10 gap-8 buttons"
            style={{ zIndex: 99 }}
          >
            <span>About us</span>
            <button className="bg-[#242424] text-white px-6 py-2 rounded-full cursor-pointer">
              Get started
            </button>
          </div>
          {circles.map((_, idx) => (
            <Circle idx={idx} key={idx} />
          ))}
        </div>
        <div
          className="w-full flex flex-col bg-[#e8e9c9] pb-75"
          style={{
            zIndex: 999,
          }}
        >
          <Marquee className="bg-[#228D57] py-10" autoFill>
            <div className="flex gap-10 pl-10">
              <div className="flex items-center justify-center gap-10">
                <span className="text-6xl font-medium text-[#E8E9C9]">
                  Control
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                >
                  <path
                    d="M58 25.6183L46.0009 25.6183L57.0865 21.0265L54.4983 14.7779L43.4127 19.3698L51.8973 10.8852L47.1148 6.10266L38.6302 14.5873L43.2221 3.50167L36.9735 0.913458L32.3817 11.9991V0L25.6183 0L25.6183 11.9991L21.0265 0.913458L14.7779 3.50167L19.3698 14.5873L10.8852 6.10266L6.10266 10.8852L14.5873 19.3698L3.50167 14.7779L0.913458 21.0265L11.9991 25.6183L0 25.6183L0 32.3817H11.9991L0.913458 36.9735L3.50167 43.2221L14.5873 38.6302L6.10266 47.1148L10.8852 51.8973L19.3698 43.4127L14.7779 54.4983L21.0265 57.0865L25.6183 46.0009L25.6183 58H32.3817V46.0009L36.9735 57.0865L43.2221 54.4983L38.6302 43.4127L47.1148 51.8973L51.8973 47.1148L43.4127 38.6302L54.4983 43.2221L57.0865 36.9735L46.0009 32.3817H58V25.6183Z"
                    fill="#E8E9C9"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-10">
                <span className="text-6xl font-medium text-[#E8E9C9]">
                  Manage
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="58"
                  viewBox="0 0 64 58"
                  fill="none"
                >
                  <path
                    d="M63.8 25.6183L40.8806 25.6183L57.0871 10.8852L51.8263 6.10266L35.6199 20.836V0L28.1801 0L28.1801 20.836L11.9737 6.10266L6.71293 10.8852L22.9194 25.6183L0 25.6183L0 32.3817L22.9194 32.3817L6.71293 47.1148L11.9737 51.8973L28.1801 37.1642L28.1801 58H35.6199V37.1642L51.8263 51.8973L57.0871 47.1148L40.8806 32.3817H63.8V25.6183Z"
                    fill="#E8E9C9"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-10">
                <span className="text-6xl font-medium text-[#E8E9C9]">
                  Spend
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                >
                  <path
                    d="M38.7187 0L0 0L0 19.2813L25.0849 19.2813L0 44.3662L13.6338 58L38.7187 32.9151V58H58L58 19.2813V0L38.7187 0Z"
                    fill="#E8E9C9"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-10">
                <span className="text-6xl font-medium text-[#E8E9C9]">
                  Save
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                >
                  <path
                    d="M58 29C42.3357 36.3651 36.3651 42.3357 29 58C21.6349 42.3357 15.6643 36.3651 0 29C15.6643 21.6349 21.6349 15.6643 29 0C36.3651 15.6643 42.3357 21.6349 58 29Z"
                    fill="#E8E9C9"
                  />
                </svg>
              </div>
            </div>
          </Marquee>
          <div className="w-full flex max-w-300 mx-auto flex-col mt-30">
            <h2 className="text-6xl font-bold max-w-[400px] w-full">
              Financial Management At its
              <span className="text-[#228D57] underline ml-4">peak.</span>
            </h2>
            <div className="w-full md:flex-row md:justify-between md:gap-24 flex flex-col justify-between mt-15">
              <div className="flex flex-col max-w-[460px] w-full">
                <p>
                  <span className="font-bold mr-1">
                    Ledgerly is built with powerful tools that help you
                    understand,
                  </span>
                  organize, and grow your money. Finances should give you
                  clarity and control, not confusion and stress that hold you
                  back.
                </p>
                <div className="flex flex-col w-full mt-10 gap-8">
                  <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-center gap-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M20 20V10L30 0H40V10L30 20H20Z"
                          fill="#228D57"
                        />
                        <path
                          d="M20 30V20H10L20 10L10 0H0V20H10L0 30V40H10L20 30Z"
                          fill="#228D57"
                        />
                        <path d="M20 30L30 40H40V20H30L20 30Z" fill="#228D57" />
                      </svg>
                      <p className="text-[35px] font-semibold">
                        <span className="text-[#228D57]">Organized</span> and
                        clean.
                      </p>
                    </div>
                    <div className="pl-16">
                      <p className="text-justify">
                        <span className="font-bold">
                          Keeps everything easy.
                        </span>{" "}
                        keep your workspace calm and easy to navigate. Design
                        should clear the way for action and understanding, not
                        overwhelm you with noise or confusing layouts that
                        interrupt your flow.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-center gap-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.71429 17.1429H0L11.4286 5.71429H22.8571V0L34.2857 11.4286V22.8571H40L28.5714 34.2857H17.1429V40L5.71429 28.5714V17.1429ZM22.8571 11.4286H34.2857L22.8571 22.8571H28.5714V34.2857L17.1429 22.8571V28.5714H5.71429L17.1429 17.1429H11.4286V5.71429L22.8571 17.1429V11.4286Z"
                          fill="#FF6E3C"
                        />
                      </svg>
                      <p className="text-[35px] font-semibold">
                        <span className="text-[#228D57]">No hassle</span>, in
                        instant.
                      </p>
                    </div>
                    <div className="pl-16">
                      <p className="text-justify">
                        <span className="font-bold">
                          moves fast so you can act without waiting or dealing
                          with complicated steps.
                        </span>{" "}
                        we make it minimal and instant, not slow you down with
                        friction or confusing processes that break your
                        momentum.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-center gap-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30 10H40V0H30L20 10V0H10L0 10V20H10V30H0V40H10L20 30V40H30L40 30V20H30V10ZM20 20V10H10V20H20ZM20 20H30V30H20V20Z"
                          fill="#4187F5"
                        />
                      </svg>
                      <p className="text-[35px] font-semibold">
                        <span className="text-[#228D57]">Complexity</span> feel
                        easy.
                      </p>
                    </div>
                    <div className="pl-16">
                      <p className="text-justify">
                        <span className="font-bold">
                          turns complex financial data into clear visuals that
                          are easy to understand and simple to explore.
                        </span>{" "}
                        Information should empower your decisions, not overwhelm
                        you with dense numbers that hide what matters most.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img src="/pattern.svg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HeadingAnimation = ({
  word,
  className,
}: {
  word: string;
  className?: string;
}) => {
  const wordArray = useMemo(() => word.split(""), [word]);
  const selectors = wordArray.map((_, idx) => `.char-${idx}`);

  useGSAP(() => {
    gsap.fromTo(
      selectors,
      { y: 100 },
      { y: 0, delay: 0.2, duration: 1, ease: "power4.out", stagger: 0.1 },
    );
  }, []);

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      {wordArray.map((l, idx) => (
        <span key={idx} className={`char-${idx}`}>
          {l}
        </span>
      ))}
    </div>
  );
};

const LandingPageNavbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".nav",
      {
        y: -100,
        opacity: 0.5,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        delay: 2,
      },
    );
  });
  return (
    <nav
      className="w-full flex justify-center items-center bg-white fixed top-0 left-0 px-10 py-4 nav"
      style={{
        zIndex: 9999,
      }}
    >
      <div className="ml-auto flex items-center justify-center gap-8">
        <span>About us</span>
        <span>Pricing</span>
        <button className="bg-[#242424] text-white px-6 py-2 rounded-full cursor-pointer">
          Start now
        </button>
      </div>
    </nav>
  );
};

const Circle = ({ idx }: { idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        delay: 0.2 * idx,
        opacity: 0.4,
        scale: 1,
        duration: 0.5,
      },
    );
  }, []);

  const offset = (13 - idx) * 40;
  return (
    <div
      key={idx}
      ref={ref}
      className="circle border rounded-full absolute left-[50%] border-[#85BB65] top-[50%]"
      style={{
        width: 80 * (idx + 1),
        height: 80 * (idx + 1),
        transform: `translate(-50%, calc(-50% + ${offset}px))`,
      }}
    ></div>
  );
};

export default LandingPage;
