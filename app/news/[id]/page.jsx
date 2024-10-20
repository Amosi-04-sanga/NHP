"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import moment from "moment";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";


const page = ({ params }) => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const entry_id = params.id;

  useEffect(() => {
    const Getitems = async () => {
      const client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: `b4d4kmiudhaj`,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: `DnH6_nM6Rp7Op5IMpYNVOIx5anqs-sNKPgmzRGCTrE0`,
      });

      client
        .getEntry(entry_id)
        .then((entry) => {
          setData(entry);
          console.log(entry)
        })
        .catch(console.error);
    };
    Getitems();
  }, []);

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file.url;
        const altText = title || "";

        return (
          <img
            className="max-w-[60vw] mx-auto"
            src={imageUrl}
            alt={altText}
            style={{margin: '16px auto'}}
          />
        );
      },
      "embedded-entry-block": (node) => {
        // Handle other embedded entries, e.g., links to other Contentful content.
        // You can customize the rendering for different content types here.
        return null;
      },
      text: (text) => {
        // You can style text nodes here, e.g., adding CSS classes for headings.
        return <p style={{paddingTop: '10px'}} className="mt-4" >{text}</p>;
      },
      "heading-1": (node) => (
        <h1 className="text-center text-heading1-bold">
          {node.content[0].value}
        </h1>
      ),
      "heading-2": (node) => (
        <h2 className="text-center text-heading2-bold">
          {node.content[0].value}
        </h2>
      ),
      "heading-3": (node) => (
        <h3 className="text-heading3-bold text-center">
          {node.content[0].value}
        </h3>
      ),
      // Add more heading levels as needed.
      hyperlink: (node) => (
        <Link className="text-red-700" href={node.data.uri}>
          {node.content[0].value}
        </Link>
      ),
    },
  };

  return (
    <div className="block w-[95vw]">
  
      {data ? (
        <div className=" mx-auto p-4 md:px-40">
          <section className="mt-10">
            <h1 style={{fontSize: '30px'}} className="uppercase font-bold text-center">
              {" "}
              {data.fields.tItle}{" "}
            </h1>
            <div style={{fontSize: '14px'}} className="flex gap-4 justify-between text-small-regular mt-2">
              <div>
                <p className="italic">
                  Published On:{" "}
                  <span className="italic">
                    {" "}
                    {moment(data.fields.publishedDate).format(
                      "MMM Do YYYY"
                    )}{" "}
                  </span>
                </p>
              </div>
              <p>
                <span style={{color: 'green'}} className="font-bold uppercase text-[14px] ">
                  {data.fields.eventDate && (
                    <>{moment(data.fields.eventDate).fromNow()} </>
                  )}
                </span>{" "}
              </p>
            </div>
            <img
              src={data.fields.featuredImage.fields.file.url}
              alt="featured image"
              className="w-full max-h-[70vh] mt-10"
            />

            <div className="mt-4">
              {documentToReactComponents(data.fields.content, options)}
            </div>

          </section>
        </div>
      ) : (
        <div className='flex justify-center items-center h-[60vh]'>
        <Image src='/assets/logo.png' alt='logo' width={70} height={40} />
       </div>
      )}
    </div>
  );
};

export default page;


/*
<button
        onClick={() => router.back()}
        className="px-2 py-1 sticky top-0 bg-gradient-to-br text-[12px] from-red-600 to-orange-300 rounded-sm mt-8 ml-4 text-white"
      >
        Back
      </button>
*/