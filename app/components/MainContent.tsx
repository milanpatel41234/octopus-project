"use client";
import React, { useEffect } from "react";
import Carousel from "./Carousel";

function MainContent() {
    useEffect(() => {
        setInterval(() => {
            document
                .getElementById("scroll-container")
                .scrollBy({ left: 100, behavior: "smooth" });
        }, 1000);
    }, []);
    return (
        <main className="flex flex-col gap-8 bg-[#08b4bf] w-full p-4">
            <div className="flex justify-between p-8">
                <img src="assets/logo.png" alt="logo" width="120" height="30" />
                <div className="flex gap-8 items-center hidden md:flex">
                    <div className="flex gap-4 items-center">
                        <p className="text-white">채용</p>
                        <button>
                            <img
                                src="assets/caret-down.png"
                                alt="down"
                                width="auto"
                                height="30"
                            />
                        </button>
                    </div>
                    <div>
                        <p className="text-white">해외 개발자 활용 서비스</p>
                    </div>
                </div>
                <button className="bg-white flex text-[#4A77FF] h-[36px] p-[6px_24px] gap-2.5 rounded-[8px] hidden md:block">
                    문의하기
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full">
                <div className="p-2 flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <p className="text-white w-full sm:w-[581px] text-[48px] font-[900] leading-[62.4px] text-left break-words">
                        최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                    </p>

                    <p className="text-white w-full sm:w-[361px] text-[24px] font-[900] leading-[34px] text-left break-words">
                        법률 및 인사관리 부담없이 1주일 이내에 원격으로
                        채용해보세요.
                    </p>

                    <p className="text-white w-[361px] h-[38px] text-[18px] font-[900] leading-[34px] text-left hidden md:block">
                        개발자가 필요하신가요?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full hidden md:grid">
                        <div className="hidden md:flex flex-col gap-4 col-span-12 sm:col-span-0 md:col-span-4 lg:col-span-4 border-t-2 border-white">
                            <p className="text-white  h-[27px] text-[18px] font-[900] leading-[34px] text-left">
                                평균 월 120만원
                            </p>
                            <p className="text-white  h-[24px] text-[16px] font-[900] leading-[34px] text-left">
                                평균 월 120만원
                            </p>
                        </div>
                        <div className="hidden md:flex flex-col gap-4 col-span-12 sm:col-span-0 md:col-span-4 lg:col-span-4 border-t-2 border-white">
                            <p className="text-white  h-[27px] text-[18px] font-[900] leading-[34px] text-left">
                                최대 3회 인력교체
                            </p>
                            <p className="text-white  h-[24px] text-[16px] font-[900] leading-[34px] text-left">
                                평균 월 120만원
                            </p>
                        </div>
                        <div className="hidden md:flex flex-col gap-4 col-span-12 sm:col-span-0 md:col-span-4 lg:col-span-4 border-t-2 border-white">
                            <p className="text-white  h-[27px] text-[18px] font-[900] leading-[34px] text-left">
                                평균 3일, 최대 10일
                            </p>
                            <p className="text-white  h-[24px] text-[16px] font-[900] leading-[34px] text-left">
                                급하게 사람이 필요한 경우에도 빠른 채용이
                                가능합니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <Carousel />
                </div>
            </div>
            <div className="relative hidden md:flex">
                <button
                    onClick={() =>
                        document
                            .getElementById("scroll-container")
                            .scrollBy({ left: -150, behavior: "smooth" })
                    }
                    className="absolute left-0 h-full px-2 text-black  bg-[#ffffff]  rounded"
                >
                    {"<"}
                </button>

                <div
                    id="scroll-container"
                    className="flex overflow-x-auto space-x-4 scrollbar-hide"
                >
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                    <img src="assets/Frame 12.png" alt="logo" height="30" />
                    <img src="assets/Frame 5071.png" alt="logo" height="30" />
                    <img src="assets/Frame 5072.png" alt="logo" height="30" />
                    <img src="assets/Frame 5067.png" alt="logo" height="30" />
                </div>

                <button
                    onClick={() =>
                        document
                            .getElementById("scroll-container")
                            .scrollBy({ left: 150, behavior: "smooth" })
                    }
                    className="absolute right-0 h-full px-2 text-black bg-[#ffffff] rounded"
                >
                    {">"}
                </button>
            </div>
            <div className="flex md:flex lg:hidden xl:hidden">
                <img
                    src="assets/Frame 5069.png"
                    alt="logo"
                    width="300"
                    height="50"
                />
            </div>
        </main>
    );
}

export default MainContent;
