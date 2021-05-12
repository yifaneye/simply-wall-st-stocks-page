export interface ScoreArea {
  key: string;
  name: string;
}

// separate key and display name to decouple
// (e.g. DIVIDEND on the page uses income from the API response)
export const SCORE_AREAS: ScoreArea[] = [
  { key: 'value', name: 'VALUE' },
  { key: 'income', name: 'DIVIDEND' },
  { key: 'health', name: 'HEALTH' },
  { key: 'past', name: 'PAST' },
  { key: 'future', name: 'FUTURE' },
];
