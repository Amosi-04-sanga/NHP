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
        space: `kdi2o0v2k0w9`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `4cs4zrA7stGMhhnyl9HGW6wRi6GrC6mFYuwuolTcXuA`,
      });

      const response = await client.getEntries();
      setData(response.items);
    };
    getitems();
  }, []);

  return (
    <div id="news" className="mt-20 px-8">
      <div className="text-center">
      <h2 className='half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block'>Latest news</h2>

      </div>
      

      <div className="mt-8 md:flex md:flex-wrap">
        {data &&
          data.map((each, index) => (
            <div key={index} className="m-2 mx-auto py-4 rounded-2xl">
              <img
                src={each.fields.featuredImage.fields.file.url}
                alt="news featured image"
                className="w-full max-h-[40vh] rounded-t-xl"
              />
              <div className="flex flex-col text-center shadow-lg shadow-primary-500 pb-4 rounded-b-md">
                <div className="flex flex-col p-2">
                  <p className="font-bold mt-4">
                    {" "}
                    {each.fields.tItle}
                  </p>
                  
                </div>
                <button className="bg-gradient-to-br bg-red-600 rounded-md block mx-auto mb-2 px-2 py-1 mt-2 text-white">
                  <Link href={`/news/${each.sys.id}`}>Read More</Link>
                </button>
              </div>
            </div>
          ))}
      </div>

      <Link className="text-[#FF0F0F] text-[16px]" href="#">
         <div className="flex gap-1 justify-center" >
          <p>View All</p>
          <Image src='/assets/icons/arrow.svg' alt="arrow" width={20} height={20}/>
         </div>
      </Link>
    </div>
  );
};

export default News

