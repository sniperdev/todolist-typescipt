import React from "react";

interface Props {
  title: string;
}
const Heading = ({ title }: Props) => {
  return (
    <header className="border-b-2">
      <h1 className="my-2 text-center text-2xl">{title}</h1>
    </header>
  );
};

export default Heading;
