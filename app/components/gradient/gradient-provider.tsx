import type { ReactNode } from 'react'
import { createContext, useReducer, useContext } from 'react'

import Color from 'colorjs.io'

type ColorMode = string
type ColorStop = { color: string }

export const CHANGE_ANGLE = 0
export const CHANGE_MODE = 1
export const CHANGE_STOP = 2

export type Action =
	| { type: typeof CHANGE_ANGLE; angle: number }
	| { type: typeof CHANGE_MODE; mode: ColorMode }
	| { type: typeof CHANGE_STOP; stop: ColorStop & { index: number } }

interface State {
	angle: number
	mode: ColorMode
	stops: Array<ColorStop>
}

function reducer(state: State, action: Action) {
	switch (action.type) {
		case CHANGE_ANGLE:
			return {
				...state,
				angle: action.angle,
			}

		case CHANGE_MODE:
			return {
				...state,
				mode: action.mode,
			}

		default:
			return state
	}
}

interface ContextValues extends State {
	dispatch: (action: Action) => void
	gradient: string
	fixedGradient: string
}

const GradientContext = createContext<ContextValues | null>(null)
export const useGradientState = () => {
	let context = useContext(GradientContext)

	if (!context) throw new Error('Gradient context not available.')
	return context
}

interface GradientProviderProps {
	children: ReactNode
}
export function GradientProvider({ children }: GradientProviderProps) {
	let [state, dispatch] = useReducer(reducer, {
		angle: 30,
		mode: 'lab',
		stops: [{ color: '#000080' }, { color: '#ffff00' }],
	})

	let gradientSteps =
		state.mode === 'srgb' ? state.stops.length : state.stops.length + 5
	let scale = Color.steps(
		Color.parse(state.stops[0].color),
		Color.parse(state.stops[1].color),
		{
			space: state.mode,
			outputSpace: 'srgb',
			steps: gradientSteps,
		}
	)
	let colorStops = []
	let positions: Array<number> = []

	for (let [index, step] of scale.entries()) {
		let t = index / (scale.length - 1)
		colorStops.push(step.display({ format: 'hex' }))
		positions.push(Math.floor(t * 100))
	}

	let gradient = `linear-gradient(${state.angle}deg${colorStops
		.map((stop, index) => `, ${stop} ${positions[index]}%`)
		.join('')})`
	let fixedGradient = gradient.replace(/\d*deg/, 'to right')

	return (
		<GradientContext.Provider
			value={{ ...state, dispatch, gradient, fixedGradient }}
		>
			{children}
		</GradientContext.Provider>
	)
}
