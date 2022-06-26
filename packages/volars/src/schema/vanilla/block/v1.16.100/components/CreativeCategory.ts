import { CreativeGroup, ItemGroup } from '../../../CreativeGroup'

export type CreativeCategory = {
	/**
	 * ## Creative Category
	 *
	 * Specifies the menu category and group for the block, which determine where this block is placed in the inventory and crafting table container screens.
	 * If this component is omitted, the block will not appear in the inventory or crafting table container screens.
	 *
	 * @requires Holiday Creator Features
	 */
	creative_category?: {
		/**
		 * ### Creative Group
		 *
		 * Determines which category this block will be placed under in the inventory and crafting table container screens.
		 * If omitted or `"none"` is specified, the block will not appear in the inventory or crafting table container screens.
		 */
		group?: CreativeGroup | ItemGroup

		/**
		 * ### Category
		 *
		 * Specifies the language file key that maps to which expandable/collapsible group this block will be a part of within a category.
		 * If the string given can not be resolved as a loc string, then we will check if there is an existing group whose name matches the raw string.
		 * If this field is omitted, or there is no group whose name matches the loc string or the raw string, this block will be placed standalone in the given category.
		 */
		category?: CreativeGroup
	}
}
