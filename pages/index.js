import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  const handleTouch = () => {
    setStep(2);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter' && name.trim()) {
      setStep(3);
    }
  };

  return (
    <>
      <Head>
        <title>인터레이스 그라데이션</title>
        <meta name="description" content="아름다운 인터레이스 그라데이션 배경" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {step === 1 && (
        <div className="interlaced-background">
          <div className="text-container">
            <h1 className="main-title">
              안녕하세요,<br />
              오늘 기분은 어떠신가요?
            </h1>
            <p className="sub-text">한 단어로 표현해주세요!</p>
          </div>
          <div className="sphere-3d"></div>
          <div className="grain-overlay"></div>
          <button className="touch-button" onClick={handleTouch}>
            TOUCH
          </button>
        </div>
      )}
      
      {step === 2 && (
        <div className="interlaced-background">
          <div className="input-container">
            <label htmlFor="nameInput" className="input-label">이름을 입력해주세요</label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={handleNameChange}
              onKeyPress={handleNameSubmit}
              placeholder="이름"
              className="name-input"
              autoFocus
            />
          </div>
          <div className="sphere-3d"></div>
          <div className="grain-overlay"></div>
        </div>
      )}
      
      {step === 3 && (
        <div className="interlaced-background">
          <div className="text-container">
            <h1 className="main-title">
              환영합니다. {name}님,<br />
            </h1>
            <p className="sub-text">오늘의 무드를 알려주세요!</p>
          </div>
          <div className="sphere-3d"></div>
          <div className="grain-overlay"></div>
        </div>
      )}
    </>
  );
}
