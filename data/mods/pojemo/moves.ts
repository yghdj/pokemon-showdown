export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
    /* Pour réactiver un move supprimé en 8G ou 9G faut juste copier/coller le move entier et suppr la ligne "isNonstandard: "Past"" */
    bonemerang: {
		num: 155,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Bonemerang",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		maxMove: { basePower: 130 },
		contestType: "Tough",
	}
}