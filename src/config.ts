export class Config {

  private config: any = {
    api_url: 'localhost:8080/api'
  }

  constructor() {
    console.log('Config initialized');
  }

  get(name: string) {
    return this.config[name];
  }

}
