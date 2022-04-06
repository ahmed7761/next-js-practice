import { useRouter } from "next/router";

export default function ProductReview() {
    const router = useRouter()
    const {productId, reviewId} = router.query
    return (
        <>
            <h1>Review {reviewId} of Product {productId}</h1>
        </>
    )
}
