import Image from 'next/image';
import Link from 'next/link';

interface News {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    imageAlt: string;
}

const OtherNewsCard = ({ news }:{news:News}) => {
    return (
        <div>
            <Link href={`/news/${news.id}`}>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image
                            src={news.imageUrl}
                            alt={news.imageAlt}
                            width={250}
                            height={150}
                        />
                    </figure>

                    <div className="card-body">
                        <p className="text-red-700">
                            {news.category}
                        </p>
                        <h2 className="card-title">
                            {news.title}
                        </h2>

                        <p>{news.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default OtherNewsCard;