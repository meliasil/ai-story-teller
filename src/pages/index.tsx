import Head from "next/head";
import style from "@/styles/Home.module.css";
import Header from "@/components/Molecules/Header/Header";
import WindowBox from "@/components/Organism/WindowBox/WindowBox";
import InputBox from "@/components/Molecules/InputBox/InputBox";
import { useState } from "react";
import SelectBox from "@/components/Molecules/SelectBox/SelectBox";
import { listaGeneri } from "@/constants/common";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");

  const [genere, setGenere] = useState("")

  return (
    <>
      <Head>
        <title>Ai Story Teller</title>
        <meta name="description" content="AI based app to generate stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <Header title="AI Story Teller" />
        <div className={style.content}>
          <WindowBox title="Story Params">
            <div className={style.container}>
              <InputBox
                label="Nome Protagonista:"
                value={protagonista}
                setValue={setProtagonista}
              />
              <InputBox
                label="Nome Antagonista:"
                value={antagonista}
                setValue={setAntagonista}
              />
            </div>
            <div className={style.container}>
              <SelectBox
              label="ora vediamo"
              list={listaGeneri}/>
            </div>
          </WindowBox>
        </div>
      </main>
    </>
  );
}
