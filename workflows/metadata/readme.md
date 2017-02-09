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
  "method": "get",
  "path": "/service/metadata_metadataprofile/action/add",
  "parameters": [
    {
      "name": "metadataProfile[name]",
      "default": ""
    },
    {
      "name": "metadataProfile[systemName]",
      "default": ""
    },
    {
      "name": "metadataProfile[metadataObjectType]",
      "default": "1",
      "hidden": true
    },
    {
      "name": "objectType",
      "default": "1",
      "hidden": true
    },
    {
      "name": "metadataProfile[createMode]",
      "default": "1",
      "hidden": true
    },
    {
      "name": "xsdData",
      "x-inputType": "textarea",
      "default": "<xsd:schema xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <xsd:element name=\"metadata\">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element id=\"md_5F84A7E4-5509-993D-CE9C-3B60C0713775\" name=\"Somefield\" minOccurs=\"0\" maxOccurs=\"1\" type=\"textType\">\n          <xsd:annotation>\n            <xsd:documentation></xsd:documentation>\n            <xsd:appinfo>\n              <label>somefield</label>\n              <key>somefield</key>\n              <searchable>true</searchable>\n              <timeControl>false</timeControl>\n              <description></description>\n            </xsd:appinfo>\n          </xsd:annotation>\n        </xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n  <xsd:complexType name=\"textType\">\n    <xsd:simpleContent>\n      <xsd:extension base=\"xsd:string\"/>\n    </xsd:simpleContent>\n  </xsd:complexType>\n  <xsd:complexType name=\"dateType\">\n    <xsd:simpleContent>\n      <xsd:extension base=\"xsd:long\"/>\n    </xsd:simpleContent>\n  </xsd:complexType>\n  <xsd:complexType name=\"objectType\">\n    <xsd:simpleContent>\n      <xsd:extension base=\"xsd:string\"/>\n    </xsd:simpleContent>\n  </xsd:complexType>\n  <xsd:simpleType name=\"listType\">\n    <xsd:restriction base=\"xsd:string\"/>\n  </xsd:simpleType>\n</xsd:schema>"
    }
  ]
}
```

## Add metadata to an entry
To learn how to search through metadata fields, please see the [video_search recipe](https://developer.kaltura.org/recipes/video_search)

### API Call
```json
{
  "method": "get",
  "path": "/service/metadata_metadata/action/add",
  "parameters": [
    {
      "name": "objectId",
      "dynamicEnum": {
        "path": "/service/media/action/list",
        "method": "get",
        "array": "objects",
        "value": "id",
        "label": "name"
      }
    },
    {
      "name": "xmlData",
      "default": "<metadata><Somefield>LINUX RULES</Somefield></metadata>"
    },
    {
      "name": "objectType",
      "default": "1",
      "hidden": true
    },
    {
      "name": "metadataProfileId",
      "dynamicEnum": {
        "path": "/service/metadata_metadataprofile/action/list",
        "method": "get",
        "parameters": [],
        "array": "objects",
        "label": "name",
        "value": "id"
      },
      "dynamicValue": {
        "fromStep": 0,
        "value": "id"
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
  "method": "get",
  "path": "/service/metadata_metadata/action/update",
  "parameters": [
    {
      "name": "id",
      "default": "",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    },
    {
      "name": "xmlData",
      "default": "<metadata><Somefield>NEW VALUE HERE</Somefield></metadata>"
    }
  ]
}
```

## Delete metadata
Use the form below to delete the Metadata you created.

### API Call
```json
{
  "method": "get",
  "path": "/service/metadata_metadata/action/delete",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 1,
        "value": "id"
      }
    },
    {
      "name": "objectIdEqual",
      "default": "",
      "dynamicValue": {
        "fromStep": 1,
        "answer": "objectId"
      }
    },
    {
      "name": "metadataProfileIdEqual",
      "dynamicEnum": {
        "path": "/service/metadata_metadataprofile/action/list",
        "method": "get",
        "parameters": [],
        "array": "objects",
        "label": "name",
        "value": "id"
      },
      "dynamicValue": {
        "fromStep": 0,
        "value": "id"
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
  "method": "get",
  "path": "/service/metadata_metadataprofile/action/delete",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 0,
        "value": "id"
      }
    }
  ]
}
```