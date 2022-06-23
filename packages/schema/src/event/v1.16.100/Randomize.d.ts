export type Randomize<Type> = {
	/**
	 * ## Randomize
	 *
	 * Runs a random event based on given weight.
	 */
	randomize?: ({
		/**
		 * ### Weight
		 *
		 * How likely the event is to run.
		 */
		weight: number

		/**
		 * ### Condition
		 *
		 * A MoLang that when evaluated to true will cause the event to run.
		 */
		condition?: string
	} & Type)[]
}
