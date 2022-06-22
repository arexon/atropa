import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	clean: true,
	declaration: true,
	entries: ['src/index', 'src/cli'],
	rollup: {
		esbuild: {
			target: 'esnext'
		}
	}
})
