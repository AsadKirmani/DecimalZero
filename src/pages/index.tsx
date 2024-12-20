import type { NextPage } from 'next';
import Head from 'next/head';

import GithubSvg from '../assets/GithubSvg';
interface HomeProps {
	  username: string | null;
}

const Home: NextPage<HomeProps> = ({ username }) => {
	  return (
		      <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
		            <Head>
			            <title>Next.js + Tailwind CSS + Telegram&apos;s Web App</title>
				            <link rel="icon" href="/favicon.ico" />
					          </Head>

						        <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
							        <span className="text-2xl font-bold text-telegram-black">
								          This is a starter template using Next.js and Tailwind CSS for Telegram&apos;s Web Apps.
										          </span>
									          <h1>{username ?? 'Username is not found'}</h1>
										        </main>

											      <footer className="flex h-20 w-full items-center justify-center border-t border-t-telegram-black">
											              <a
												                className="flex items-center justify-center gap-2 text-telegram-black"
														          href="https://github.com/mauriciobraz/next.js-telegram-webapp"
															            target="_blank"
																              rel="noopener noreferrer">
																	                Powered by{' '}
																			          <span className="text-telegram-link">mauriciobraz/next.js-telegram-webapp</span>
																				            <GithubSvg className="size-6 fill-telegram-link" />
																					            </a>
																						          </footer>
																							      </div>
																							        );
};

export default Home;
