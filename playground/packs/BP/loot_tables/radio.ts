import { defineLootTable } from 'atropa/core'

export default defineLootTable(({ namespace, pools }) => {
	pools([
		{
			rolls: 1,
			entries: [
				{
					type: 'item',
					name: `${namespace}:radio`,
					weight: 1
				}
			]
		}
	])
})
