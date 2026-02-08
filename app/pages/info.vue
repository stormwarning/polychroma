<template>
	<div class="m-0 text-sm">
		<div class="p-0 m-0 mb-16 max-w-md mx-auto">
			<h2 class="text-sm font-semibold uppercase tracking-widest">About</h2>
			<div class="prose prose-sm">
				<p>
					When defining a standard two-colour gradient, browsers interpolate using
					<code>RGB</code>, which can go through kind of greyish colours.
					<code>Lab</code> interpolation produces better, more even&nbsp;results.
				</p>
				<p>
					Other interpolation modes (<code>HSL</code> and <code>Lch</code> for now,
					working on adding more) are included as options for experimentation — the
					results can be&nbsp;overly-saturated.
				</p>
			</div>

			<h2 class="text-sm font-semibold uppercase tracking-widest mt-8">Background</h2>
			<div class="prose prose-sm">
				<p>
					The idea for Polychroma started after discovering Bugsnag's
					<a href="https://blog.bugsnag.com/chromatic-sass/">chromatic-sass</a>
					project. I loved the idea of a more natural-looking gradient, but I wanted a way
					to visualise the results without needing to update my dev&nbsp;stack.
				</p>
				<p>
					I looked into the library that powered it — the amazing
					<a href="https://vis4.net/chromajs/">chroma.js</a> — and after tumbling down a
					rabbit hole of colour science and data visualisation, ended up with this simple
					little tool. Use it to grab a quick CSS snippet, or plug the resulting colour
					values into Figma, Sketch, or your image editor of choice to use
					in&nbsp;mockups.
				</p>
			</div>

			<h2 class="text-sm font-semibold uppercase tracking-widest mt-8">Colophon</h2>
			<div class="prose prose-sm">
				<p>
					Polychroma is built with <a href="https://nuxt.com/">Nuxt</a> — a
					<a href="https://vuejs.org/">Vue.js</a> framework — and
					<a href="https://vis4.net/chromajs/">chroma.js</a> by Gregor&nbsp;Aisch.
				</p>
				<p>
					It uses <a href="https://tailwindcss.com/">Tailwind CSS</a> for most of the
					styling, with a few tweaks and custom&nbsp;styles.
				</p>
				<p>
					The text is set in <a href="https://rsms.me/inter/">Inter</a>, specifically the
					400, 600, and 700&nbsp;weights.
				</p>
				<p>
					Comments & suggestions are very welcome! You can leave a message on
					<a href="https://twitter.com/stormwarning">Twitter</a> or file an issue on
					<a href="https://github.com/stormwarning/polychroma">GitHub</a>.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// Static content page - no dynamic logic needed
</script>

<style lang="postcss">
.prose a {
	color: #16191b;
	transition: opacity 150ms ease-in;

	&:hover,
	&:focus {
		opacity: 0.5;
	}
}

.prose code {
	padding: 0.1875rem 0.25rem;
	margin: 0 1px;
	background-color: rgb(0 0 0 / 5%);
	border-radius: 0.125rem;
}
</style>
