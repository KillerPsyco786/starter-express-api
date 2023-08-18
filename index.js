const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(bodyParser.json());

const machines = [
  {
    "UUID": "45404467-1e92-4463-8a36-638a0ff7e3bc",
    "name": "SparkFusion",
    "variables": [
      {
        "name": "Temp",
        "unit": "Pa",
        "value": 1.2345,
        "previous": [1.0, 2.0, 3.0, 4.5],
        "key": "e48b4a02-fe47-4a43-be10-cf5d46d020ca"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 12.3456,
        "previous": [1.0, 2.0, 3.0, 4.5],
        "key": "30e06a8b-0a7d-4f8c-bc03-89405e395e46"
      }
    ]
  },
  {
    "UUID": "eb7a7971-6b55-4d7c-9ee6-8ddc8873fe33",
    "name": "ThermoCrafter",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 300.1234,
        "previous": [],
        "key": "f8130cdd-318f-4080-999c-2d30f4cbc77f"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 50.6789,
        "previous": [],
        "key": "39044c04-47c1-462c-a7b4-138a476ff13a"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 120.4321,
        "previous": [],
        "key": "9d30ba51-edbb-488a-824a-c0e830c8dc78"
      }
    ]
  },
  {
    "UUID": "35120f55-79e5-4677-942b-6e2b73505257",
    "name": "PlasmaFuse",
    "variables": [
      {
        "name": "Temp",
        "unit": "Celsius",
        "value": 25.6789,
        "previous": [],
        "key": "7d6d480a-9a54-4b71-8cd9-d2e56819aaa2"
      },
      {
        "name": "Pressure",
        "unit": "hPa",
        "value": 1002.3456,
        "previous": [],
        "key": "c0b84e72-610e-4f08-a6a9-201bed84ad39"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 70.1234,
        "previous": [],
        "key": "43895324-548b-4a21-800e-716b82efbcaa"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 230.9876,
        "previous": [],
        "key": "0cf2323f-a673-4420-acd0-e74f571c6b41"
      }
    ]
  },
  {
    "UUID": "7a80c229-b2c2-46e7-97ed-fcd134252dc1",
    "name": "HydroPulse",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 310.9876,
        "previous": [],
        "key": "b0cd1f8e-7183-4e12-918a-aa5729e46698"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 123.4567,
        "previous": [],
        "key": "ca2a8112-14f5-4b82-8ccd-746d4c63de9e"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 45.6789,
        "previous": [],
        "key": "7e9347f0-be94-4e5a-90b0-6d773ce3cb75"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 48.7654,
        "previous": [],
        "key": "7fa21ec5-b57a-48bb-ad7a-5de900979d73"
      }
    ]
  },
  {
    "UUID": "8a135ed6-8ab7-4721-8451-bfb068a3b111",
    "name": "GearGlide",
    "variables": [
      {
        "name": "Temp",
        "unit": "Celsius",
        "value": 22.3456,
        "previous": [],
        "key": "6b364e52-e96e-471b-9c21-95577b52a33b"
      },
      {
        "name": "Pressure",
        "unit": "hPa",
        "value": 987.6543,
        "previous": [],
        "key": "02c9b025-20c2-4144-9249-9f9f23495730"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 60.4321,
        "previous": [],
        "key": "49f69f85-8f43-4251-b21c-c9e2456d22a8"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 18.9012,
        "previous": [],
        "key": "1ef0687f-fc2e-4fec-ad69-7a14f89ff021"
      }
    ]
  },
  {
    "UUID": "658818b8-e6ed-4000-8038-c8c101fd504a",
    "name": "VoltHeat Pro",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 290.5678,
        "previous": [],
        "key": "7db242aa-e21f-407f-8606-8246b56ca096"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 345.6789,
        "previous": [],
        "key": "22b5f4e0-07d4-4ad6-9234-3a002bdaba2a"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 80.1234,
        "previous": [],
        "key": "a0b8d4b2-2054-4591-8556-7262f2754550"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 250.9876,
        "previous": [],
        "key": "b013d7e0-c771-4fab-b238-a3f9aa075ae0"
      }
    ]
  },
  {
    "UUID": "31cae57c-1c4f-41cd-baee-eb27b4556cba",
    "name": "QuenchMaster",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 303.2109,
        "previous": [],
        "key": "bc0a93c1-3c0c-4880-90d2-1630d6474fa1"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 111.1111,
        "previous": [],
        "key": "6e6e61fa-bc56-4fd6-937c-82cb666affa4"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 55.5555,
        "previous": [],
        "key": "d89d7658-2f3a-4072-a522-5e4a92205ef6"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 190.0909,
        "previous": [],
        "key": "e2b2bb7d-fb6d-4e07-9c9f-67f2e6fbe52f"
      }
    ]
  },
  {
    "UUID": "885edbfe-683c-44c6-9d74-6c8e278e16ae",
    "name": "ElectraPress",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 288.8888,
        "previous": [],
        "key": "cdd9d9cf-ec81-475c-ad75-8069b51030d0"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 987.6543,
        "previous": [],
        "key": "c5ca2085-0569-4029-a352-9f92636bfc8c"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 66.6666,
        "previous": [],
        "key": "29642b9c-fa97-4f55-9597-4ce28ce0b5a9"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 98.7654,
        "previous": [],
        "key": "1d32c8dd-dad0-4567-abed-c369269c05c8"
      }
    ]
  },
  {
    "UUID": "a32d2680-9b73-4bc7-82af-19dea4ac5fd9",
    "name": "TurboForge",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 299.9999,
        "previous": [],
        "key": "a0a12c04-bb74-4d41-a885-1de86faea25d"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 444.4444,
        "previous": [],
        "key": "718c9148-b059-4a01-addc-158af152bf09"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 22.2222,
        "previous": [],
        "key": "4566e814-3447-4b58-99a8-c0f6030583f6"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 101.0101,
        "previous": [],
        "key": "d97ad4de-7b3e-40a3-a91c-47a270a1bd2d"
      }
    ]
  },
  {
    "UUID": "75181883-5fb4-4da5-8713-c0b894c40859",
    "name": "DynamoMelter",
    "variables": [
      {
        "name": "Temp",
        "unit": "K",
        "value": 311.1111,
        "previous": [],
        "key": "b1af3d8b-d17a-4739-9303-bac415f47300"
      },
      {
        "name": "Pressure",
        "unit": "kPa",
        "value": 555.5555,
        "previous": [],
        "key": "2af439ef-655d-4e03-afba-a5e267e616c0"
      },
      {
        "name": "Humidity",
        "unit": "%",
        "value": 33.3333,
        "previous": [],
        "key": "b3fc37ff-4db1-4ffd-8bf8-0e20ac7fedb7"
      },
      {
        "name": "Voltage",
        "unit": "V",
        "value": 202.0202,
        "previous": [],
        "key": "f23a0123-ec0c-41c5-a624-c6dab56272ef"
      }
    ]
  }
]

