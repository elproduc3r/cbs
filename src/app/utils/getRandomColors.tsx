/**
 * 
 * @param num  number of colors (size of array) to return
 * @returns array of colors that has length of num
 */

const getRandomColors = (num: number): string[] => {
  const COLORS = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque",
    "black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse",
    "chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan",
    "darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta",
    "darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen",
    "darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink",
    "deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen",
    "fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey",
    "honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush"
  ];
  const getRandomNum = ():number => (Math.floor(Math.random() * (COLORS.length - 1)) + 0);
  const result = [COLORS[getRandomNum()]];
  while(result.length < num) {
    const nextRandomNum = getRandomNum();
    const nextColor = COLORS[nextRandomNum];
    if(result.indexOf(nextColor) < 0) {
      result.push(nextColor)
    }
  }
  return result;
};

export default getRandomColors;