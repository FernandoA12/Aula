import { useState } from "react";

export default function Home() {
  const [classNameBotao, setClassNameBotao] = useState("text-zinc-500");
  const [textBotao, setTextBotao] = useState("Ligar");
  const [srcImage, setSrcImage] = useState("/off.png");

  function ligar() {
    setSrcImage("/on.png");
    setTextBotao("Desligar");
    setClassNameBotao("text-white bg-zinc-500");
  }

  function desligar() {
    setSrcImage("/off.png");
    setTextBotao("Ligar");
    setClassNameBotao("text-zinc-500");
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src={srcImage} alt="lampada" />
      <button
        onClick={() => {
          if (textBotao === "Desligar") {
            desligar();
          } else {
            ligar();
          }
        }}
        className={`border border-zinc-500 rounded-md p-5 ${classNameBotao} `}
      >
        {textBotao}
      </button>
    </div>
  );
}
