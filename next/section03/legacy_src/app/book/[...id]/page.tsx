import React from "react";

const Page = ({ params }: { params: { id: string | string[]} }) => {
  return <div>1{params.id}</div>;
};

export default Page;
