"use client";

import { notFound, useRouter } from "next/navigation";

export default function Review({params} : {
    params:{
        reviewId : string;
        productId: string;
    }
}){
    const router = useRouter();
    const handleRouter=()=>{
        router.push('/')
    }
    if(parseInt(params.reviewId) > 1000) return notFound();
    return (
        <>
            <button onClick={handleRouter}>Navigate</button>
            Product Review of Product {params.productId} and Review id {params.reviewId}
        </>
    )
} 