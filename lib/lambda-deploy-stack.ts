import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

const lambda = cdk.aws_lambda;

export class LambdaDeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new lambda.Function(this, 'HelloLambda', {
      runtime: Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('../src'),
      handler: 'index.handler',
      functionName: 'helloLambda',
    })
    
  }
}
