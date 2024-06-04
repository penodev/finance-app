export enum VARIANTS {
  LIST = "LIST",
  IMPORT = "IMPORT",
}

export const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {},
};

export const dateFormat = "yyyy-MM-dd HH:mm:ss";
export const outputFormat = "yyyy-MM-dd";

export const requiredOptions = ["amount", "date", "payee"];
