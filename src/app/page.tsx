import MainNews from "@/components/MainNews";

import MostRead from "@/components/MostRead";
import OtherNewsCard from "@/components/OtherNewsCard";


interface IOtherSection{
  curationId:string;
  title:string;
  articles:{
    id:string;
    title:string
    category:string;
    imageUrl:string;
    imageAlt:string
    description:string;
  }[];

}
export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const [firstSection, ...otherSections] = sections;
  console.log(firstSection, otherSections);


  return (
    <div>

      
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-4">
        <div className="col-span-2  " >
          <MainNews news={mainNews} />
          <div>
            {otherSections.map((os: IOtherSection) => <div className="mb-3  pb-2 text-lg font-bold text-neutral-900" key={os.curationId}>{os.title}
              <hr className="border-b-2 border-red-700" />
              <div className="grid grid-cols-2 mt-2 gap-2"> {
                os.articles.map(osa => <OtherNewsCard news={osa} key={osa.id} />)
              }
              </div>
            </div>)}
          </div>

        </div>
        <div className="col-span-1 ">
          <MostRead/>
        </div>
      </div>

    </div>
  );
}
