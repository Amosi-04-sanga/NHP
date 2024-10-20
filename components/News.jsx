"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import moment from "moment";
import { Fade,} from "react-awesome-reveal";
import Image from "next/image";


const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `b4d4kmiudhaj`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `DnH6_nM6Rp7Op5IMpYNVOIx5anqs-sNKPgmzRGCTrE0`,
      });

      const response = await client.getEntries();
      setData(response.items);
      console.log(response.items)
    };
    getitems();
  }, []);

  return (
    <div id="news" className="mt-16 md:mt-40 px-8">
      <div className="text-center">
      <h2 className='half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block'>Latest news</h2>

      </div>
      

      <div className="mt-8 md:flex md:flex-wrap gap-12 md:gap-10">
        {data &&
          data.map((each, index) => {
            
            return (
              <div key={index} className="m-2 mt-3 max-md:mx-auto max-w-[350px] rounded-2xl">
              <img
                src={each.fields.featuredImage.fields.file.url}
                alt="news featured image"
                className="w-full max-h-[250px] rounded-t-xl"
              />
              <div className="flex flex-col shadow-lg shadow-primary-500 pb-4 rounded-b-md">
                <div className="flex flex-col p-2">
                  <h2 className="font-bold text-lg uppercase"> {each.fields.keyword} </h2>
                  <p className="mt-4">
                    {" "}
                    {each.fields.title.slice(0,80)} {" ... "}
                  </p>
                  
                </div>
                <button className="bg-gradient-to-br bg-red-600 rounded-md block mx-auto mb-2 px-2 py-1 mt-2 text-white">
                  <Link href={`/news/${each.sys.id}`}>Read More</Link>
                </button>
              </div>
            </div>
            )
          })}
      </div>

<div className="mt-10">
      <Link className="text-[#FF0F0F] text-[16px] " href="#">
         <div className="flex gap-1 justify-center" >
          <p>View All</p>
          <Image src='/assets/icons/arrow.svg' alt="arrow" width={20} height={20}/>
         </div>
      </Link>
</div>
    </div>
  );
};

export default News

