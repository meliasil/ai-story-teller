import Head from "next/head";
import style from "@/styles/Home.module.scss";
import Header from "@/components/Molecules/Header/Header";
import WindowBox from "@/components/Organism/WindowBox/WindowBox";
import InputBox from "@/components/Molecules/InputBox/InputBox";
import { useState } from "react";
import SelectBox from "@/components/Molecules/SelectBox/SelectBox";
import { listaGeneri } from "@/constants/common";
import Button from "@/components/Atoms/Button/Button";
import {
  GenerateContentCandidate,
  GoogleGenerativeAI,
} from "@google/generative-ai";
import SwitchBox from "@/components/Molecules/SwitchBox/SwitchBox";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [genere, setGenere] = useState("");

  const [response, setResponse] = useState("");

  const [pegi18, setPegi18] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError(false);

    const prompt = `genera un racconto ${genere} con protagonista ${protagonista} e antagonista ${antagonista}`;


      if (
        protagonista.trim().length > 0 &&
        antagonista.trim().length > 0 &&
        genere.trim().length > 0
      ) {
        try {
          const response = await fetch ('/api/generate', {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({prompt})
          });
          const data = await response.json();
          setResponse(data);
        } catch (e) {
          console.error("il nostro errore:", e)
          setError(true)
        }
      }
    
    
    setLoading(false);

  };

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
                label="Genere:"
                list={listaGeneri}
                setValue={setGenere}
              />
            
            <SwitchBox
              label="Per adulti:"
              value={pegi18}
              setValue={setPegi18}
            />
            <Button
              label="Genera"
              onClick={handleGenerate}
              disabled={
                protagonista.trim().length <= 0 ||
                antagonista.trim().length <= 0 ||
                genere.trim().length <= 0
              }
            />
          </div>

          {error && <p>errore nella generazione</p>}

            {loading ? (
              <div className={style.loading}>
                <p>loading...</p>
              </div>
            ) : (
              <div className={style.result}>{response}</div>
            )}
          </WindowBox>
        </div>
      </main>
    </>
  );
  }

