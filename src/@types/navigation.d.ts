export interface ProductParams {
  id: string;
  name: string;
  pictureUrl: string;
  description: string;
  iprice: string;
  quantity: number;
  familyId: string;
  about: string;
  cost: number;
  flavors: string;

}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      product: ProductParams;
      cart: undefined;     
      search: undefined;
    }
  }
}