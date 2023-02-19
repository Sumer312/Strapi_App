import React from "react";
import { useParams } from "react-router-dom";
import useFetchSingle from "../../hooks/useFetchSingle";
import ReactMarkdown from 'react-markdown'
import rehypeParse from "rehype-parse/lib";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useFetchSingle(
    `http://localhost:1337/api/reviews/${id}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some error occured</p>;
  if (data === null || data === undefined) return <p>No data</p>;
  console.log(data.data);
  return (
  <div>
   <h1>{data.data.attributes.title}</h1>
   <div className="rating"><h2>{data.data.attributes.rating}</h2></div>
   <ReactMarkdown rehypePlugins={[rehypeRaw]} children={data.data.attributes.body} />
  </div>)
}
