import React from "react";
import styles from "./Main.module.scss";
import CustomCard from "./Card";

export default function Main() {
  return (
    <div className={styles.main}>
      <main className="main">
        <section className="top-section">
          <div>
            <h1>React Styling Review</h1>
          </div>
          <div className="img-wrapper">
            <img src="https://placehold.co/200x200" alt="Placeholder" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            sapiente delectus sed? Possimus totam culpa nisi quos non, veniam
            praesentium asperiores dolorum in, facilis neque magnam qui quia
            expedita repudiandae.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            quos maxime modi ea natus quia in, deserunt ex veniam autem amet
            accusamus perferendis animi, velit esse molestias, ad nam tempora!
          </p>
        </section>
        <section className="middle-section">
          <h2>Hover Card Section</h2>
          <CustomCard />
          <p>This section is for the display of the Hover Card component.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            voluptatum facilis modi. Atque quas similique voluptatum harum esse
            dolores officiis officia iste, aspernatur ipsam autem facere
            deserunt sed, ea ab!
          </p>
        </section>
      </main>
    </div>
  );
}
