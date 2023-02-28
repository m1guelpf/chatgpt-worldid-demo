import { classNames } from '@/lib/utils'
import TopBanner from '@/components/TopBanner'
import { Fragment, useMemo, useState } from 'react'
import TrashIcon from '@/components/icons/TrashIcon'
import { signOut, useSession } from 'next-auth/react'
import { Dialog, Transition } from '@headlessui/react'
import SignOutIcon from '@/components/icons/SignOutIcon'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon'
import PaperAirplaneIcon from '@/components/icons/PaperAirplaneIcon'
import ChatBubbleLeftIcon from '@/components/icons/ChatBubbleLeftIcon'
import { BoltIcon, ExclamationTriangleIcon, PlusIcon, SunIcon } from '@heroicons/react/24/outline'

const conversations = [
	'Shaggoth ASCII art',
	'New chat',
	'Printing ChatGPTs weights and doing inference manually',
	'New chat',
	"How to shill World ID to Sam's friends",
]

const ChatPage = () => {
	const session = useSession()
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
	const isWorldID = useMemo(() => session?.data?.isWorldID, [session])

	const logoutUrl = useMemo(() => {
		if (typeof window === 'undefined') return '/'

		return `${process.env.NEXT_PUBLIC_AUTH0_ISSUER}/v2/logout?returnTo=${encodeURIComponent(
			window.location.origin
		)}`
	}, [])

	return (
		<>
			{isWorldID && <TopBanner />}
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="dark relative bg-gray-900 md:flex md:w-[260px] md:flex-col">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											type="button"
											className="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
										</button>
									</div>
								</Transition.Child>
								<div className="flex h-full min-h-0 flex-col ">
									<div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
										<nav className="flex h-full flex-1 flex-col space-y-1 p-2">
											<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
												<PlusIcon className="h-4 w-4" />
												New chat
											</a>
											<div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
												<div className="flex flex-col gap-2 text-gray-100 text-sm">
													{conversations.map(title => (
														<a
															key={title}
															className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"
														>
															<ChatBubbleLeftIcon className="h-4 w-4" />
															<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
																{title}
																<div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
															</div>
														</a>
													))}
												</div>
											</div>
											<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
												<TrashIcon className="h-4 w-4" />
												Clear conversations
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
							</Dialog.Panel>
						</Transition.Child>
						<div className="w-14 flex-shrink-0" aria-hidden="true">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>
			<div
				className={classNames(
					isWorldID && 'mt-10 md:mt-0',
					'overflow-hidden w-full h-full min-h-screen relative'
				)}
			>
				<div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
					<button
						onClick={() => setSidebarOpen(true)}
						type="button"
						className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white"
					>
						<span className="sr-only">Open sidebar</span>
						<Bars3Icon className="h-6 w-6" />
					</button>
					<h1 className="flex-1 text-center text-base font-normal">New chat</h1>
					<button type="button" className="px-3">
						<PlusIcon className="h-6 w-6" />
					</button>
				</div>
				<div className="flex h-full min-h-screen flex-1 flex-col md:pl-[260px]">
					<main className="relative h-full min-h-screen w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
						<div className="flex-1 min-h-screen overflow-hidden">
							<div className="min-h-screen h-full dark:bg-gray-800">
								<div className="react-scroll-to-bottom--css-phhca-1n7m0yu">
									<div className="flex flex-col items-center text-sm dark:bgx-gray-800">
										<div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
											<h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
												ChatGPT
												{isWorldID && (
													<span className="bg-primary text-white py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase">
														Human
													</span>
												)}
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
															May occasionally produce harmful instructions or biased
															content
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
									href="https://id.worldcoin.org"
									target="_blank"
									rel="noreferrer"
									className="underline"
								>
									ChatGPT Worldcoin Version
								</a>
								. Example Demo Preview. This doesn&apos;t actually work and is just an example to
								demonstrate Sign in with Worldcoin.
							</div>
						</div>
					</main>
				</div>
				<div
					className={classNames(
						isWorldID && 'pt-12',
						'dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col '
					)}
				>
					<div className="flex h-full min-h-0 flex-col ">
						<div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
							<nav className="flex h-full flex-1 flex-col space-y-1 p-2">
								<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
									<PlusIcon className="h-4 w-4" />
									New chat
								</a>
								<div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
									<div className="flex flex-col gap-2 text-gray-100 text-sm">
										{conversations.map(title => (
											<a
												key={title}
												className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"
											>
												<ChatBubbleLeftIcon className="h-4 w-4" />
												<div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
													{title}
													<div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
												</div>
											</a>
										))}
									</div>
								</div>
								<a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
									<TrashIcon className="h-4 w-4" />
									Clear conversations
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
		</>
	)
}

export default ChatPage
