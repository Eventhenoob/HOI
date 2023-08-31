import style from "./showCase.module.css";
export interface contentStructure {
  heading: string;
  description: string;
}

interface Props {
  title: string;
  link: string;
  content: contentStructure[];
}

const ShowCaseQuote = ({ content, title, link }: Props) => {
  return (
    <blockquote
      className={
        style["animateToTop"] +
        " z-10 flex flex-col justify-start transition-all duration-500 "
      }
    >
      <h3 className="text-lightPrimary-400 font-bold text-2xl mb-2">{title}</h3>
      {content.map((item) => (
        <div className="flex " key={item.heading}>
          <h5 className="text-lightPrimary-400 font-bold mr-2">
            {item.heading}
          </h5>
          <p className="text-lightPrimary-200">{item.description}</p>
        </div>
      ))}
      <a
        className="inline-block rounded-md pt-2 pb-2 pl-6 pr-6 self-start hover:bg-lightSecondry-400 border border-lightSecondry-400 text-center text-darkPrimaryText-400 mt-4 hover:text-lightPrimary-400 "
        href={link}
      >
        Click me
      </a>
    </blockquote>
  );
};

export default ShowCaseQuote;
