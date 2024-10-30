@description('Location where the App Service and App Service Plan will be deployed.')
param location string

@description('Name of the App Service application.')
param appServiceAppName string

@description('Name of the Key Vault.')
param keyvaultName string

@description('Specifies the environment type. Allowed values are nonprod or prod.')
@allowed([
  'nonprod'
  'prod'
])
param environmentType string

var appServicePlanName = 'taitovarasto-${(environmentType == 'prod') ? 'prod' : 'dev'}-asp-${uniqueString(resourceGroup().id)}'
var appServicePlanSkuName = (environmentType == 'prod') ? 'P2v3' : 'F1'
var appServicePlanTier = (environmentType == 'prod') ? 'PremiumV3' : 'Free'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: appServicePlanSkuName
    tier: appServicePlanTier
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2021-04-01-preview' = {
  name: keyvaultName
  location: location
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: subscription().tenantId
    accessPolicies: [
      // Define access policies as needed
    ]
  }
}

resource dbSecret 'Microsoft.KeyVault/vaults/secrets@2021-04-01-preview' = {
  parent: keyVault
  name: 'DatabaseConnectionString'
  properties: {
    value: 'YourDatabaseConnectionString'
  }
}

resource appServiceApp 'Microsoft.Web/sites@2021-02-01' = {
  name: appServiceAppName
  location: location
  kind: 'app,linux,container'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'DOCKER|<your-docker-image>'
      appSettings: [
        {
          name: 'ENVIRONMENT_TYPE'
          value: environmentType
        }
        {
          name: 'DATABASE_CONNECTION_STRING'
          value: 'https://${keyVault.name}.vault.azure.net/secrets/${dbSecret.name}/'
        }
        // Add more environment variables as needed
      ]
    }
  }
}


output appServiceAppHostName string = appServiceApp.properties.defaultHostName
