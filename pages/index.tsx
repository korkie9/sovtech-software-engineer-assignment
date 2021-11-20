import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card
          elevation={4}
          style={{
            display: "flex",
            alignSelf: "center",
            justifySelf: "center",
            padding: "5%",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: 1 }}>
            <Image
              src="/me.jpg"
              alt="Picture of the me"
              width={300}
              height={400}
              className={styles.image}
            />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div>
            <CardHeader title="Justin Korkie" />
            <CardContent>
              {" "}
              <p style={{ fontSize: "15px", fontWeight: "bold", lineHeight: "1.3rem"}}>
                My name is Justin Korkie. I am a software developer from
                Stellenbosch. I love both problem solving and exploring my
                creative side. That is why I chose software development as a
                working field. It allows me to explore my creativity through
                solving problems and to innovate new ideas. I have a deep
                interest in different cultures and in my spare time I like to
                learn new languages and cultural norms. I am enthusiastic and
                highly motivated to be one of the best in whatever field I
                participate. I live my life by the philosophy “challenge your
                definitions”. Simply put, this means considering what you can do
                and what you do know and attempting better, much like my former
                schools motto Semper Splendidior (always better)
              </p>
            </CardContent>
            </div>
          </div>
        </Card>
      </main>

      <footer className={styles.footer}>
        <p>Developed by Justin Korkie 2021</p>
      </footer>
    </div>
  );
};

export default Home;
