import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Rich Fox Club Staking Vault</h1>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          <h1 className={styles.BoxTitle}>The Fox Hole</h1>
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake and Earn RFC.X</h2>
          <p className={styles.selectBoxDescription}>
            The official staking dapp for the <b>Rich Fox Club</b>{" "}
            and the only place to earn <b>RFC.X</b> rewards token.
          </p>
        </div>
      </div>
  );
};

export default Home;
