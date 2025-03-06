import React from 'react';
import { tests, awards } from '../about-text';
import AwardBlock from '../components/AwardBlock';

function AwardsPage() {
	return (
		<div className="min-h-screen bg-black py-12 sm:py-16 lg:py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Достижения
					</h1>
					<p className="text-xl text-zinc-400">
						Награды, места, дипломы и сертификаты
					</p>
				</div>

				{/* Awards Grid */}
				<div className="grid gap-6 md:grid-cols-2">
					{awards.map((award, index) => (
						<div
							key={index}
							className="relative bg-zinc-900 rounded-2xl p-6
								transform transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800
								border border-zinc-800 hover:border-zinc-700
								shadow-lg hover:shadow-xl"
						>
							{/* Glowing effect - removed blue gradient */}
							<div className="absolute inset-0 bg-gradient-to-r from-zinc-800/0 via-zinc-800/5 to-zinc-800/0 rounded-2xl" />
							
							{/* Award Content */}
							<div className="relative">
								<div className="text-lg text-zinc-400 font-medium mb-3">
									{award.date}
								</div>
								<h3 className="text-2xl text-white font-bold mb-4 leading-tight">
									{award.name}
								</h3>
								{award.description && (
									<p className="text-zinc-300 text-lg leading-relaxed">
										{award.description}
									</p>
								)}
								{award.tags && (
									<div className="mt-4 flex flex-wrap gap-2">
										{award.tags.map((tag, tagIndex) => (
											<span 
												key={tagIndex}
												className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium
													bg-zinc-800 text-zinc-300 border border-zinc-700"
											>
												{tag}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Test Scores Section */}
				{tests && tests.length > 0 && (
					<div className="mt-20">
						<h2 className="text-3xl text-white font-bold mb-8 text-center">
							Тесты и экзамены
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{tests.map((test, index) => (
								<div 
									key={index}
									className="bg-zinc-900 rounded-xl p-6
										transform transition-all duration-300 hover:bg-zinc-800
										border border-zinc-800 hover:border-zinc-700
										shadow-lg hover:shadow-xl flex justify-center items-center text-center"
								>
									<span className="text-white text-lg font-medium">
										{test}
									</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default AwardsPage;
