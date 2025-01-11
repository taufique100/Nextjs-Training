export default function Review({params} : {
    params:{
        reviewId : string;
        productId: string;
    }
}){
    return (
        <>
            Product Review of Product {params.productId} and Review id {params.reviewId}
        </>
    )
}