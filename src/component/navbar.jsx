"use client";
import Image from "next/image";
import iconArrow from "@/asset/image/backarrow.svg";
import iconGlobal from "@/asset/image/global.svg";

export default function Navbar() {
  return (
    <div className="w-full h-[70px] bg-black flex items-center">
      <div className="pl-[20px] flex items-center gap-6 ">
        <div>
          <Image src={iconGlobal} />
        </div>
        <div>
          <p>คำร้องของฉัน</p>
        </div>
        <div>
          <p>ยื่นคำร้อง</p>
        </div>
        <div className="flex gap-1">
          <p>สถานะการให้บริการ</p>
          <Image
            src={iconArrow}
            className=" rotate-[120deg]"
            width={12}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
