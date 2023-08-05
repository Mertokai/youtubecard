"use client";

import { useRef } from "react";

export default function Home() {
  const video = useRef<HTMLVideoElement>(null);

  const Play = () => {
    console.log("play");
    if (video.current) {
      video.current.play();
    }
  };
  const Stop = () => {
    console.log("stopped");
    if (video.current) {
      video.current.pause();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="group h-1/3">
        <video
          controls
          ref={video}
          onMouseOver={Play}
          onMouseOut={Stop}
          src="video.mp4"
          className="rounded-[20px] group-hover:rounded-none w-full h-full transition-all duration-300"
        ></video>
        <div
          onClick={Play}
          className="hidden cursor-pointer transition-all duration-300 group-hover:flex md:relative bottom-[270px] left-[370px] rounded-lg w-[140px] bg-black space-x-2 items-center pl-2 justify-end"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12 fill-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
          <div className="text-gray-600 py-4 ">|</div>
          <div>
            <svg
              className="ytp-subtitles-button-icon"
              height="100%"
              version="1.1"
              viewBox="0 0 36 36"
              width="100%"
              fill-opacity="1"
            >
              <use className="ytp-svg-shadow"></use>
              <path
                d="M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 L16,17 L25,17 L25,19 L25,19 Z"
                fill="#fff"
                id="ytp-id-70"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-start w-[460px] flex space-x-3">
        <div>
          <img className="w-16 h-16 rounded-full " src="next.svg" alt="" />
        </div>
        <div className="flex-col space-x-2 py-5 items-center justify-center">
          <div className="font-bold text-lg">Video explanation</div>
          <div className="font-light text-gray-600">Mert Eyüboğlu</div>
          <div className="font-light text-gray-600">
            6.1 millon | 2 months ago
          </div>
        </div>
      </div>
    </div>
  );
}
