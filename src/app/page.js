"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/component/navbar";
import { Fascinate } from "next/font/google";

export default function Home() {
  const [complaintText, setComplaintText] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailOrPhoneNumberError, setEmailOrPhoneNumberError] = useState(false);
  const [complaintTextError, setComplaintTextError] = useState(false);

  const handleTextChange = (event) => {
    if (event.target.value.length <= 1000) {
      setComplaintText(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const data = {
      fullName: fullName,
      contract: emailOrPhoneNumber,
      complaintText: complaintText,
    };

    let hasError = false;

    if (!data.fullName) {
      setFullNameError(true);
      hasError = true;
    } else {
      setFullNameError(false);
    }

    if (
      !data.contract ||
      (!emailRegex.test(data.contract) && !phoneNumberRegex.test(data.contract))
    ) {
      setEmailOrPhoneNumberError(true);
      hasError = true;
    } else {
      setEmailOrPhoneNumberError(false);
    }

    if (!data.complaintText) {
      setComplaintTextError(true);
      hasError = true;
    } else {
      setComplaintTextError(false);
    }

    if (!hasError) {
      alert(JSON.stringify(data.complaintText));
      console.log(data);
    } else {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
  };
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <form className=" bg-white w-screen h-screen " onSubmit={handleSubmit}>
        <div className="text-black flex flex-col items-center pt-[50px]">
          <div className=" flex flex-col items-center w-[50%] justify-center ">
            <h1 className=" font-bold text-[30px]">ส่งคำร้องเรียน</h1>
            <p className=" text-center">
              ไม่ว่าคุณจะพบกับปัญหาอะไร เราก็พร้อมที่จะช่วยเหลือคุณเสมอ!
              ส่งคำร้องขอ! ตราบใดที่คำร้องขอของคุณไม่ได้หล่นหายไปในประตูมิติ
              เราจะทำการติดต่อกลับหาคุณโดยเร็วที่สุด
            </p>
          </div>
          <div className="w-[70%] pt-[50px]">
            <p className=" font-extralight">รายละเอียด</p>
            <hr />
          </div>
          <div className="w-[30%] pt-[50px] flex flex-col gap-6">
            <div>
              <p>
                ชื่อ-นามสกุล <span className=" text-red-500">*</span>
              </p>
              <input
                maxLength={70}
                className={`border-2 w-[550px] h-[50px] pl-[10px] ${
                  fullNameError ? "border-red-500 border" : ""
                }`}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <p>
                อีเมล / เบอร์โทรศัพท์ <span className=" text-red-500">*</span>
              </p>
              <input
                className={`border-2 w-[550px] h-[50px] pl-[10px] ${
                  emailOrPhoneNumberError ? "border-red-500 border" : ""
                }`}
                placeholder="example@hotmail.com / 088-8888888"
                onChange={(event) => {
                  setEmailOrPhoneNumber(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <p>
                คำอธิบาย <span className=" text-red-500">*</span>
              </p>
              <textarea
                maxLength={1000}
                value={complaintText}
                onChange={handleTextChange}
                className={`border-2 w-[550px] h-[250px] pl-[10px] ${
                  complaintTextError ? "border-red-500 border" : ""
                }`}
              ></textarea>
            </div>
            <button
              className="w-[100px] h-[50px] bg-red-400 text-black rounded-2xl"
              type="submit"
            >
              ส่ง
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
