const THEME: object = {
  primary: '#fff',
  secondary: 'rgb(13, 110, 241)',
  background: 'rgb(27, 34, 45)',
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    maxWidth: '1200px',
  },
  gutter: '8px',

  // mixin for the grid
  nColumns: (nColumns: number = 1): string => `
		flex: 0 0 ${100 / nColumns}%;
		max-width: ${100 / nColumns}%;
  `,

  // mixin for font
  font: (
    fontSize: string = '1rem',
    fontWeight: string = 'normal',
    lineHeight: string = 'normal'
  ): string => `
		font-size: ${fontSize};
		font-weight: ${fontWeight};
		line-height: ${lineHeight};
  `,

  // mixin for truncating at the end of 1 line
  singleLine: (): string => `
  	white-space: nowrap; /* for 1 liner only */
		overflow: hidden;
		text-overflow: ellipsis;
  `,
};

export default THEME;