app.post('/add-data', (req, res) => {
  const newData = req.body; // Get the incoming data from the request body
  console.log("newData", newData)
  // Find the machine based on the UUID in the incoming data
  const machineToUpdate = machines.find(machine => machine.UUID === newData.UUID);

  if (machineToUpdate) {
    // Loop through the variables and update them if they exist in the incoming data
    for (const newVariable of newData.variables) {
      const existingVariable = machineToUpdate.variables.find(variable => variable.name === newVariable.name);
      if (existingVariable) {
        existingVariable.value = newVariable.value;
        existingVariable.previous.push(existingVariable.value);
        if (existingVariable.previous.length > 10) {
          existingVariable.previous.shift();
        }
      }
    }

    res.json({ message: 'Data added successfully' });
  }
   else {
    machines.push(newData)
  }
});


function updateVariables() {
  for (const machine of machines) {
    for (const variable of machine.variables) {
      // Move current value to the 'previous' array
      if (variable.previous.length >= 10) {
        variable.previous.shift(); // Remove oldest value if array length exceeds 10
      }
      variable.previous.push(variable.value);

      // Update with dynamic value
      variable.value = Math.random() * 10;
    }
  }
}

app.get('/data', (req, res) => {
  updateVariables();

  res.json(machines);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

setInterval(updateVariables, 1000); // Update every second
