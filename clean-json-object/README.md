# clean-json-object

For a given JSON object, remove all null values across the object tree.

Example JSON object:
```
{
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
}
```
In the example
- child1 is null and can be removed.
- child2 has a value and should be preserved.
- child3 has child objects, however grandchild1 is null and should be removed,
likewise b1 and b2 are also null and be removed, therefore grandchild2 is null.
This then means that child3 itself can be removed, since all children are null.
- child4 is a empty list and should be preserved.
- child5 is a list containing a null object.  Arguably this is invalid JSON and
should simply be structured as an empty list.

The expected output from a 'clean' of this JSON therefore looks like this:
```
{
  "grandparent": {
    "parent": {
      "child2": "foo",
      "child4": [],
      "child5": [{}]
    }
  }
}
```
