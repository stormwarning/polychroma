<template>
	<article class="min-h-screen">
		<div class="header lg:sticky top-0 z-10 lg:h-screen pointer-events-none mix-burn">
			<AppMasthead class="mix-burn" />
		</div>
		<main>
			<AppNav />
			<section class="p-8 lg:pt-0 lg:pb-16">
				<slot />
			</section>
			<GradientOutput class="sticky lg:top-0 lg:bottom-0 lg:h-screen" />
		</main>
		<AppFooter class="sticky lg:top-0 lg:bottom-0 lg:h-screen" />
	</article>
</template>

<script setup lang="ts">
// Components are auto-imported in Nuxt 3
</script>

<style scoped>
article {
	display: grid;
	grid-template-areas: 'main' 'footer';
	grid-template-rows: 1fr 120px;
	grid-template-columns: 1fr;
}

@screen lg {
	article {
		grid-template-areas: 'main sidebar';
		grid-template-rows: auto;
		grid-template-columns: 1fr 240px;
	}
}

main {
	display: grid;
	grid-area: main;
	grid-template-areas: 'result' 'navbar' 'content';
	grid-template-rows: 33vb 4rem 1fr;
	grid-template-columns: 1fr;
}

@screen lg {
	main {
		grid-template-areas: 'navbar result' 'content result';
		grid-template-rows: 8.5rem auto;
		grid-template-columns: 1fr 1fr;
	}
}

main > section {
	grid-area: content;
}

nav {
	grid-area: navbar;
}

figure {
	grid-area: result;
}

.header {
	@screen lg {
		grid-area: sidebar;
		grid-row: 1;
	}
}
</style>
