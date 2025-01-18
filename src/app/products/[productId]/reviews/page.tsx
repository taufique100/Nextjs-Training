"use client"

import { useEffect } from "react";

export default function Reviews({ params }: { params: { productId: string } }) {


  function throwError(num:number): void {
    if(num==1){
        throw new Error("Input must be a non-negative number");
    }
  }

  useEffect(() => {
    throwError(2);
  }, [])

  return (
    <>
      Product Review of Product {params.productId}
    </>
  );
}
