/*

  Deployment Commands:

  Step 1: Deploy the Resource Group.
    Command:
      az deployment sub create \
        --template-file createResourceGroup.bicep \
        --parameters resourceGroupName=<resource-group-name> location='northeurope'

  **Notes:**
    - Replace `<resource-group-name>` with your desired Resource Group name.
    - Ensure that the `location` parameter matches your preferred Azure region.

*/

targetScope = 'subscription'

// Parameters to make the template reusable
@description('Name of the Resource Group to be created.')
param resourceGroupName string

@description('Azure region where the Resource Group will be created.')
param location string = 'northeurope'

// Define the Resource Group resource
resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: resourceGroupName
  location: location
}

// Outputs for referencing in subsequent deployments
output resourceGroupId string = rg.id
output resourceGroupName string = rg.name
output resourceGroupLocation string = rg.location
