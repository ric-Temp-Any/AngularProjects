import { InjectionToken } from '@angular/core';

class InvalidInjectionTokenId extends Error {
    constructor(injectionTokenId: TInjectionTokenId) {
        super();
    }
  }
  class AlreadyExistingInjectionTokenId extends Error {
    constructor(injectionTokenId: TInjectionTokenId) {
        super();
    }
  }
  
  
  
  type TInjectionTokenId = string;
  interface IInjectionTokens {
    add<T>(injectionTokenId: TInjectionTokenId, injectionToken: InjectionToken<T>) : IInjectionTokens;
  
    get<T>(injectionTokenId: TInjectionTokenId): InjectionToken<T>;
  }
  
  class InjectionTokens implements IInjectionTokens {
    private injectionTokens: Map<TInjectionTokenId, InjectionToken<any>>;
  
    constructor() {
        this.injectionTokens = new Map<TInjectionTokenId, InjectionToken<any>>();
    }
  
    public add<T>(injectionTokenId: TInjectionTokenId, injectionToken: InjectionToken<T>) : IInjectionTokens {
        if (this.existsInjectionId(injectionTokenId)) {
            throw new AlreadyExistingInjectionTokenId(injectionTokenId);
        }
        this.injectionTokens.set(injectionTokenId, injectionToken);
        return this;
    }
  
    public get<T>(injectionTokenId: TInjectionTokenId): InjectionToken<T> {
        const injectionToken: InjectionToken<T> | undefined = this.injectionTokens.get(injectionTokenId);
        if (injectionToken == undefined) {
            throw new InvalidInjectionTokenId(injectionTokenId);
        }
        return injectionToken;
    }
  
    private existsInjectionId(injectionTokenId: TInjectionTokenId): boolean {
        const retour: boolean = (this.injectionTokens.get(injectionTokenId) !== undefined);
        return(retour);
        
    }
  
  }
  

//   class InvalidInjectionTokens extends Error {

//   }

//   interface IComponentOrService {

//   }
//   class ComponentOrService {
//       private _injectionTokens: InjectionTokens;

//       constructor(injectionTokens: InjectionTokens) {
//           this.setInjectionTokens(injectionTokens);
//       }
//       private setInjectionTokens(injectionTokens: InjectionTokens) {
//           if (injectionTokens) {
//             this._injectionTokens = injectionTokens;
//           } else throw new InvalidInjectionTokens();
//       }
//   }


interface IClass<TConcreteType> extends Function {
    new(...args: any[]): TConcreteType; //Signature de constructeur
}

type TComponentOrService = IClass<any>;

interface IModule {

}

class AlreadyExistingInjectionTokens extends Error {
    constructor(private componentOrService: TComponentOrService) {
        super();
        console.log(componentOrService);
    }

}
class InvalidComponentOrService extends Error {
    constructor(private componentOrService: TComponentOrService) {
        super();
        console.log(componentOrService);
    }    
}


class Module implements IModule {
    private injectionTokens: Map<TComponentOrService, InjectionTokens>;
  
    constructor() {
        this.injectionTokens = new Map<TComponentOrService, InjectionTokens>();
    }
  
    public addInjectionTokens(componentOrService: TComponentOrService, injectionTokens: InjectionTokens) : IModule {
        if (this.existsComponentOrServiceInjectionTokens(componentOrService)) {
            throw new AlreadyExistingInjectionTokens(componentOrService);
        }
        this.injectionTokens.set(componentOrService, injectionTokens);
        return this;
    }
  
    public getInjectionTokens(componentOrService: TComponentOrService): InjectionTokens {
        const injectionTokens: InjectionTokens | undefined = this.injectionTokens.get(componentOrService);
        if (injectionTokens == undefined) {
            throw new InvalidComponentOrService(componentOrService);
        }
        return injectionTokens;
    }
  
    private existsComponentOrServiceInjectionTokens(componentOrService: TComponentOrService): boolean {
        const retour: boolean = (this.injectionTokens.get(componentOrService) !== undefined);
        return(retour);
        
    }
  
  }

  
