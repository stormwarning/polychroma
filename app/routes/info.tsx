import { Box, Stack, Text, TextLink, Title } from '~/components'

export default function Info() {
	return (
		<Box maxWidth="md" marginX="auto" paddingBottom={64}>
			<Stack space="32">
				<Stack>
					<Title>About</Title>
					<Text as="p" size="sm" leading="relaxed">
						When defining a standard two-colour gradient, browsers
						interpolate using <code>RGB</code>, which can go through
						kind of greyish colours. <code>Lab</code> interpolation
						produces better, more even&nbsp;results.
					</Text>
					<Text as="p" size="sm" leading="relaxed">
						Other interpolation modes (<code>HSL</code> and{' '}
						<code>Lch</code> for now, working on adding more) are
						included as options for experimentation — the results
						can be&nbsp;overly-saturated.
					</Text>
				</Stack>

				<Stack>
					<Title>Background</Title>
					<Text as="p" size="sm" leading="relaxed">
						The idea for Polychroma started after discovering
						Bugsnag’s{' '}
						<TextLink to="https://blog.bugsnag.com/chromatic-sass/">
							chromatic-sass
						</TextLink>{' '}
						project. I loved the idea of a more natural-looking
						gradient, but I wanted a way to visualise the results
						without needing to update my dev&nbsp;stack.
					</Text>
					<Text as="p" size="sm" leading="relaxed">
						I looked into the library that powered it — the amazing{' '}
						<TextLink to="https://vis4.net/chromajs/">
							chroma.js
						</TextLink>{' '}
						— and after tumbling down a rabbit hole of colour
						science and data visualisation, ended up with this
						simple little tool. Use it to grab a quick CSS snippet,
						or plug the resulting colour values into Figma, Sketch,
						or your image editor of choice to use in&nbsp;mockups.
					</Text>
				</Stack>

				<Stack>
					<Title>Colophon</Title>
					<Text as="p" size="sm" leading="relaxed">
						Polychroma is built with{' '}
						<TextLink to="https://nuxtjs.org/">Nuxt.js</TextLink> —
						a <TextLink to="https://vuejs.org/">Vue.js</TextLink>{' '}
						framework — and{' '}
						<TextLink to="https://vis4.net/chromajs/">
							chroma.js
						</TextLink>{' '}
						by Gregor&nbsp;Aisch.
					</Text>
					<Text as="p" size="sm" leading="relaxed">
						It uses{' '}
						<TextLink to="https://tailwindcss.com/">
							Tailwind CSS
						</TextLink>{' '}
						for most of the styling, with a few tweaks and
						custom&nbsp;styles.
					</Text>
					<Text as="p" size="sm" leading="relaxed">
						The text is set in{' '}
						<TextLink to="https://rsms.me/inter/">Inter</TextLink>,
						specifically the 400, 600, and 700&nbsp;weights.
					</Text>
					<Text as="p" size="sm" leading="relaxed">
						Comments & suggestions are very welcome! You can leave a
						message on{' '}
						<TextLink to="https://twitter.com/stormwarning">
							Twitter
						</TextLink>{' '}
						or file an issue on&nbsp;
						<TextLink to="https://github.com/stormwarning/polychroma">
							GitHub
						</TextLink>
						.
					</Text>
				</Stack>
			</Stack>
		</Box>
	)
}
