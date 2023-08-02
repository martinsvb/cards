const deckApiPath = "https://deckofcardsapi.com/api/deck/";

export const cardBackImg = "https://deckofcardsapi.com/static/img/back.png";

export const apiEndpoints = {
  NewShuffle: `${deckApiPath}new/shuffle/?deck_count=:count`,
  DrawCard: `${deckApiPath}:id/draw/?count=:count`,
  RechuffleCards: `${deckApiPath}:id/shuffle/?remaining=:remaining`,
  NewDeck: `${deckApiPath}new/?jokers_enabled=:jokers`,
  PartialDeck: `${deckApiPath}new/shuffle/?cards=:cards`,
  AddToPiles: `${deckApiPath}:id/pile/:pile/add/?cards=:cards`,
  ShufflePiles: `${deckApiPath}:id/pile/:pile/shuffle/`,
  PilesList: `${deckApiPath}:id/pile/:pile/list/`,
  PilesDraw: `${deckApiPath}:id/pile/:pile/draw/?cards=:cards`,
};
