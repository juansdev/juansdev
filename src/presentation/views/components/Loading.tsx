"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {clsx} from "clsx";

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className={clsx("page-loader", {
      "none": !isLoading
    })}>
      <Image alt={"Animation of loading"} width={200} height={200} src={"/images/loader.gif"}/>
    </div>
  );
}