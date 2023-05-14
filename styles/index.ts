/**
 * Everything exported from this file will be available
 * within the Remix app via the "~/styles" import.
 */

// Global styles
import './global.css'

// Component styles
import * as Button from '~/components/button/button.css'
import * as ColorPicker from '~/components/color-picker/color-picker.css'
import * as Footer from '~/components/footer/footer.css'
import * as Gradient from '~/components/gradient/gradient.css'
import * as GradientOptions from '~/components/gradient-options/gradient-options.css'
import * as Layout from '~/components/layout/layout.css'
import * as Legend from '~/components/legend/legend.css'
import * as Masthead from '~/components/masthead/masthead.css'
import * as Nav from '~/components/nav/nav.css'
import * as Option from '~/components/option/option.css'
import * as Panel from '~/components/panel/panel.css'
import * as Select from '~/components/select/select.css'
import * as Slider from '~/components/slider/slider.css'
import * as Stack from '~/components/stack/stack.css'
import * as Text from '~/components/text/text.css'
import * as TextLink from '~/components/text-link/text-link.css'
import * as Title from '~/components/title/title.css'

// Utility classes
export { themeClass, vars } from './theme.css'
export { sprinkles } from './sprinkles.css'
export type { Sprinkles } from './sprinkles.css'
export const componentStyles = {
	Button,
	ColorPicker,
	Footer,
	Gradient,
	GradientOptions,
	Layout,
	Legend,
	Masthead,
	Nav,
	Option,
	Panel,
	Select,
	Slider,
	Stack,
	Text,
	TextLink,
	Title,
}
