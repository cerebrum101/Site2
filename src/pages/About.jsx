import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeExternalLinks from 'rehype-external-links';
import 'highlight.js/styles/github-dark.css';


function About() {
	const [content, setContent] = useState('');

	useEffect(() => {
		import('../about-posts/about.md?raw')    
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
		<div className="min-h-screen bg-black flex items-center py-2">
			<div className="w-full max-w-4xl mx-auto px-4">
				<div className="relative">
					{/* Background gradient effects */}
					<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/5 to-transparent pointer-events-none" />
					<div className="absolute inset-0 bg-gradient-to-r from-zinc-800/5 via-transparent to-zinc-800/5 pointer-events-none" />
					
					{/* Content container */}
					<div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800 p-4 shadow-2xl">
						<div className="prose prose-invert max-w-none text-left">
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								components={{
									h1: ({node, ...props}) => (
										<h1 {...props} className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center tracking-tight" />
									),
									h2: ({node, ...props}) => (
										<h2 {...props} className="text-lg sm:text-xl font-bold text-white mb-2 mt-4 first:mt-0 tracking-tight" />
									),
									h3: ({node, ...props}) => (
										<h3 {...props} className="text-base sm:text-lg font-semibold text-white/90 mb-2 mt-3 tracking-tight" />
									),
									p: ({node, children, ...props}) => {
										const childArray = React.Children.toArray(children);
										const isWhitespace = childArray.every(
											child => typeof child === 'string' && child.trim() === ''
										);
										
										if (isWhitespace) {
											return null;
										}
										
										const firstChild = childArray[0];
										const indent = typeof firstChild === 'string' ? 
											firstChild.match(/^[\s\t]*/)[0].length : 0;
										
										return (
											<p {...props} 
												className="text-zinc-300 text-sm sm:text-base mb-2 leading-normal"
												style={{ paddingLeft: `${indent * 0.5}rem` }}
											>
												{children}
											</p>
										);
									},
									strong: ({node, ...props}) => (
										<strong {...props} className="text-white font-medium" />
									),
									em: ({node, ...props}) => (
										<em {...props} className="text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer not-italic" />
									),
									ul: ({node, ...props}) => (
										<ul {...props} className="flex flex-col list-none pl-2 mb-2 space-y-1 text-zinc-300">
											{React.Children.map(props.children, child => {
												if (child.type === 'li') {
													return React.cloneElement(child, {
														className: 'flex items-start before:content-["•"] before:text-white before:mr-1.5 before:text-sm'
													});
												}
												return child;
											})}
										</ul>
									),
									ol: ({node, ...props}) => (
										<ol {...props} className="list-decimal pl-2 mb-2 space-y-1 text-zinc-300" />
									),
									li: ({node, ...props}) => (
										<li {...props} className="text-zinc-300 text-sm sm:text-base leading-normal" />
									),
									a: ({node, ...props}) => (
										<a 
											{...props} 
											className="text-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer border-b border-blue-400/30 hover:border-blue-300" 
											target={props.href?.startsWith('http') ? '_blank' : '_self'}
											rel={props.href?.startsWith('http') ? 'noopener noreferrer' : ''}
										/>
									),
									code: ({node, inline, ...props}) => (
										inline ? 
											<code {...props} className="bg-[#0B1221] px-1 py-0.5 rounded text-blue-300 text-xs sm:text-sm font-mono" /> :
											<code {...props} className="block bg-[#0B1221] p-2 rounded-lg text-gray-300 text-xs sm:text-sm mb-2 overflow-x-auto font-mono border border-[#2A3444]" />
									),
									blockquote: ({node, ...props}) => (
										<blockquote {...props} className="border-l-2 border-blue-500/50 pl-3 my-2 text-gray-400 italic bg-[#0B1221]/50 py-2 rounded-r-lg text-sm" />
									)
								}}
							>
								{content}
							</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;