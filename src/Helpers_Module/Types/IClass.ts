export interface IClass<TConcreteType> extends Function {
  new(...args: any[]): TConcreteType; //Signature de constructeur
}
