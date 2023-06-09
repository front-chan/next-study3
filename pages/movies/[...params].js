import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
    const router = useRouter();
    // console.log(router);

    const [title, id] = params || [];

    return (
        <div>
            <Seo title="Design" />
            <h4>{title}</h4>
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
