import { TbWorld, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 footer pb-1">
        <span className="text-md text-center">
          Designed & built by Samir Fernández
        </span>
        <div className="flex justify- ">
          <a
            href="https://portfolio-samirfdez.vercel.app/"
            target="_blank"
            className="text-gray-500 transition-all duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white ms-5"
            style={{ fontSize: "20px" }}
          >
            <TbWorld />
            <span className="sr-only">Portfolio Web</span>
          </a>
          <a
            href="https://github.com/SamirFdez"
            target="_blank"
            className="text-gray-500 transition-all duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white ms-5"
            style={{ fontSize: "20px" }}
          >
            <TbBrandGithub />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="https://linkedin.com/in/samirfdez"
            target="_blank"
            className="text-gray-500 transition-all duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white ms-5"
            style={{ fontSize: "20px" }}
          >
            <TbBrandLinkedin />
            <span className="sr-only">Linkedin account</span>
          </a>
        </div>
      </div>
    </>
  );
};
