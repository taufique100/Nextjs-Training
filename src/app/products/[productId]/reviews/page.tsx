export default function Reviews({params} : {
    params:{
        productId: string;
    }
}){
    return (
        <>
            Product Review of Product {params.productId}
        </>
    )
}