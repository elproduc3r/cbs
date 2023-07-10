export interface CBSLSDataType {
  pageVisits: number;
};

export const CBS_KEY = 'cbs';

/**
 * On initial page load, this should increment the pageVisits.
 * 
 * If there is no data, it will default to zero. Then pageVisits
 * is incremented by 1 and updated in localStorage.
 * 
 * If the optional reset argument is true, the new pageVisit is overriden
 * and set to 1.
 * 
 * @returns the new pageVisit value which should be set in Context Provider
 */
export const initializePageVisits = (reset?: boolean): number => {
  const lsData = localStorage.getItem(CBS_KEY);
  let cbsData: CBSLSDataType = lsData ? JSON.parse(lsData) : {pageVisits: 0};
  cbsData.pageVisits = reset ? 1 : cbsData.pageVisits + 1;
  localStorage.setItem(CBS_KEY, JSON.stringify(cbsData));
  return cbsData.pageVisits;
};

/**
 * 
 * @returns the value for pageVisits that is stored in localStorage
 */
export const getPageVisits = (): number => {
  const lsData = localStorage.getItem(CBS_KEY);
  let cbsData: CBSLSDataType = lsData ? JSON.parse(lsData) : {pageVisits: 1};
  return cbsData.pageVisits;
}
