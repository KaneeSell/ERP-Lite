
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw"
import markdownFile from "../../../../README.md?raw";

export function MarkDownReader() : JSX.Element{
    const [content, setContent] = useState("");

    useEffect(() => {
        setContent(markdownFile);
      }, []);

    return (
        <div className="container">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </div>
    );
}