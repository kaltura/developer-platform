<!--METADATA
{
  "icon": "exclamation",
  "sortOrder": 700,
  "tags": [
    "metadataProfile",
    "metadata"
  ],
  "keywords": [],
  "relatedRecipes": [
    "video_search"
  ],
  "summary": "Learn to work with metadata."
}
-->

# Working with metadata


## Create metadata profile
This recipe will walk you through using custom metadata fields with entries. Custom metadata can also be applied to other objects, such as categories.

### API Call
```json
{
  "method": "post",
  "path": "/service/metadata_metadataprofile/action/add",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "metadataProfile": {
            "properties": {
              "name": {
                "default": ""
              },
              "systemName": {
                "default": ""
              },
              "metadataObjectType": {
                "default": "1",
                "hidden": true
              },
              "createMode": {
                "default": "1",
                "hidden": true
              }
            },
            "type": "object"
          },
          "objectType": {
            "default": "1",
            "hidden": true
          },
          "xsdData": {
            "x-inputType": "textarea",
            "default": "<xsd:schema xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <xsd:element name=\"metadata\">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element id=\"md_5F84A7E4-5509-993D-CE9C-3B60C0713775\" name=\"Somefield\" minOccurs=\"0\" maxOccurs=\"1\" type=\"textType\">\n          <xsd:annotation>\n            <xsd:documentation></xsd:documentation>\n            <xsd:appinfo>\n              <label>somefield</label>\n              <key>somefield</key>\n              <searchable>true</searchable>\n              <timeControl>false</timeControl>\n              <description></description>\n            </xsd:appinfo>\n          </xsd:annotation>\n        </xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n  <xsd:complexType name=\"textType\">\n    <xsd:simpleContent>\n      <xsd:extension base=\"xsd:string\"/>\n    </xsd:simpleContent>\n  </xsd:complexType>\n  <xsd:complexType name=\"dateType\">\n    <xsd:simpleContent>\n      <xsd:extension base=\"xsd:long\"/>\n    </xsd:simpleContent>\n  </xsd:complexType>\n  <xsd:complexType name=\"objectType\">\n    <xsd:simpleContent>\n      <xsd:extension base=\"xsd:string\"/>\n    </xsd:simpleContent>\n  </xsd:complexType>\n  <xsd:simpleType name=\"listType\">\n    <xsd:restriction base=\"xsd:string\"/>\n  </xsd:simpleType>\n</xsd:schema>"
          }
        }
      }
    }
  ]
}
```

## Add metadata to an entry
To learn how to search through metadata fields, please see the [video_search recipe](https://developer.kaltura.org/recipes/video_search)

### API Call
```json
{
  "method": "post",
  "path": "/service/metadata_metadata/action/add",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "objectId": {
            "dynamicEnum": {
              "path": "/service/media/action/list",
              "method": "post",
              "array": "objects",
              "value": "id",
              "label": "name"
            }
          },
          "xmlData": {
            "default": "<metadata><Somefield>LINUX RULES</Somefield></metadata>"
          },
          "objectType": {
            "default": "1",
            "hidden": true
          },
          "metadataProfileId": {
            "dynamicEnum": {
              "path": "/service/metadata_metadataprofile/action/list",
              "method": "post",
              "parameters": [
                {
                  "name": "body",
                  "value": "{}"
                }
              ],
              "array": "objects",
              "label": "name",
              "value": "id"
            },
            "dynamicValue": {
              "fromStep": 0,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```

## Update entry metadata
Use `metadata.update` to update the metadata for a given item

### API Call
```json
{
  "method": "post",
  "path": "/service/metadata_metadata/action/update",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "default": "",
            "dynamicValue": {
              "fromStep": 1,
              "value": "id"
            }
          },
          "xmlData": {
            "default": "<metadata><Somefield>NEW VALUE HERE</Somefield></metadata>"
          }
        }
      }
    }
  ]
}
```

## Delete metadata
Use the form below to delete the Metadata you created.

### API Call
```json
{
  "method": "post",
  "path": "/service/metadata_metadata/action/delete",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 1,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```

## Delete metadata profiles
Use the form below to delete the Metadata Profile you created

### API Call
```json
{
  "method": "post",
  "path": "/service/metadata_metadataprofile/action/delete",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 0,
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```