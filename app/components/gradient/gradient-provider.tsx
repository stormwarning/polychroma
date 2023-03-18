import { type ReactNode, createContext, useReducer, useContext } from 'react';

type ColorMode = string;
type ColorStop = { color: string };

export const CHANGE_ANGLE = 0;
export const CHANGE_MODE = 1;
export const CHANGE_STOP = 2;

export type Action =
  | { type: typeof CHANGE_ANGLE; angle: number }
  | { type: typeof CHANGE_MODE; mode: ColorMode }
  | { type: typeof CHANGE_STOP; stop: ColorStop & { index: number } };

interface State {
  angle: number;
  mode: ColorMode;
  stops: Array<ColorStop>;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case CHANGE_ANGLE:
      return {
        ...state,
        angle: action.angle,
      };

    case CHANGE_MODE:
      return {
        ...state,
        mode: action.mode,
      };

    default:
      return state;
  }
}

interface ContextValues extends State {
  dispatch: (action: Action) => void;
}

const GradientContext = createContext<ContextValues | null>(null);
export const useGradientState = () => {
  let context = useContext(GradientContext);

  if (!context) throw new Error('Gradient context not available.');
  return context;
};

interface GradientProviderProps {
  children: ReactNode;
}
export function GradientProvider({ children }: GradientProviderProps) {
  let [state, dispatch] = useReducer(reducer, {
    angle: 30,
    mode: 'lab',
    stops: [{ color: '#000080' }, { color: '#ffff00' }],
  });

  return (
    <GradientContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GradientContext.Provider>
  );
}
