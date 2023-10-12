'use strict';

var msRest = require("@azure/ms-rest-js");
var Face = require("@azure/cognitiveservices-face");

const FileSet = require('file-set');
const createReadStream = require('fs').createReadStream;
const uuidV4 = require('uuid');

const IMAGE_BASE_URL = process.env.PHOTOS_URL;
// Person Group ID must be lower case, alphanumeric, with '-' and/or '_'.
const PERSON_GROUP_ID = 'my-unique-person-group'

let key = process.env.VISION_KEY;
let endpoint = "https://tenants.cognitiveservices.azure.com/";

let credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });
let client = new Face.FaceClient(credentials, endpoint);

async function main() {
    console.log("---------------------------------")
    console.log("PERSON GROUP")
    // Create empty Person Group. Returns a Promise<RestResponse>. 
    await client.personGroup.create(PERSON_GROUP_ID, PERSON_GROUP_ID)
        .then(() => {
        }).catch((err) => {
            console.log(err)
            throw err
        })
    console.log('Person group ID: ' + PERSON_GROUP_ID + ' was created.')

    // Define woman friend, add them to person group, returns a Promise<Person>
    let ty = await client.personGroupPerson.create(PERSON_GROUP_ID, { "name": "Ty" })
        .then((tyFace) => {
            console.log('Person ' + tyFace.personId + ' was created.')
            return tyFace
        }).catch((err) => {
            throw err
        })

    console.log()

    // Detect faces and register to correct person
    // Make array of jpeg images of friends in working directory
    let tyImages = new FileSet("ty*.JPG").files


    // Add images to the person group person "woman"
    for (let tyImage of tyImages) {
        // Returns a Promise<PersistedFace>
        await client.personGroupPerson.addFaceFromStream(PERSON_GROUP_ID,
            ty.personId, () => createReadStream(tyImage))
            .then((face) => {
                console.log('ID ' + face.persistedFaceId + ' was added to a person group person called Ty.')
            })
    }

    console.log()

    // After all Persons added to person group, train the person group.
    console.log('Training the person group...')
    await client.personGroup.train(PERSON_GROUP_ID)

    while (true) {
        let status = await client.personGroup.getTrainingStatus(PERSON_GROUP_ID)
            .then((trainingStatusResponse) => {
                return trainingStatusResponse
            })
        console.log('Training status: ' + status.status)
        if (status.status == 'failed') {
            console.log('Training the person group has failed.')
            break;
        }
        if (status.status == 'succeeded') {
            console.log('Training the person group was a success.')
            break;
        }

        await sleep(1000)
    }
    console.log()
}
main();