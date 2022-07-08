import type { Pools } from '../../../vanilla/loot-table'
import type { Namespace } from '../../namespace'

type LootTableTemplate = Namespace & {
	/**
	 * ## Pools
	 *
	 * Lists the loot pools for this loot table.
	 */
	pools: (template: Pools[]) => void
}

export { LootTableTemplate }