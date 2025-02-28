import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeExternalLinks from 'rehype-external-links';
import 'highlight.js/styles/github-dark.css';
// import aboutContent from './about-posts/about.md?raw';

function About() {
	const [content, setContent] = useState('');

	useEffect(() => {
		import('./about-posts/about.md?raw')    
			.then((module) => {
				// Replace tabs with spaces to preserve indentation
				const markdownContent = module.default.replace(/^\t+/gm, match => '  '.repeat(match.length));
				setContent(markdownContent);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	return (
		<div className="max-w-4xl mx-auto px-4 py-8 bg-[#1e1e1e] min-h-screen mt-16">
			<div className="text-[#dcddde] leading-6 text-left whitespace-pre-wrap">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					components={{
						h1: ({node, ...props}) => <h1 {...props} className="text-4xl font-normal mb-4 text-[#dcddde] text-center" />,
						h2: ({node, ...props}) => <h2 {...props} className="text-3xl font-normal mb-3 text-[#dcddde]" />,
						h3: ({node, ...props}) => <h3 {...props} className="text-2xl font-normal mb-2 text-[#dcddde]" />,
						p: ({node, children, ...props}) => {
							const childArray = React.Children.toArray(children);
							// Check if the paragraph contains only whitespace
							const isWhitespace = childArray.every(
								child => typeof child === 'string' && child.trim() === ''
							);
							
							if (isWhitespace) {
								return <br className="leading-[1.15]" />;
							}
							
							// Check if the content starts with spaces/tabs
							const firstChild = childArray[0];
							const indent = typeof firstChild === 'string' ? 
								firstChild.match(/^[\s\t]*/)[0].length : 0;
							
							return (
								<p {...props} 
									className="mb-1 text-[#dcddde] text-base"
									style={{ paddingLeft: `${indent * 1}rem` }}
								>
									{children}
								</p>
							);
						},
						strong: ({node, ...props}) => <strong {...props} className="text-[#dcddde] font-normal" />,
						em: ({node, ...props}) => <em {...props} className="text-[#7b6cd9] hover:underline cursor-pointer not-italic" />,
						ul: ({node, ...props}) => <ul {...props} className="list-['•'] pl-8 mb-1 space-y-0" />,
						ol: ({node, ...props}) => <ol {...props} className="list-decimal pl-8 mb-1 space-y-0" />,
						li: ({node, ...props}) => <li {...props} className="text-[#dcddde] m-0 pl-1" />,
						a: ({node, ...props}) => (
							<a 
								{...props} 
								className="text-[#7b6cd9] hover:underline cursor-pointer" 
								target={props.href?.startsWith('http') ? '_blank' : '_self'}
								rel={props.href?.startsWith('http') ? 'noopener noreferrer' : ''}
							/>
						),
						code: ({node, inline, ...props}) => (
							inline ? 
								<code {...props} className="bg-[#2f3136] px-1 py-0.5 rounded text-[#dcddde]" /> :
								<code {...props} className="block bg-[#2f3136] p-4 rounded text-[#dcddde] mb-1" />
						),
						blockquote: ({node, ...props}) => (
							<blockquote {...props} className="border-l-2 border-[#4f545c] pl-4 my-1 text-[#dcddde]" />
						)
					}}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	);
}

export default About;