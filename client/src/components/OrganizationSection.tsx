import { Button } from "@/components/ui/button";
import React from "react";

const OrganizationSection = () => {
  return (
    <div className="relative z-[1] container-custom mt-20">
      <img
        src="/자산12.png"
        alt="Decorative asset 12"
        className="absolute top-0 right-6 w-12 h-14 opacity-80 md:w-16 md:h-20 md:-top-6 md:right-20 lg:right-40 xl:right-72 2xl:right-96 z-[-1] "
      />
      <img
        src="/자산14.png"
        alt="Decorative asset 14"
        className="absolute bottom-80 left-6 w-14 h-14 opacity-80 md:w-16 md:h-16 md:bottom-44 md:left-12 lg:left-20 xl:left-40 2xl:left-72 z-[1] "
      />
      <h2 className="text-2xl font-bold text-center mb-8">주최 및 주관</h2>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <div className="h-[4rem] w-[16rem] bg-zinc-200 rounded-lg flex items-center justify-center bg-[url('/footer-logo.png')] bg-contain bg-center"></div>
              <p className="font-medium">주최: 문화체육관광부</p>
            </div>

            <div className="hidden md:block text-3xl text-zinc-300">|</div>

            <div className="flex flex-col items-center gap-2">
              <div className="h-[2.55rem] w-[18rem] flex items-center justify-center overflow-hidden bg-[url('/artelogo2.png')] bg-top bg-contain bg-center"></div>
              <p className="font-medium">주관: 한국문화예술교육진흥원</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-zinc-800 text-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">한국문화예술교육진흥원</h3>
            <address className="not-italic mt-2 text-zinc-300">
              (03926) 서울특별시 마포구 상암산로 76 YTN 뉴스퀘어 11-12층
              한국문화예술교육진흥원
            </address>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/10 p-3 h-full rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <div>
              <p className="font-medium">한국문화예술교육진흥원</p>
              <p className="text-zinc-300">Tel : 02-6209-5900</p>
              <p className="text-zinc-300">이메일 : contact@arte.or.kr</p>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="bg-primary text-white border-white/20 hover:bg-white/20"
          >
            <a
              href="https://www.arte.or.kr/index.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              진흥원 홈페이지 방문
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSection;
