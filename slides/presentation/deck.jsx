import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Text
} from "../src/spectacle";

import styles from "../themes/vicdev";

// import preloader from "../src/utils/preloader";

// const images = {
//   city: require("./city.jpg"),
//   kat: require("./kat.png"),
//   logo: require("./formidable-logo.svg"),
//   markdown: require("./markdown.png")
// };

// preloader([images.city, images.kat]);

function titleSlide(title, subtitle) {
  return (
    <Slide bgColor="secondary" style={styles.titleSlide}>
      <Heading size={1} style={styles.titleSlide.title}>{title}</Heading>
      <Heading size={5} style={styles.titleSlide.subtitle}>{subtitle}</Heading>
    </Slide>
  );
}

export default class extends React.Component {
  render() {
    return (
      <Deck transition="fade" transitionDuration={200}>

        {titleSlide("An Intro to React.js", "Building modern web applications")}


        <Slide>
          <Markdown>
            {`
# React is tite af

* Preach
            `}
          </Markdown>
        </Slide>


        <Slide>
          <Markdown>
            {`
    var code = <div className="yes-sir">Yup!</div>;`}
          </Markdown>
        </Slide>


      </Deck>
    );
  }
}
