const
  doc = {
    "grandparent": {
      "parent": {
        "child1":{},
        "child2": "foo",
        "child3": {
          "grandchild1": {},
          "grandchild2": {
            "b1": null,
            "b2:": null
          }
        },
        "child4": [],
        "child5": [{}]
      }
    }
  };

isEmpty = function(obj) {
  for (var prop in obj) {
    return false;
  }
  if (obj.length >= 0) {
    return false;
  }
  return true;
}

clean = function(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      clean(obj[prop]);
    }
    if (obj[prop] == null || isEmpty(obj[prop])) {
      delete obj[prop];
    }
  }
}

clean(doc);

console.log(JSON.stringify(doc, null, "  "));
