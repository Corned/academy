/*
  Step 1: Build the Bicep file to check for syntax errors.
    Command:
      az bicep build --file main.bicep

  Step 2: Preview the deployment changes in Azure.
    Command:
      az deployment group what-if \
        --resource-group <YourResourceGroupName> \
        --template-file main.bicep \
        --parameters environmentType='nonprod'

  Step 3: Deploy the resources to Azure.
    Command:
      az deployment group create \
        --resource-group <YourResourceGroupName> \
        --template-file main.bicep \
        --parameters environmentType='nonprod'

  **Notes:**
    - Replace `<YourResourceGroupName>` with the name of the resource group created by `createResourceGroup.bicep`.
    - The `environmentType` parameter must be either `'nonprod'` or `'prod'`.
    - Optionally, you can override the `appServiceAppName` by modifying the variable in this file or through parameters.
*/

@description('Specifies the environment type. Allowed values are nonprod or prod.')
@allowed([
  'nonprod'
  'prod'
])
param environmentType string

@description('Location for deploying resources. Defaults to the resource group location.')
param location string = resourceGroup().location

var appServiceAppName = 'academy-${(environmentType == 'prod') ? 'prod' : 'dev'}-app-${uniqueString(resourceGroup().id)}'
var keyvaultName = 'academy-${(environmentType == 'prod') ? 'prod' : 'dev'}-keyvault-${uniqueString(resourceGroup().id)}'

module appService 'modules/appService.bicep' = {
  name: 'appService'
  params: {
    location: location
    appServiceAppName: appServiceAppName
    keyvaultName: keyvaultName
    environmentType: environmentType
  }
}
