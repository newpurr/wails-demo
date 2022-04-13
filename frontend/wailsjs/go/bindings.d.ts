import * as models from './models';

export interface go {
  "main": {
    "App": {
		Ctx():Promise<models.Context>
		Greet(arg1:string):Promise<string>
    },
  }

}

declare global {
	interface Window {
		go: go;
	}
}
