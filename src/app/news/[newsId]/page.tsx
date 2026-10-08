import Image from "next/image";
import { notFound } from "next/navigation";


const NewsDetailsPage = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data;
    if(!news){
        notFound();
    }
    return (
        <div>
            <main className="mx-auto max-w-4xl px-4 py-10">

                {/* Title */}
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                    {news?.title}
                </h1>

                

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span>Source: {news?.source}</span>
                    <span>•</span>
                    <span>
                        {new Date(news?.firstPublished).toLocaleDateString("bn-BD")}
                    </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {news?.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-base-200 px-3 py-1 text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="mt-5 text-xl leading-8 text-gray-600">
                    {news?.description.blocks[0].model.blocks[0].model.text}
                </p>

                

                {/* Article Body */}
                <article className="mt-10 space-y-8">

                    {news?.body.map((block: any, index: number) => {

                        if (block.type === "text") {
                            return (
                                <p
                                    key={index}
                                    className="whitespace-pre-line text-lg leading-8 text-gray-800"
                                >
                                    {block.text}
                                </p>
                            );
                        }

                        if (block.type === "subheading") {
                            return (
                                <h2
                                    key={index}
                                    className="pt-4 text-2xl font-bold leading-tight"
                                >
                                    {block.text}
                                </h2>
                            );
                        }

                        if (block.type === "image") {
                            return (
                                <figure key={index} className="my-8">
                                    <Image
                                        src={block.url}
                                        alt={block.altText || block.caption || news.title}
                                        width={block.width}
                                        height={block.height}
                                        className="h-auto w-full rounded-xl"
                                    />

                                    {block.caption && (
                                        <figcaption className="mt-2 text-sm text-gray-500">
                                            {block.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            );
                        }

                        return null;
                    })}

                </article>

            </main>

        </div>
    );
};

export default NewsDetailsPage;