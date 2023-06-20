import { type ReactNode, createContext } from 'react'

const OptionContext = createContext(null)

interface Props {
	children: ReactNode
}

export function OptionGroup({ children }: Props) {
	return (
		<OptionContext.Provider value={null}>{children}</OptionContext.Provider>
	)
}
