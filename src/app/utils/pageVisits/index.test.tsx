import {initializePageVisits, getPageVisits, CBS_KEY} from './';

interface StoreType {
  [index: string]: string;
};

var localStorageMock = (function() {
  var store: StoreType = {};
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key: string) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe("pageVisits (utils)", () => {
  describe("initializePageVisits", () => {
    test('initializes correct data, when NO data exists', () => {
      const pageVisits = initializePageVisits();
      expect(pageVisits).toBe(1);
    });
    test('initializes correct data, when data exists', () => {
      const mockData = {
        pageVisits: 1
      };
      localStorage.setItem(CBS_KEY, JSON.stringify(mockData));
      const pageVisits = initializePageVisits();
      expect(pageVisits).toBe(mockData.pageVisits + 1);
      const nextVisit = initializePageVisits();
      expect(nextVisit).toBe(mockData.pageVisits + 2);
    });
    test('resets pageVisit to 1 when reset arg is true', () => {
      const mockData = {
        pageVisits: 10
      };
      localStorage.setItem(CBS_KEY, JSON.stringify(mockData));
      const pageVisits = initializePageVisits(true);
      expect(pageVisits).toBe(1);
    });
    test('resets pageVisit to 1 when there is no data in ls', () => {
      const pageVisits = initializePageVisits(true);
      expect(pageVisits).toBe(1);
    });
  });
  describe("getPageVisits", () => {
    test('returns 1 as default when no data exists in localStorage', () => {
      localStorage.clear();
      const result = getPageVisits();
      expect(result).toEqual(1);
    });
    test('returns correct value', () => {
      const mockData = {
        pageVisits: 3
      };
      localStorage.setItem(CBS_KEY, JSON.stringify(mockData));
      const pageVisits = getPageVisits();
      expect(pageVisits).toBe(mockData.pageVisits);
    });
  });  
});
