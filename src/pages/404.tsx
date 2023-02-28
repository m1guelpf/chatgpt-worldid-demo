import Error from 'next/error'

const Error404 = () => (
	<div className="bg-gray-50 dark:bg-gray-800 min-h-screen">
		<Error statusCode={404} />
	</div>
)

export default Error404
