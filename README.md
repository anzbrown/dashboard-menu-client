[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/anzbrown/dashboard-menu-client/Node.js%20CI/main?style=for-the-badge)](https://github.com/anzbrown/dashboard-menu-client/actions?query=workflow%3A%22Node.js+CI%22%22+branch%3Amain+)

<a href="https://www.buymeacoffee.com/adambrown" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## TODO:

* apply transition speed to rotation of list header svg and not colour transition 
* Write the REACT_APP secrets required for the app to a .env file in the prestart script so that the app will run in GAE

### Configuration
This react app requires the following environment variables:

| Parameter    	        | value 	            | Required 	| Description   |
|-----------------------|-----------------------|-----------|---------------|
| GOOGLE_CLOUD_PROJECT  |                       | Yes       | The automatically provided value of the google cloud project when deployed in GAE. |
