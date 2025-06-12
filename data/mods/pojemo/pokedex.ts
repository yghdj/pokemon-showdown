export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	magneton: {
		inherit: true,
		types: ["Electric", "Fire"],
	},
	meganium: {
		inherit: true,
		types: ["Grass", "Dragon"],
	},
	mightyena: {
		inherit: true,
		baseStats: { hp: 70, atk: 100, def: 80, spa: 70, spd: 70, spe: 70 },
		abilities: { 0: "Intimidate", 1: "Defiant", H: "Moxie" },
	},
}