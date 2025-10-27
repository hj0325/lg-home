import { useState, useEffect } from "react";
import Head from "next/head";

export default function Test() {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTouch = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Test - 새로운 구체 효과</title>
        <meta name="description" content="새로운 구체 효과 테스트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="interlaced-background">
        {step === 1 && (
          <div className={`text-container ${isTransitioning ? 'fade-out' : ''}`}>
            <h1 className="main-title">
              안녕하세요,<br />
              오늘 기분은 어떠신가요?
            </h1>
            <p className="sub-text">한 단어로 표현해주세요!</p>
          </div>
        )}
        
        {step === 2 && (
          <div className={`text-container ${isTransitioning ? '' : 'fade-in'}`}>
            <h1 className="main-title">
              환영합니다,<br />
            </h1>
            <p className="sub-text">오늘의 무드를 알려주세요!</p>
          </div>
        )}
        
        <div id="js-wrapper" className={`wrapper ${isLoaded ? 'is-loaded' : ''}`}>
          <div className="circle bright"></div>
          <div className="circle colorful"></div>
        </div>
        
        <div className="grain-overlay"></div>
        
        {step === 1 && !isTransitioning && (
          <button className="touch-button" onClick={handleTouch}>
            TOUCH
          </button>
        )}
      </div>
    </>
  );
}
