import { InjectionToken } from '@angular/core';
import { IClass } from '@Helpers_Module/';

type TComponentOrService = IClass<any>;
type TModule = IClass<any>;
type TInjectionTokensMap = Map<TComponentOrService, TInjectionTokensList>;

export class InjectionTokensProvider {
    private modulesInjectionTokensMap: Map<TModule, TInjectionTokensMap>;

    constructor() {
        this.modulesInjectionTokensMap = new Map<TModule, TInjectionTokensMap>();
    }

    setModuleInjectionTokens(module: TModule, moduleInjectionTokensMap: TInjectionTokensMap): void {
        this.modulesInjectionTokensMap.set(module, moduleInjectionTokensMap);
    }

    getModuleComponentOrServiceInjectionToken<T>(
        module: TModule, 
        componentOrService: TComponentOrService, 
        injectionTokenId: string
    ): InjectionToken<T> {
        let injectionToken: InjectionToken<T> = null;
        const moduleInjectionTokensMap: TInjectionTokensMap | undefined = this.modulesInjectionTokensMap.get(module);
        if (moduleInjectionTokensMap) {
            injectionToken = this.getModuleInjectionTokensMapComponentOrServiceInjectionToken<T>(
                moduleInjectionTokensMap,
                componentOrService,
                injectionTokenId
            );

        } else {

        }
        return injectionToken;
    }

    private getModuleInjectionTokensMapComponentOrServiceInjectionToken<T>(
        injectionTokensMap: TInjectionTokensMap, 
        componentOrService: TComponentOrService,
        injectionTokenId: string
    ) : InjectionToken<T> | null {
        let injectionToken: InjectionToken<T> | null = null;
        const injectionTokensList: TInjectionTokensList | undefined = injectionTokensMap.get(componentOrService);
        if (injectionTokensList) {
            injectionToken = injectionTokensList[injectionTokenId];
        }
        return injectionToken;
    }
    
}

// type TInjectionTokensList = {[key: string]: InjectionToken<any>};

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

class InjectionTokens implements IInjectionTokens{
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

class ComponentOrerv

const injectionTokens: InjectionTokens = new InjectionTokens();
injectionTokens
.add("10", new InjectionToken(""))
.add<InjectionTokens>("10", new InjectionToken<InvalidInjectionTokenId>(""));

class ModuleInjectionTokensMap {
    private injectionTokensMap: Map<TModule, TInjectionTokensMap>;
}