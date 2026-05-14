import { CardHeader } from "@heroui/react";

export default function Card({ title, Desc, Content, Footer, Link }) {
  return (
    <>
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
    </>
  );
}
