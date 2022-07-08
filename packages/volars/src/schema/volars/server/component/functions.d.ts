import type { LootTable as LootTableTemplate } from '../../../vanilla/loot-table'
import type { Recipe as RecipeTemplate } from '../../../vanilla/recipe'

type LootTableFunction = {
	/**
	 * # Loot Table
	 *
	 * Defines a loot table that is generated with the provided template at build time.
	 */
	lootTable: (template: LootTableTemplate, path: string) => void
}

type RecipeFunction = {
	/**
	 * # Recipe
	 *
	 * Defines a recipe that is generated with the provided template at build time.
	 */
	recipe: (template: RecipeTemplate, path: string) => void
}

export { LootTableFunction, RecipeFunction }