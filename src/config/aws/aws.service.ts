import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
@Injectable()
export class AwsService {
  private readonly ssmClient: AWS.SSM;
  private currentEnv: string;
  constructor() {
    this.ssmClient = new AWS.SSM({
      region: 'eu-north-1',
    });
  }

  async getParameter(parameterKey: string, isSecure: boolean = false) {
    return this.ssmClient
      .getParameter({
        Name: `${parameterKey}`,
        WithDecryption: isSecure,
      })
      .promise();
  }
}
