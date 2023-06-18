import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
    const router = useRouter();
    console.log(router);

    // const [title, id] = params || [];

    return (
        <div>
            <Seo title={router.query.title} />
            <h4>{router.query.title}</h4>
            <p>{router.query.description}</p>
            <img src={router.query.img} />
        </div>
    );
}

export function getServerSideProps({ params: { params } }) {
    // console.log(ctx);
    return {
        props: {
            params,
        },
    };
}
