export interface SmartphoneFiltersModel {
  ram: {
    min: number | null;
    max: number | null;
  };
  internalStorage: {
    min: number | null;
    max: number | null;
  };
}
