import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const Events = {
  "data": [
    {
      "payload":
      {
        "id": "00114a9f-00dc-4f39-a6ac-af1b7e0543e7", "fluid": "caffeinated", "observed":
          false, "visit_id": "5cc23bf0-8b66-f8a8-4339-688e1d43e11a", "timestamp": "2019-04-26T07:08:21.758Z", "event_type": "fluid_intake_observation", "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "consumed_volume_ml": 230
      }, "alert_id": null, "task_instance_id": null, "visit_id": "5cc23bf0-8b66-f8a8-4339-688e1d43e11a", "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b", "payload_as_text": "{\"id\": \"00114a9f-00dc-4f39-a6ac-af1b7e0543e7\", \"fluid\": \"caffeinated\", \"observed\": false, \"visit_id\": \"5cc23bf0-8b66-f8a8-4339-688e1d43e11a\", \"timestamp\": \"2019-04-26T07:08:21.758Z\", \"event_type\": \"fluid_intake_observation\", \"caregiver_id\": \"220d9432-b5ed-4c81-8709-434899d2cd1b\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"consumed_volume_ml\": 230}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-04-26T07:08:21.758Z", "id": "00114a9f-00dc-4f39-a6ac-af1b7e0543e7", "event_type": "fluid_intake_observation", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "006139b8-a387-4529-9280-2d798c500aeb", "visit_id": "5cd753f0-8b66-f8a8-4591-3f78ca3f9c45", "timestamp": "2019-05-12T07:23:12.789Z", "event_type": "task_completed", "caregiver_id": "5c9090ab-7d5e-4a72-8bf7-197190ad4c98", "task_instance_id": "dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=", "task_schedule_id": "f256baea-c812-4cec-9514-0c79b3cfd033", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "1bf3b81d-40b0-4539-ba96-9ea12ad6110b", "task_schedule_note": "Please assist me to brush my teeth", "task_definition_description": "Assist with oral hygiene" }, "alert_id": null, "task_instance_id": "dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=", "visit_id": "5cd753f0-8b66-f8a8-4591-3f78ca3f9c45", "caregiver_id": "5c9090ab-7d5e-4a72-8bf7-197190ad4c98", "payload_as_text": "{\"id\": \"006139b8-a387-4529-9280-2d798c500aeb\", \"visit_id\": \"5cd753f0-8b66-f8a8-4591-3f78ca3f9c45\", \"timestamp\": \"2019-05-12T07:23:12.789Z\", \"event_type\": \"task_completed\", \"caregiver_id\": \"5c9090ab-7d5e-4a72-8bf7-197190ad4c98\", \"task_instance_id\": \"dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=\", \"task_schedule_id\": \"f256baea-c812-4cec-9514-0c79b3cfd033\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"task_definition_id\": \"1bf3b81d-40b0-4539-ba96-9ea12ad6110b\", \"task_schedule_note\": \"Please assist me to brush my teeth\", \"task_definition_description\": \"Assist with oral hygiene\"}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-12T07:23:12.789Z", "id": "006139b8-a387-4529-9280-2d798c500aeb", "event_type": "task_completed", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
      {
        "id": "0099ecb2-07bb-4b93-bd56-be485d62f22c", "visit_id": "5ccb7670-8b66-f8a8-48ca-1c06125a9c4c", "timestamp": "2019-05-03T07:24:10.276Z", "event_type": "task_completed", "caregiver_id": "5c9090ab-7d5e-4a72-8bf7-197190ad4c98", "task_instance_id": "dHw2ZGRhZGVkMC1lZjk0LTQ1N2ItYjViMi01NDVhM2JkM2Q0YzF8MjAxOS0wNS0wM1QwNzowMDowMC4wMDBafE1PUk5JTkc=", "task_schedule_id": "6ddaded0-ef94-457b-b5b2-545a3bd3d4c1", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "9ac88364-79c5-4f1d-9767-5e65f16a0711", "task_schedule_note": "Empty the bins if required.", "task_definition_description": "Ensure home is clean and tidy"
      }, "alert_id": null, "task_instance_id": "dHw2ZGRhZGVkMC1lZjk0LTQ1N2ItYjViMi01NDVhM2JkM2Q0YzF8MjAxOS0wNS0wM1QwNzowMDowMC4wMDBafE1PUk5JTkc=", "visit_id": "5ccb7670-8b66-f8a8-48ca-1c06125a9c4c", "caregiver_id": "5c9090ab-7d5e-4a72-8bf7-197190ad4c98", "payload_as_text": "{\"id\": \"0099ecb2-07bb-4b93-bd56-be485d62f22c\", \"visit_id\": \"5ccb7670-8b66-f8a8-48ca-1c06125a9c4c\", \"timestamp\": \"2019-05-03T07:24:10.276Z\", \"event_type\": \"task_completed\", \"caregiver_id\": \"5c9090ab-7d5e-4a72-8bf7-197190ad4c98\", \"task_instance_id\": \"dHw2ZGRhZGVkMC1lZjk0LTQ1N2ItYjViMi01NDVhM2JkM2Q0YzF8MjAxOS0wNS0wM1QwNzowMDowMC4wMDBafE1PUk5JTkc=\", \"task_schedule_id\": \"6ddaded0-ef94-457b-b5b2-545a3bd3d4c1\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"task_definition_id\": \"9ac88364-79c5-4f1d-9767-5e65f16a0711\", \"task_schedule_note\": \"Empty the bins if required.\", \"task_definition_description\": \"Ensure home is clean and tidy\"}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-03T07:24:10.276Z", "id": "0099ecb2-07bb-4b93-bd56-be485d62f22c", "event_type": "task_completed", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "00eddd6e-fd70-44a0-9427-bab0c1c28e94", "fluid": "caffeinated", "observed": false, "visit_id": "5cc8d370-8b66-f8a8-44c5-927e26c9af15", "timestamp": "2019-05-01T07:25:29.928Z", "event_type": "fluid_intake_observation", "caregiver_id": "17541b2e-710d-430f-a0a3-2fb4a3285946", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "consumed_volume_ml": 230 }, "alert_id": null, "task_instance_id": null, "visit_id": "5cc8d370-8b66-f8a8-44c5-927e26c9af15", "caregiver_id": "17541b2e-710d-430f-a0a3-2fb4a3285946", "payload_as_text": "{\"id\": \"00eddd6e-fd70-44a0-9427-bab0c1c28e94\", \"fluid\": \"caffeinated\", \"observed\": false, \"visit_id\": \"5cc8d370-8b66-f8a8-44c5-927e26c9af15\", \"timestamp\": \"2019-05-01T07:25:29.928Z\", \"event_type\": \"fluid_intake_observation\", \"caregiver_id\": \"17541b2e-710d-430f-a0a3-2fb4a3285946\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"consumed_volume_ml\": 230}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-01T07:25:29.928Z", "id": "00eddd6e-fd70-44a0-9427-bab0c1c28e94", "event_type": "fluid_intake_observation", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "00f22927-0f3b-4b7e-aa7a-4659699ed124", "note": "[redacted] is well. ", "visit_id": "5cd4b0f0-8b66-f8a8-4900-34da6bf2e11e", "timestamp": "2019-05-10T15:24:05.419Z", "event_type": "physical_health_observation", "caregiver_id": "ca216495-6806-4ecb-974d-e7ece2e9e5b5", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d" }, "alert_id": null, "task_instance_id": null, "visit_id": "5cd4b0f0-8b66-f8a8-4900-34da6bf2e11e", "caregiver_id": "ca216495-6806-4ecb-974d-e7ece2e9e5b5", "payload_as_text": "{\"id\": \"00f22927-0f3b-4b7e-aa7a-4659699ed124\", \"note\": \"[redacted] is well. \", \"visit_id\": \"5cd4b0f0-8b66-f8a8-4900-34da6bf2e11e\", \"timestamp\": \"2019-05-10T15:24:05.419Z\", \"event_type\": \"physical_health_observation\", \"caregiver_id\": \"ca216495-6806-4ecb-974d-e7ece2e9e5b5\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\"}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-10T15:24:05.419Z", "id": "00f22927-0f3b-4b7e-aa7a-4659699ed124", "event_type": "physical_health_observation", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "00f56629-b69e-45dc-a778-3e335ca73a2d", "visit_id": "5cd60270-8b66-f8a8-4e4a-591e21019c57", "timestamp": "2019-05-11T11:04:00.900Z", "event_type": "task_completed", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw2ZjE5N2M3OC01Nzc3LTQ5MTktYTA4ZC00M2JiNGU3ZWRjYWZ8MjAxOS0wNS0xMVQxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "6f197c78-5777-4919-a08d-43bb4e7edcaf", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "36b50127-9f15-48af-8d89-5a96fa0fbcca", "task_schedule_note": "Please make me my meals. I have cereal, toast, yogurt and fruit for breakfast. Lunch I have half a sandwich, fruit, biscuits and a sweet.Tea, I have a hot meal, biscuits and a sweet.All meals I have a cup of tea and fresh juice/water", "task_definition_description": "Assist to prepare a meal with drinks" }, "alert_id": null, "task_instance_id": "dHw2ZjE5N2M3OC01Nzc3LTQ5MTktYTA4ZC00M2JiNGU3ZWRjYWZ8MjAxOS0wNS0xMVQxMTowMDowMC4wMDBafExVTkNI", "visit_id": "5cd60270-8b66-f8a8-4e4a-591e21019c57", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "payload_as_text": "{\"id\": \"00f56629-b69e-45dc-a778-3e335ca73a2d\", \"visit_id\": \"5cd60270-8b66-f8a8-4e4a-591e21019c57\", \"timestamp\": \"2019-05-11T11:04:00.900Z\", \"event_type\": \"task_completed\", \"caregiver_id\": \"868ffde9-b069-4af5-8835-c4ac4e72e4b5\", \"task_instance_id\": \"dHw2ZjE5N2M3OC01Nzc3LTQ5MTktYTA4ZC00M2JiNGU3ZWRjYWZ8MjAxOS0wNS0xMVQxMTowMDowMC4wMDBafExVTkNI\", \"task_schedule_id\": \"6f197c78-5777-4919-a08d-43bb4e7edcaf\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"task_definition_id\": \"36b50127-9f15-48af-8d89-5a96fa0fbcca\", \"task_schedule_note\": \"Please make me my meals. I have cereal, toast, yogurt and fruit for breakfast. Lunch I have half a sandwich, fruit, biscuits and a sweet.Tea, I have a hot meal, biscuits and a sweet.All meals I have a cup of tea and fresh juice/water\", \"task_definition_description\": \"Assist to prepare a meal with drinks\"}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-11T11:04:00.900Z", "id": "00f56629-b69e-45dc-a778-3e335ca73a2d", "event_type": "task_completed", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "01160495-2942-4d8f-ad8c-61f5d0dbd15f", "visit_id": "5ccb7670-8b66-f8a8-4db7-58c55cf8c9a2", "timestamp": "2019-05-03T19:03:21.305Z", "event_type": "visit_completed", "caregiver_id": "f7a00df5-bbc4-4ad7-9918-c07e16e709f6", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d" }, "alert_id": null, "task_instance_id": null, "visit_id": "5ccb7670-8b66-f8a8-4db7-58c55cf8c9a2", "caregiver_id": "f7a00df5-bbc4-4ad7-9918-c07e16e709f6", "payload_as_text": "{\"id\": \"01160495-2942-4d8f-ad8c-61f5d0dbd15f\", \"visit_id\": \"5ccb7670-8b66-f8a8-4db7-58c55cf8c9a2\", \"timestamp\": \"2019-05-03T19:03:21.305Z\", \"event_type\": \"visit_completed\", \"caregiver_id\": \"f7a00df5-bbc4-4ad7-9918-c07e16e709f6\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\"}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-03T19:03:21.305Z", "id": "01160495-2942-4d8f-ad8c-61f5d0dbd15f", "event_type": "visit_completed", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "011a9460-1a95-49c7-b6ad-d16758fb0335", "fluid": "regular", "observed": false, "visit_id": "5cd753f0-8b66-f8a8-4591-3f78ca3f9c45", "timestamp": "2019-05-12T07:21:12.325Z", "event_type": "fluid_intake_observation", "caregiver_id": "3cacba0a-6041-11e9-b63f-06a80bfbb33e", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "consumed_volume_ml": 250 }, "alert_id": null, "task_instance_id": null, "visit_id": "5cd753f0-8b66-f8a8-4591-3f78ca3f9c45", "caregiver_id": "3cacba0a-6041-11e9-b63f-06a80bfbb33e", "payload_as_text": "{\"id\": \"011a9460-1a95-49c7-b6ad-d16758fb0335\", \"fluid\": \"regular\", \"observed\": false, \"visit_id\": \"5cd753f0-8b66-f8a8-4591-3f78ca3f9c45\", \"timestamp\": \"2019-05-12T07:21:12.325Z\", \"event_type\": \"fluid_intake_observation\", \"caregiver_id\": \"3cacba0a-6041-11e9-b63f-06a80bfbb33e\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"consumed_volume_ml\": 250}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-12T07:21:12.325Z", "id": "011a9460-1a95-49c7-b6ad-d16758fb0335", "event_type": "fluid_intake_observation", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
        { "id": "01520051-41da-4b83-bdb8-36323c5b738e", "fluid": "regular", "observed": false, "visit_id": "5cc23bf0-8b66-f8a8-406f-e53b5740e11b", "timestamp": "2019-04-26T11:08:55.971Z", "event_type": "fluid_intake_observation", "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "consumed_volume_ml": 230 }, "alert_id": null, "task_instance_id": null, "visit_id": "5cc23bf0-8b66-f8a8-406f-e53b5740e11b", "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b", "payload_as_text": "{\"id\": \"01520051-41da-4b83-bdb8-36323c5b738e\", \"fluid\": \"regular\", \"observed\": false, \"visit_id\": \"5cc23bf0-8b66-f8a8-406f-e53b5740e11b\", \"timestamp\": \"2019-04-26T11:08:55.971Z\", \"event_type\": \"fluid_intake_observation\", \"caregiver_id\": \"220d9432-b5ed-4c81-8709-434899d2cd1b\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"consumed_volume_ml\": 230}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-04-26T11:08:55.971Z", "id": "01520051-41da-4b83-bdb8-36323c5b738e", "event_type": "fluid_intake_observation", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    },
    {
      "payload":
      {
        "id": "0192894f-5cb4-498b-bd7c-b53cab8be201", "visit_id": "5cce1970-8b66-f8a8-4e3a-a21099829cd7", "timestamp": "2019-05-05T18:47:06.986Z", "event_type": "check_out", "caregiver_id": "f8651589-8e43-4787-a061-9a504579c999", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
      }, "alert_id": null, "task_instance_id": null, "visit_id": "5cce1970-8b66-f8a8-4e3a-a21099829cd7", "caregiver_id": "f8651589-8e43-4787-a061-9a504579c999", "payload_as_text": "{\"id\": \"0192894f-5cb4-498b-bd7c-b53cab8be201\", \"visit_id\": \"5cce1970-8b66-f8a8-4e3a-a21099829cd7\", \"timestamp\": \"2019-05-05T18:47:06.986Z\", \"event_type\": \"check_out\", \"caregiver_id\": \"f8651589-8e43-4787-a061-9a504579c999\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\"}", "rejected_event_id": null, "observation_event_id": null, "timestamp": "2019-05-05T18:47:06.986Z", "id": "0192894f-5cb4-498b-bd7c-b53cab8be201", "event_type": "check_out", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
    }],
  "meta":
    { "page": 1 }
}

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'event_type', headerName: 'Event Type', width: 300 },
  { field: 'caregiver_id', headerName: 'Care Giver', width: 300 },
  {
    field: 'caregiver_id', headerName: 'Care Giver ID', width: 300, valueFormatter: (params) => params?.row?.payload?.caregiver_id
  }

]



const DataTable = () => {
  const [tableData, setTableData] = useState([])

  console.log("Events", Events?.data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log("tableData", tableData);
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={Events?.data}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
