/**
 * 
 * @param num  number of colors (size of array) to return
 * @returns array of colors that has length of num
 */

const getRandomColors = (num: number): string[] => {
  const COLORS = [
    'black','blue','brown','chocolate','coral','crimson','darkblue','darkcyan',
    'darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen',
    'darkorange','darkorchid','darkred','darksalmon','darkslateblue','darkslategray',
    'darkturquoise','darkviolet','deeppink','firebrick','forestgreen','fuchsia',
    'green','indigo','maroon','mediumblue','mediumorchid','mediumseagreen',
    'mediumslateblue','mediumvioletred', 'navy','olive','olivedrab', 'orangered',
    'purple','red','saddlebrown','salmon','sienna','slateblue','slategray', 'steelblue',
    'teal','tomato','violet'
  ];
  const getRandomNum = ():number => (Math.floor(Math.random() * (COLORS.length - 1)) + 0);
  const result = [COLORS[getRandomNum()]];
  while(result.length < num) {
    const nextColor = COLORS[getRandomNum()];
    if(result.indexOf(nextColor) < 0) {
      result.push(nextColor);
    }
  }
  return result;
};

export default getRandomColors;
