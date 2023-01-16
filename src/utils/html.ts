export const html = (staticArray: TemplateStringsArray, ...dynamic: (string | number)[]) => {
  const stringArray = staticArray || [];
  const array = (dynamic || []).map((singleDynamic, index) => {
    return `${stringArray[index] || ''}${singleDynamic || ''}`;
  });

  const lastIndexStatic = stringArray.length - 1;
  return `${array.join('')}${stringArray[lastIndexStatic]}`;
};
