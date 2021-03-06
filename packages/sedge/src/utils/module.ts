import { pathToFileURL } from 'url'
import { normalize } from 'pathe'
import { resolvePath } from 'mlly'
import { blue } from 'colorette'
import type { createAtropa } from '../../../atropa/src/compiler'
import type { loadConfig, Config } from '../../../atropa/src/config'

export async function importAtropa<Submodule extends 'compiler' | 'config'>(
	submodule: Submodule
): Promise<
	Submodule extends 'compiler'
		? { createAtropa: typeof createAtropa }
		: Submodule extends 'config'
		? { loadConfig: typeof loadConfig }
		: never
> {
	try {
		const resolvedPath = normalize(await resolvePath(`atropa/${submodule}`))
		return import(pathToFileURL(resolvedPath).href)
	} catch (error) {
		throw new Error(
			`This command requires the ${blue(
				'atropa'
			)} package to be installed in your project`,
			{ cause: error as Error }
		)
	}
}
export type { Config }
