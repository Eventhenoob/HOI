import { Link } from "react-router-dom";
import ShowCaseContainer from "../components/ShowCase";

const ShowCase = () => {
  const content = [
    { heading: "Hello", description: "this is my" },
    { heading: "hi", description: "this is my" },
    { heading: "bye", description: "this is my" },
    { heading: "tata", description: "this is my" },
  ];

  const showCaseArr = [
    {
      id: 0,
      content: content,
      img: "/showcaseIMG/img1.jpg",
      link: "#",
      title: "My name is Aryan",
    },
    {
      id: 1,
      content: content,
      img: "/showcaseIMG/img2.jpg",
      link: "#",
      title: "My name is Aryan",
    },
    {
      id: 2,
      content: content,
      img: "/showcaseIMG/img3.jpg",
      link: "#",
      title: "My name is Aryan",
    },
    {
      id: 3,
      content: content,
      img: "/showcaseIMG/img4.jpg",
      link: "#",
      title: "My name is Aryan",
    },
    {
      id: 4,
      content: content,
      img: "/showcaseIMG/img5.jpg",
      link: "#",
      title: "My name is Aryan",
    },
    {
      id: 5,
      content: content,
      img: "/showcaseIMG/img6.jpg",
      link: "#",
      title: "My name is Aryan",
    },
    {
      id: 6,
      content: content,
      img: "/showcaseIMG/img7.jpg",
      link: "#",
      title: "My name is Aryan",
    },
  ];
  return (
    <main className="bg-darkPrimary-400 h-screen relative">
      <Link
        to="/"
        className="text-darkPrimaryText-400 z-30 absolute m-4 font-bold text-2xl"
      >
        BeWith<span className="text-lightSecondry-400">AK</span>
      </Link>
      <ShowCaseContainer showCaseTemplateArr={showCaseArr}></ShowCaseContainer>
    </main>
  );
};

export default ShowCase;
