import React from "react";

function Footer() {
    return (
        <footer className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* First Item: Takes full width on small screens, and half-width on larger screens */}
                <div className="rounded-[12px] p-4 flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="flex gap-4 items-center">
                        <img
                            src="/assets/group 5015.png"
                            alt="Group 5015"
                            className="w-[50px] h-[50px]"
                        />
                        <h3 className="h-[15.99px] text-[#2F2C2D] text-[14px] font-extrabold leading-[21px]">
                            Hypehire
                        </h3>
                    </div>
                    <p className="text-[#343741] font-poppins text-[14px] font-extrabold leading-[21px] text-left">
                        우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
                    </p>
                    <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                        010-0000-0000
                    </p>
                    <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                        aaaaa@naver.com
                    </p>
                </div>

                {/* Image items: On small screens, each takes half width (col-span-6) */}
                <div className="rounded-[12px] p-4 flex col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-2">
                    <img
                        src="/assets/Frame 5032.png"
                        alt="Frame 5032"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="rounded-[12px] p-4 flex col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-2">
                    <img
                        src="/assets/Frame 5035.png"
                        alt="Frame 5035"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="rounded-[12px] p-4 flex col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-2">
                    <img
                        src="/assets/Frame 5035.png"
                        alt="Frame 5036"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="rounded-[12px] p-4 flex col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-2">
                    <img
                        src="/assets/Frame 5105.png"
                        alt="Frame 5105"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="rounded-[12px] p-4 flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                        <div className="rounded-[12px] p-4 flex flex-col gap-4 col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8">
                            <p className="text-[#343741] font-poppins text-[14px] font-extrabold leading-[21px] text-left">
                                상호명
                            </p>
                            <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                                하이퍼하이어
                            </p>
                            <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                                Hyperhire India Private Limited
                            </p>
                        </div>
                        <div className="rounded-[12px] p-4 flex flex-col gap-4 col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4">
                            <p className="text-[#343741] font-poppins text-[14px] font-extrabold leading-[21px] text-left">
                                대표 CEO{" "}
                            </p>
                            <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                                김주현
                            </p>
                            <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                                Juhyun Kim
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[12px] p-4 flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4">
                    <p className="text-[#343741] font-poppins text-[14px] font-extrabold leading-[21px] text-left">
                        사업자등록번호 CIN
                    </p>
                    <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                        427-86-01187
                    </p>
                    <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                        U74110DL2016PTC290812
                    </p>
                </div>
                <div className="rounded-[12px] p-4 flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4">
                    <p className="text-[#343741] font-poppins text-[14px] font-extrabold leading-[21px] text-left">
                        주소 ADDRESS
                    </p>
                    <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                        서울특별시 강남대로 479, 지하 1층 238호
                    </p>
                    <p className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
                        D-138, Street number 11, Jagjeet Nagar, North East
                        Delhi, New Delhi, 110053 India
                    </p>
                </div>
            </div>
            <div className="font-poppins text-[13px] font-extrabold leading-[19.5px] text-left underline-offset-[0px] pl-4 h-[20px]">
                ⓒ 2023 Hyperhire
            </div>
        </footer>
    );
}

export default Footer;
