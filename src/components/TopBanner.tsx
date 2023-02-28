import { XMarkIcon } from '@heroicons/react/20/solid'

const TopBanner = () => {
	return (
		<div className="flex items-center gap-x-6 bg-primary py-2.5 px-6 sm:px-3.5 z-50 absolute top-0 inset-x-0">
			<p className="text-sm leading-6 text-white flex items-center justify-center w-full">
				<strong className="font-semibold">Human Mode</strong>
				<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
					<circle cx={1} cy={1} r={1} />
				</svg>
				<span>You have priority access to models.</span>
			</p>
		</div>
	)
}

export default TopBanner
