import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigValuesHelper {
  public readonly DB_USER: string;
  public readonly DB_PASSWORD: string;

  constructor() {
    // Stops the server boot if any required config is missing

    this.DB_USER = process.env.DB_USER ?? '';

    if (!this.DB_USER.length) {
      throw new Error('DB_USER is required');
    }

    this.DB_PASSWORD = process.env.DB_PASSWORD ?? '';

    if (!this.DB_PASSWORD.length) {
      throw new Error('DB_PASSWORD is required');
    }
  }
}
