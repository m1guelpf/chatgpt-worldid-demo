export const classNames = (...classes: unknown[]) => {
	return classes.filter(Boolean).join(' ')
}
