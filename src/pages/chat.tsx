import { useMemo } from 'react'
import { signOut } from 'next-auth/react'
import UserIcon from '@/components/icons/UserIcon'
import TrashIcon from '@/components/icons/TrashIcon'
import SignOutIcon from '@/components/icons/SignOutIcon'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon'
import PaperAirplaneIcon from '@/components/icons/PaperAirplaneIcon'
import ChatBubbleLeftIcon from '@/components/icons/ChatBubbleLeftIcon'
import { BoltIcon, ExclamationTriangleIcon, PlusIcon, SunIcon } from '@heroicons/react/24/outline'

const ChatPage = () => {
	const logoutUrl = useMemo(() => {
		if (typeof window === 'undefined') return '/'

		return `${process.env.NEXT_PUBLIC_AUTH0_ISSUER}/v2/logout?returnTo=${encodeURIComponent(
			window.location.origin
		)}`
	}, [])

	return (
		<div className="overflow-hidden w-full h-full min-h-screen relative">
			<div className="flex h-full min-h-screen flex-1 flex-col md:pl-[260px]">
				<main className="relative h-full min-h-screen w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
					<div className="flex-1 min-h-screen overflow-hidden">
						<div className="min-h-screen h-full dark:bg-gray-800">
							<div className="react-scroll-to-bottom--css-phhca-1n7m0yu">
								<div className="flex flex-col items-center text-sm dark:bgx-gray-800">
									<div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
										<h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
											ChatGPT
										</h1>
										<div className="md:flex items-start text-center gap-3.5">
											<div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
												<h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
													<SunIcon className="h-6 w-6" />
													Examples
												</h2>
												<ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
													<button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
														&quot;Explain quantum computing in simple terms&quot; →
													</button>
													<button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
														&quot;Got any creative ideas for a 10 year old&apos;s
														birthday?&quot; →
													</button>
													<button className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
														&quot;How do I make an HTTP request in Javascript?&quot; →
													</button>
												</ul>
											</div>
											<div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
												<h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
													<BoltIcon className="h-6 w-6" />
													Capabilities
												</h2>
												<ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
													<li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
														Remembers what user said earlier in the conversation
													</li>
													<li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
														Allows user to provide follow-up corrections
													</li>
													<li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
														Trained to decline inappropriate requests
													</li>
												</ul>
											</div>
											<div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
												<h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
													<ExclamationTriangleIcon className="h-6 w-6" />
													Limitations
												</h2>
												<ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
													<li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
														May occasionally generate incorrect information
													</li>
													<li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
														May occasionally produce harmful instructions or biased content
													</li>
													<li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
														Limited knowledge of world and events after 2021
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="w-full h-32 md:h-48 flex-shrink-0" />
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
						<form className="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
							<div className="relative flex h-full flex-1 md:flex-col">
								<div className="flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center" />
								<div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
									<textarea
										tabIndex={0}
										data-id="root"
										rows={1}
										className="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:outline-none focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
										style={{ maxHeight: '200px', height: '24px', overflowY: 'hidden' }}
										defaultValue={''}
									/>
									<button className="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
										<PaperAirplaneIcon className="h-4 w-4 mr-1" />
									</button>
								</div>
							</div>
						</form>
						<div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
							<a
								href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
								target="_blank"
								rel="noreferrer"
								className="underline"
							>
								ChatGPT Feb 13 Version
							</a>
							. Free Research Preview. Our goal is to make AI systems more natural and safe to interact
							with. Your feedback will help us improve.
						</div>
					</div>
				</main>
			</div>
			<div className="dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
				<div className="flex h-full min-h-0 flex-col ">
					<div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
						<nav className="flex h-full flex-1 flex-col space-y-1 p-2">
							<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
								<PlusIcon className="h-4 w-4" />
								New chat
							</a>
							<div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
								<div className="flex flex-col gap-2 text-gray-100 text-sm">
									<a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
										<ChatBubbleLeftIcon className="h-4 w-4" />
										<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
											S6 Supervisor Died.
											<div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
										</div>
									</a>
									<a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
										<ChatBubbleLeftIcon className="h-4 w-4" />
										<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
											Browser-based authorization flow.
											<div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
										</div>
									</a>
									<a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
										<ChatBubbleLeftIcon className="h-4 w-4" />
										<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
											NODE_ENV var in Next.js
											<div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
										</div>
									</a>
									<a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
										<ChatBubbleLeftIcon className="h-4 w-4" />
										<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
											New chat
											<div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
										</div>
									</a>
								</div>
							</div>
							<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
								<TrashIcon className="h-4 w-4" />
								Clear conversations
							</a>
							<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
								<span className="flex w-full flex-row justify-between">
									<span className="gold-new-button flex items-center gap-3">
										<UserIcon className="h-4 w-4" />
										Upgrade to Plus
									</span>
									<span className="rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800">
										NEW
									</span>
								</span>
							</a>
							<a
								href="https://help.openai.com/en/collections/3742473-chatgpt"
								target="_blank"
								className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
							>
								<ExternalLinkIcon className="h-4 w-4" />
								Updates &amp; FAQ
							</a>
							<button
								onClick={() => signOut({ callbackUrl: logoutUrl })}
								className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
							>
								<SignOutIcon className="h-4 w-4" />
								Log out
							</button>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatPage
