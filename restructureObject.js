const VALUE_OBJECT = "";
var test = [
  {
    id: 1,
    name: "patate",
    description: "pour faire des frittes",
    price: 0.76,
    testarray: [
      {
        array1: "wowow1",
      },
    ],
  },
  {
    id: 2,
    name: "salade",
    description: "pour faire des salade",
    price: 0.5,
    testarray: [
      {
        array1: "wowow2",
      },
    ],
  },
];

var expetedOutPut = {
  keys: [
    {
      originalKey: "id",
      newKey: "identifier",
    },
    {
      originalKey: "name",
      newKey: "commonName",
    },
    {
      originalKey: "description",
      newKey: "commonDescription",
    },
    {
      originalKey: "testarray",
      newKey: "testkey",
    },
  ],

  struc: {
    identifier: VALUE_OBJECT,
    testkey: VALUE_OBJECT,
    info: {
      commonName: VALUE_OBJECT,
      commonDescription: VALUE_OBJECT,
    },

    info2: [
      {
        commonName: VALUE_OBJECT,
        commonDescription: VALUE_OBJECT,
      },
    ],
  },
};

restructurObject({ expetedOutPut: expetedOutPut, json: test });

function restructurObject({ expetedOutPut, json }) {
  return handleMainProcess(json);
}

function handleMainProcess(json) {
  let jsonToReturn = [];

  handleJson(json).forEach((currentItem) => {
    let newStuc = {};
    placeDataIntoObject(
      newStuc,
      expetedOutPut.struc,
      getNewKeyValue(currentItem, expetedOutPut)
    );

    jsonToReturn.push(newStuc);
  });

  return jsonToReturn;
}

function getNewKeyValue(currentItem, expetedOutPut) {
  let newKeyValue = {};
  expetedOutPut.keys.forEach((keySetting) => {
    newKeyValue[keySetting.newKey] = currentItem[keySetting.originalKey];
  });
  return newKeyValue;
}

function placeDataIntoObject(newStuc, struc, newKeyValue) {
  for (const [key, value] of Object.entries(struc)) {
    if (value === "") {
      newStuc[key] = newKeyValue[key];
    } else if (Array.isArray(value)) {
      newStuc[key] = [];
      value.forEach((entity) => {
        placeDataIntoObject(newStuc[key], entity, newKeyValue);
      });
    } else if (typeof value === "object") {
      newStuc[key] = {};
      placeDataIntoObject(newStuc[key], value, newKeyValue);
    }
  }
}

function handleJson(json) {
  let jsonToWork = json;
  if (!Array.isArray(json)) {
    jsonToWork = Object.values(json);
  }

  return jsonToWork;
}
