import { twMerge } from "tailwind-merge";

const Container = ({ children, className, id }) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto px-4 xl:px-0 ",
    className
  );
  return (
    <div id={id} className={newClassName}>
      {children}
    </div>
  );
};

export default Container;
