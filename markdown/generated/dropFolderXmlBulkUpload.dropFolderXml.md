# Drop Folder

<style>
#KalturaSchemaDoc .code {
    height: 300px;
    overflow-x: scroll;
}
#KalturaSchemaDoc .xml-element {
    color: blue;
}
#KalturaSchemaDoc .xml-element-value {
    color: gray;
}
#KalturaSchemaDoc .xml-attribute {
    color: red;
}
#KalturaSchemaDoc .xml-attribute-value {
    color: gray;
}
#KalturaSchemaDoc .indent {
    padding: 8px;
}
#KalturaSchemaDoc .element-title {
    color: #0606ee;
    font-size: larger;
    font-weight: bold;
}
#KalturaSchemaDoc table td,
#KalturaSchemaDoc table th {
  padding: 2px;
  border: 1px solid #ccc;
}
#KalturaSchemaDoc .element-example {
  font-size: 12px;
}
</style>

<div id="KalturaSchemaDoc">

			Download URL: <a href="http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/dropFolderXmlBulkUpload.dropFolderXml/name/dropFolderXmlBulkUpload.dropFolderXml.xsd;" target="_blank">http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/dropFolderXmlBulkUpload.dropFolderXml/name/dropFolderXmlBulkUpload.dropFolderXml.xsd</a><br>
Version: 1.0<br>
<br>
<div xmlns:php="http://php.net/xsl" class="code">
<b>&lt;</b><span class="xml-element">xs:schema</span> <span class="xml-attribute">version</span><b>=&quot;</b><span class="xml-attribute-value">1.0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_mrss</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">ks</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-channel">channel</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-mrss-extension">mrss-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">version</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:decimal</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_channel</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-item">item</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-channel-extension">channel-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_item</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">add</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">delete</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">type</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaEntryType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
							</span><span class="xml-attribute-value">
						</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">licenseType</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaLicenseType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
							</span><span class="xml-attribute-value">
						</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">entryId</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">referenceId</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2000</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">parentReferenceId</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">100</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">userId</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">100</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">name</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">256</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">description</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">keepManualThumbnails</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:boolean</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-tags">tags</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-categories">categories</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">partnerData</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">4000</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">partnerSortData</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">accessControlId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">accessControl</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">conversionProfileId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">conversionProfile</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">startDate</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">endDate</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">templateEntryId</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">templateEntry</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2000</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-media">media</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">msDuration</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-contentAssets">contentAssets</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-thumbnails">thumbnails</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-item-extension">item-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_media</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">mediaType</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaMediaType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-media-extension">media-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_serverFileContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">fileSize</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">fileChecksum</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleContent</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">default</span><b>=&quot;</b><span class="xml-attribute-value">md5</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">type</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
										</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">md5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
										</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">sha1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleContent</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">filePath</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_urlContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value">url</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_sshUrlContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">privateKey</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">publicKey</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value">url</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">keyPassphrase</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_remoteStorageContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">storageProfileId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">storageProfile</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">url</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_remoteStorageContentResources</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_entryContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorParamsId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorParams</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">entryId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_assetContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">assetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_stream</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">type</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">trackIndex</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">language</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">channelIndex</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">label</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">channelLayout</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_streams</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-stream">stream</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_content</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-tags">tags</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-sshUrlContentResource">sshUrlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-content-extension">content-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-streams">streams</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorParamsId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorParams</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">assetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_contentAssets</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">replace</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-content">content</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_thumbnail</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-tags">tags</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-sshUrlContentResource">sshUrlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">

			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-thumbnail-extension">thumbnail-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">assetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">default</span><b>=&quot;</b><span class="xml-attribute-value">false</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">isDefault</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:boolean</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">thumbParamsId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">thumbParams</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_thumbnails</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">replace</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-thumbnail">thumbnail</a></span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_url</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:pattern</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">(([hH][tT][tT][pP][sS]?)|(([fF][tT][pP])|([sS][fF][tT][pP])|([sS][cC][pP])))://?(([ 0-9a-zA-Z_!~*
					&amp;apos;
				().
					&amp;amp;
				=+$%-\[\]]+)?(:[0-9a-zA-Z_!~*
					&amp;apos;
				().
					&amp;amp;
				=+$%-\[\]]+@)?)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*
					&amp;apos;
				()-]+\.)*)(:[0-9]{1,4})?((/?)|(/[ 0-9a-zA-Z_!~*
					&amp;apos;
				().;?:@
					&amp;amp;
				=+$,%#-\[\]]+)+)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:pattern</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_tags</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">tag</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_categories</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">32</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">category</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_pluginReplacementOptions</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_pluginReplacementOptionsItem</span><b>&quot;</b> <span class="xml-attribute">abstract</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">mrss</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_mrss</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">channel</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_channel</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">item</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_item</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">media</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_media</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">contentAssets</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_contentAssets</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">content</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_content</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">streams</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_streams</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">stream</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_stream</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">thumbnails</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_thumbnails</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">thumbnail</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_thumbnail</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">url</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_url</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">contentResource-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">serverFileContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_serverFileContentResource</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">urlContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_urlContentResource</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sshUrlContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_sshUrlContentResource</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">remoteStorageContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_remoteStorageContentResource</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">remoteStorageContentResources</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_remoteStorageContentResources</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">entryContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_entryContentResource</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">assetContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_assetContentResource</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">tags</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_tags</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">categories</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_categories</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">mrss-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">channel-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">media-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">mix-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">playlist-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">data-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">liveStream-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">document-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">content-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">thumbnail-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_dropFolderFileContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">fileSize</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:long</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">fileChecksum</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleContent</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">type</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">default</span><b>=&quot;</b><span class="xml-attribute-value">md5</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">				
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
										</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">md5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
										</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">sha1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleContent</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">filePath</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">500</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">dropFolderFileId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">dropFolderFileContentResource</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_dropFolderFileContentResource</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">contentResource-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_adCuePointBulkUploadXml</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneEndTime</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:time</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneTitle</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sourceUrl</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">adType</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAdType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">protocolType</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAdProtocolType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-ad-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_adCuePointBulkUploadXml</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_annotationBulkUploadXml</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneEndTime</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:time</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneText</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">parent</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">parentId</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
					
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-annotation</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_annotationBulkUploadXml</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_attachments</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-attachment">attachment</a></span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_attachment</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">tags</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_tags</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">filename</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">title</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">description</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-attachment-extension">attachment-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">attachmentAssetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">format</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAttachmentType</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
						
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">attachment-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">attachments</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_attachments</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">attachment</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_attachment</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_subTitles</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-subTitle">subTitle</a></span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_subTitle</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">tags</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_tags</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-subtitle-extension">subtitle-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">captionParamsId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">captionParams</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">captionAssetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">isDefault</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:boolean</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">format</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaCaptionType</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">lang</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaLanguage</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
						
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">subtitle-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">subTitles</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_subTitles</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">subTitle</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_subTitle</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_codeCuePointBulkUploadXml</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneEndTime</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:time</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">code</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">description</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-code-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_codeCuePointBulkUploadXml</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_thumbCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">title</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">description</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">subType</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-slide">slide</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_slide</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">timedThumbAssetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-thumb-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_thumbCuePoint</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">slide</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_slide</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_distribution</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:choice</span> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">distributionProvider</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaDistributionProviderType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">distributionProfileId</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">distributionProfile</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:choice</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sunrise</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sunset</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorAssetIds</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">thumbAssetIds</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-distribution-extension">distribution-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">entryDistributionId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">submitWhenReady</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:boolean</span><b>&quot;</b> <span class="xml-attribute">default</span><b>=&quot;</b><span class="xml-attribute-value">false</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">		
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_distributions</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-distribution">distribution</a></span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">distributions</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_distributions</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">distribution</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_distribution</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">distribution-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scenes</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene">scene</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b> <span class="xml-attribute">abstract</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneStartTime</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:time</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-tags">tags</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">systemName</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scenes</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scenes</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-customData</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_customData</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_customData</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">transformXslt</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">replace</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">xslt</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-xmlData">xmlData</a></span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataProfile</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataProfileId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_xmlData</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:any</span> <span class="xml-attribute">namespace</span><b>=&quot;</b><span class="xml-attribute-value">##local</span><b>&quot;</b> <span class="xml-attribute">processContents</span><b>=&quot;</b><span class="xml-attribute-value">skip</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">		
			</span><b>&lt;/</b><span class="xml-element">xs:any</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_customDataItems</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-customData">customData</a></span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">customDataItems</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_customDataItems</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">customData</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_customData</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">xmlData</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_xmlData</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_metadataReplacementOptionsItem</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_pluginReplacementOptionsItem</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">shouldCopyMetadata</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
									</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">false</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_metadataReplacementOptions</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_pluginReplacementOptions</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataReplacementOptionsItem</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_metadataReplacementOptionsItem</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">pluginReplacementOptions</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_metadataReplacementOptions</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_widevineAssets</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">action</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-widevineAsset">widevineAsset</a></span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_widevineAsset</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">widevineAssetId</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:long</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorParamsId</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:long</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">	
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">widevineDistributionStartDate</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">widevineDistributionEndDate</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">	
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">		
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">flavorAssetId</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
						
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">widevineAsset-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">widevineAssets</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_widevineAssets</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">widevineAsset</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_widevineAsset</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">item-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaEntryType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">-1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">6</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">7</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">8</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">10</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">externalMedia.externalMedia</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaDynamicEnum</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaLicenseType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">-1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">6</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">7</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">8</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">9</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">10</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">11</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">12</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">13</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">14</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">15</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaMediaType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">201</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">202</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">203</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">204</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAdType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAdProtocolType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAttachmentType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaCaptionType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaLanguage</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Abkhazian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Afar</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Afrikaans</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Albanian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Amharic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Arabic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Armenian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Assamese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Aymara</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Azerbaijani</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Bashkir</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Basque</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Bengali (Bangla)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Bhutani</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Bihari</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Bislama</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Breton</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Bulgarian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Burmese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Byelorussian (Belarusian)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Cambodian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Catalan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Chinese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Corsican</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Croatian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Czech</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Danish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Dutch</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">English</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">English (British)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">English (American)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Esperanto</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Estonian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Faeroese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Farsi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Fiji</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Finnish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">French</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Frisian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Galician</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Gaelic (Scottish)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Gaelic (Manx)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Georgian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">German</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Greek</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Greenlandic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Guarani</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Gujarati</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Hausa</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Hebrew</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Hebrew</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Hindi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Hungarian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Icelandic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Indonesian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Indonesian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Interlingua</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Interlingue</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Inuktitut</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Inupiak</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Irish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Italian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Japanese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Javanese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kannada</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kashmiri</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kazakh</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kinyarwanda (Ruanda)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kirghiz</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kirundi (Rundi)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Korean</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Kurdish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Laothian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Latin</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Latvian (Lettish)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Limburgish ( Limburger)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Lingala</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Lithuanian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Macedonian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Malagasy</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Malay</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Malayalam</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Maltese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Maori</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Marathi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Moldavian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Mongolian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Nauru</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Nepali</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Norwegian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Occitan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Oriya</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Oromo (Afan, Galla)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Pashto (Pushto)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Polish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Portuguese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Punjabi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Quechua</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Rhaeto-Romance</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Romanian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Russian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Samoan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Sangro</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Sanskrit</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Serbian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Serbo-Croatian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Sesotho</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Setswana</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Shona</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Sindhi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Sinhalese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Siswati</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Slovak</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Slovenian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Somali</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Spanish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Sundanese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Swahili (Kiswahili)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Swedish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tagalog</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tajik</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tamil</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tatar</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Telugu</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Thai</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tibetan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tigrinya</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tonga</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Tsonga</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Turkish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Turkmen</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Twi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Uighur</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Ukrainian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Urdu</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Uzbek</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Vietnamese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Volapuk</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Welsh</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Wolof</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Xhosa</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Yiddish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Yiddish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Yoruba</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Zulu</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Multilingual</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">Undefined</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaDistributionProviderType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">attUverseDistribution.ATT_UVERSE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">avnDistribution.AVN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">comcastMrssDistribution.COMCAST_MRSS</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">crossKalturaDistribution.CROSS_KALTURA</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">dailymotionDistribution.DAILYMOTION</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">doubleClickDistribution.DOUBLECLICK</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">freewheelDistribution.FREEWHEEL</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">freewheelGenericDistribution.FREEWHEEL_GENERIC</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">ftpDistribution.FTP</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">ftpDistribution.FTP_SCHEDULED</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">huluDistribution.HULU</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">ideticDistribution.IDETIC</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">metroPcsDistribution.METRO_PCS</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">msnDistribution.MSN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">ndnDistribution.NDN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">podcastDistribution.PODCAST</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">quickPlayDistribution.QUICKPLAY</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">synacorHboDistribution.SYNACOR_HBO</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">tvComDistribution.TVCOM</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">timeWarnerDistribution.TIME_WARNER</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">uverseDistribution.UVERSE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">verizonVcastDistribution.VERIZON_VCAST</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">yahooDistribution.YAHOO</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">youTubeDistribution.YOUTUBE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">youtubeApiDistribution.YOUTUBE_API</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">tvinciDistribution.TVINCI</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">unicornDistribution.UNICORN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">facebookDistribution.FACEBOOK</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">pushToNewsDistribution.PUSH_TO_NEWS</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
</span><b>&lt;/</b><span class="xml-element">xs:schema</span><b>&gt;</b><br>
</div><hr><a name="element-mrss"></a><a name="type-T_mrss"></a><span class="element-title">mrss element</span> (T_mrss)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A wrapper element that holds the XML structure</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>version</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The XSD version to be used
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>decimal</td>
<td></td>
</tr></tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">ks</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">KS of the user ingesting the content</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-channel">channel</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single entry wrapper element</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">mrss</span> <span class="xml-attribute">version</span><b>=&quot;</b><span class="xml-attribute-value">1.0</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">channel</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">channel</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">mrss</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-channel"></a><a name="type-T_channel"></a><span class="element-title">channel element</span> (T_channel)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A wrapper element that holds multiple item elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-item">item</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">holding entry element</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">mrss</span> <span class="xml-attribute">version</span><b>=&quot;</b><span class="xml-attribute-value">1.0</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">channel</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">channel</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">mrss</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-item"></a><a name="type-T_item"></a><span class="element-title">item element</span> (T_item)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single entry wrapper element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply from the item element:<br>
						Add - Add a new entry<br>
						Update - Update an existing entry<br>
						Delete - Delete an existing entry
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
			Acceptable values:
			<ul>
<li>add</li>
<li>update</li>
<li>delete</li>
</ul>
</td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>2</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice-head choice choice-start">
<td class="first">Choice</td>
<td rowspan="1">Option 1</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">type</td>
<td rowspan="2">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
									The type of the new entry.<br>
									Only the MEDIA_CLIP (= 1) type is supported for XML ingestion.<br> 
									This option is used only when applying an &#x201C;Add&#x201D; Action.
								</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaEntryType">KalturaEntryType</a></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first">licenseType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
									The license type of the new entry.<br>
									This option is used only when applying an &#x201C;Add&#x201D; Action.
								</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaLicenseType">KalturaLicenseType</a></td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">entryId</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
								The identifier of the entry that an update/delete action applies to.<br>
								This option is used only when applying an &#x201C;Update&#x201D; or a &#x201C;Delete&#x201D; Action.
							</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 20 characters<br>
</td>
</tr>
<tr class="choice">
<td class="first">referenceId</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Partner external identifier of the entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 2000 characters<br>
</td>
</tr>
<tr class="choice choice-end">
<td class="first">parentReferenceId</td>
<td rowspan="1">Option 3</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Partner external identifier of the parent entry&apos;s reference id&apos;</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 100 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The user identifier of the content creator/owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 100 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">name</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The title of the entry</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 256 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">description</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Text that describes the entry</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">keepManualThumbnails</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">flag to keep original thumbnails</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>boolean</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Tags associated with the entry</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-categories">categories</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The categories assigned to the entry</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">partnerData</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Publisher-specific information related to the entry.<br>
						Usually used for implementing an account-specific integration.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 4000 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">partnerSortData</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Partner-specific order used to enable custom ordering and filtering.<br>
						Usually used to implement an account-specific integration.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">accessControlId</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The access control profile identifier of the entry. If not specified, the account&apos;s default access control profile is used.</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">accessControl</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The access control profile system name of the entry. If not specified, the account&apos;s default access control profile is used. You can use the Kaltura API to set a specific access control system name.</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">conversionProfileId</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							The transcoding profile identifier of the entry.<br>
							If the transcoding profile is not specified, the transcoding profile set to the bulk upload API action is used.<br>
							If the bulk upload API action&apos;s transcoding profile is not specified or is set to (-1), the account&apos;s default transcoding profile is used. 
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">conversionProfile</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							The transcoding profile system name of the entry.<br>
							If the transcoding profile is not specified, the transcoding profile set to the bulk upload API action is used.<br>
							If the bulk upload API action&apos;s transcoding profile is not specified or is set to (-1), the account&apos;s default transcoding profile is used.<br>
							You can use the Kaltura API to set a specific transcoding profile system name.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">startDate</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The scheduled start date for the entry.<br>
						When the start date is not defined, the entry is available for publishing upon creation.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">endDate</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The scheduled end date for the entry.<br>
						When the end date is not defined, the entry is available for publishing with no end time restriction.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">templateEntryId</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Template entry reference ID.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 20 characters<br>
</td>
</tr>
<tr class="choice choice-end">
<td class="first">templateEntry</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Template entry reference ID.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 2000 characters<br>
</td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start choice-end">
<td class="first"><a href="#element-media">media</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies media-related information, such as media type
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">msDuration</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The duration in miliseconds
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-contentAssets">contentAssets</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Specifies media/flavor asset information, such as location of media files to upload, type of ingestion, and related transcoding flavor settings
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-thumbnails">thumbnails</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Specifies thumbnail-related information, such as location of media files and related thumbnail flavor settings
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td colspan="2" class="first extensions-title">Extensions:</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-attachments">attachments</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All attachments elements</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-attachment">attachment</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset element</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-subTitles">subTitles</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All subTitles elements</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-distributions">distributions</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom metadata elemets</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-scenes">scenes</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue points wrapper element</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-customDataItems">customDataItems</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom metadata elemets</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-pluginReplacementOptions">pluginReplacementOptions</a></td>
<td></td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-widevineAssets">widevineAssets</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All widevine elements</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-widevineAsset">widevineAsset</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Widevine asset element</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example 1: Adding a new media entry: Adding source media file and a default thumbnail</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">licenseType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">-1</span><b>&lt;/</b><span class="xml-element">licenseType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">userId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">myUserId</span><b>&lt;/</b><span class="xml-element">userId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">name</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my entry name</span><b>&lt;/</b><span class="xml-element">name</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">description</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my entry free text description</span><b>&lt;/</b><span class="xml-element">description</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">conversionProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_TRANSCODING_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="xml-element">conversionProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">startDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-05T00:00:00</span><b>&lt;/</b><span class="xml-element">startDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">endDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-19T00:00:00</span><b>&lt;/</b><span class="xml-element">endDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">mediaType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">mediaType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value"> 
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">XML Example 2: Adding a new media entry: Adding multiple previously transcoded files as flavors and multiple thumbnails</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">licenseType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">-1</span><b>&lt;/</b><span class="xml-element">licenseType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">userId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">myUserId</span><b>&lt;/</b><span class="xml-element">userId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">name</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my entry name</span><b>&lt;/</b><span class="xml-element">name</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">description</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my entry free text description</span><b>&lt;/</b><span class="xml-element">description</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">conversionProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_TRANSCODING_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="xml-element">conversionProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">startDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-05T00:00:00</span><b>&lt;/</b><span class="xml-element">startDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">endDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-19T00:00:00</span><b>&lt;/</b><span class="xml-element">endDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">mediaType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">mediaType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value"> 
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span> <span class="xml-attribute">flavorParamsId</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span> <span class="xml-attribute">flavorParamsId</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span> <span class="xml-attribute">flavorParamsId</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span> <span class="xml-attribute">isDefault</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">XML Example 3: Updating an existing media entry: Updating both metadata and media</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">update</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">entryId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">{entry id}</span><b>&lt;/</b><span class="xml-element">entryId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">userId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">UpdatedUserId</span><b>&lt;/</b><span class="xml-element">userId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">name</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">updated entry name</span><b>&lt;/</b><span class="xml-element">name</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">description</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">updated entry description</span><b>&lt;/</b><span class="xml-element">description</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag3</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag4</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example3</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example4</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">startDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-05T00:00:00</span><b>&lt;/</b><span class="xml-element">startDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">endDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-19T00:00:00</span><b>&lt;/</b><span class="xml-element">endDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">XML Example 4: Deleting an existing entry</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">delete</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">entryId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">{entry id}</span><b>&lt;/</b><span class="xml-element">entryId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-media"></a><a name="type-T_media"></a><span class="element-title">media element</span> (T_media)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Media related information</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2">mediaType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Specifies the entry media type.<br>
						Only VIDEO (=1), AUDIO (=5) and IMAGE (=2) are currently supported for XML-based ingestion.
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaMediaType">KalturaMediaType</a></td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">mediaType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">mediaType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value"> 
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-contentAssets"></a><a name="type-T_contentAssets"></a><span class="element-title">contentAssets element</span> (T_contentAssets)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All content assets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply from the item element:<br>
						Update - Update existing assets for entry<br>
						replace - replace an existing assets for entry
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
			Acceptable values:
			<ul>
<li>update</li>
<li>replace</li>
</ul>
</td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-content">content</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All Content Assets</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
			</span>
</div><hr><a name="element-content"></a><a name="type-T_content"></a><span class="element-title">content element</span> (T_content)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies media/flavor asset information, such as location of media files to upload, type of ingestion, and related transcoding flavor settings</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>flavorParamsId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The identifier of the flavor params to be associated with the media/flavor asset. This is the flavor params identifier across partner entries. The identifier can be used to filter content.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>flavorParams</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The system name of the flavor params to be associated with the media/flavor asset.<br>
					This is the flavor params identifier across partner entries. The identifier can be used to filter content.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr>
<td>assetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The identifier of the asset to be updated with the media/flavor asset.<br>
					Used only for updating an existing media/flavor asset.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Specifies specific tags for the ingested flavor asset.<br> 
						Tags are used mostly to set the flavor as suitable for a specific delivery option or device. For example: web, mobile, html5,  iphone, ipad, mbr (mbr is used for setting the flavor to an adaptive bit-rate delivery)<br>
						When the tags element is not set, the tags assigned to the transcoding flavor are used. In any case, tags from this element will be appended to the flavor params tags already set in the system.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first"><a href="#element-serverFileContentResource">serverFileContentResource</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the content location is on a Kaltura-hosted server.<br>
							By default, this option is not available to Kaltura partners.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-urlContentResource">urlContentResource</a></td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the content location is a URL (http/ftp)
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-sshUrlContentResource">sshUrlContentResource</a></td>
<td rowspan="1">Option 3</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the content location is a URL (scp/sftp)
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></td>
<td rowspan="1">Option 4</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the content location is a path within a remote storage defined in Kaltura.<br> 
							Using this option, only a link to the content location is set from the entry, without actually uploading content to Kaltura.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></td>
<td rowspan="1">Option 5</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that content is located within several remote storages defined in Kaltura.<br> 
							Using this option, only links to the content locations are set from the entry, without actually uploading content to Kaltura.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-entryContentResource">entryContentResource</a></td>
<td rowspan="1">Option 6</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the source of content ingestion is the content of an existing Kaltura entry
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-assetContentResource">assetContentResource</a></td>
<td rowspan="1">Option 7</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the source of content ingestion is a specific asset of an existing Kaltura entry
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first extensions-title">Extensions:</td>
<td rowspan="2" class="last-rowspan">Option 8</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension choice choice-end">
<td class="first"><a href="#element-dropFolderFileContentResource">dropFolderFileContentResource</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is within a Kaltura defined drop folder</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-streams">streams</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Holds stream elements that specifies instructions to the transcoding process
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value"> 
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">web</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">mbr</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-streams"></a><a name="type-T_streams"></a><span class="element-title">streams element</span> (T_streams)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Holds stream elements that specifies instructions to the transcoding process</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-stream">stream</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">streams composed of 1..n stream elements</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">streams</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">streams</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-stream"></a><a name="type-T_stream"></a><span class="element-title">stream element</span> (T_stream)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies instructions to the transcoding process on how to handle the multiple audio tracks</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>type</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">stream type</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>trackIndex</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">int specifying the stream location(s) in video file</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>language</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">specifying the language of the audio stream. If not present - mp4 tagging will be assumed</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>channelIndex</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">the stream channel to select the audio from</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">UI label specifications marking the language (will affect how the language is displayed on the multi audio selector on the player)</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>channelLayout</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">specifying the role of the specific channel</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">streams</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">stream</span> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">audio</span><b>&quot;</b> <span class="xml-attribute">trackIndex</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">language</span><b>=&quot;</b><span class="xml-attribute-value">eng</span><b>&quot;</b> <span class="xml-attribute">label</span><b>=&quot;</b><span class="xml-attribute-value">something</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">stream</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">streams</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-thumbnails"></a><a name="type-T_thumbnails"></a><span class="element-title">thumbnails element</span> (T_thumbnails)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All thumbnail assets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply from the item element:<br>
						Update - Update existing thumbnails<br>
						Replace - Replace all thumbnails
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
			Acceptable values:
			<ul>
<li>update</li>
<li>replace</li>
</ul>
</td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-thumbnail">thumbnail</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All Thumbnails Assets</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
			</span>
</div><hr><a name="element-thumbnail"></a><a name="type-T_thumbnail"></a><span class="element-title">thumbnail element</span> (T_thumbnail)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies thumbnail asset information, such as location of image files to upload, type of ingestion, and related thumbnail flavor settings</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>assetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The identifier of the asset to be updated with the resource. Used only for updating an existing thumbnail.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>isDefault</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					Specifies whether this thumbnail is set as the default thumbnail of the entry.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>thumbParamsId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The identifier of the thumb params to be associated with this thumbnail asset.  This is the thumbnail params identifier across partner entries. The identifier can be used to filter content.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>thumbParams</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The thumb params system name to be associated with this thumbnail asset. This is the thumbnail params identifier across partner entries. The identifier can be used to filter content.
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 120 characters<br>
</td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Specifies specific user tags to set for the thumbnail asset
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first"><a href="#element-serverFileContentResource">serverFileContentResource</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the thumbnail location is on a Kaltura-hosted server.<br>
							By default, this option is not available to Kaltura partners.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-urlContentResource">urlContentResource</a></td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the thumbnail location is a URL (http/ftp)
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-sshUrlContentResource">sshUrlContentResource</a></td>
<td rowspan="1">Option 3</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the content location is a URL (scp/sftp)
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></td>
<td rowspan="1">Option 4</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the thumbnail location is a path within a remote storage defined in Kaltura.<br>
							Using this option, only a link to the thumbnail location is set from the entry, without actually uploading thumbnails to Kaltura.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></td>
<td rowspan="1">Option 5</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the thumbnail is located within several remote storages defined in Kaltura.<br> 
							Using this option, only links to the thumbnail locations are set from the entry, without actually uploading thumbnails to Kaltura.
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-entryContentResource">entryContentResource</a></td>
<td rowspan="1">Option 6</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the source of thumbnail ingestion is an existing Kaltura entry
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-assetContentResource">assetContentResource</a></td>
<td rowspan="1">Option 7</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
							Specifies that the source of thumbnail ingestion is a specific asset of an existing Kaltura entry
						</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first extensions-title">Extensions:</td>
<td rowspan="2" class="last-rowspan">Option 8</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension choice choice-end">
<td class="first"><a href="#element-dropFolderFileContentResource">dropFolderFileContentResource</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is within a Kaltura defined drop folder</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span> <span class="xml-attribute">isDefault</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-serverFileContentResource"></a><a name="type-T_serverFileContentResource"></a><span class="element-title">serverFileContentResource element</span> (T_serverFileContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is on a Kaltura-hosted server. By default, this option is not available to Kaltura partners.</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>filePath</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The full path of the file on the Kaltura-hosted server</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr></tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">fileSize</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The expected size of the file.<br>
						Used for validation.
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">fileChecksum</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The expected checksum of the file.<br>
						Used for validation.
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example 1: Adding content from a Kaltura server: Using file size validation</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">serverFileContentResource</span> <span class="xml-attribute">filePath</span><b>=&quot;</b><span class="xml-attribute-value">/server/external/disc/path/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">fileSize</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">453453344</span><b>&lt;/</b><span class="xml-element">fileSize</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">serverFileContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">XML Example 2: Adding content from a Kaltura server: Using checksum validation</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">serverFileContentResource</span> <span class="xml-attribute">filePath</span><b>=&quot;</b><span class="xml-attribute-value">/server/external/disc/path/file.jpg</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">fileChecksum</span> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">md5</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sdfsjodf90sfsdfzfasdfwrg34</span><b>&lt;/</b><span class="xml-element">fileChecksum</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">serverFileContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-urlContentResource"></a><a name="type-T_urlContentResource"></a><span class="element-title">urlContentResource element</span> (T_urlContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is a URL (http/ftp)</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>url</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The URL location of the file</xs:documentation></span><br>
</td>
<td>Yes</td>
<td></td>
<td></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">http://my.domain/path/video.mp4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">http://my.domain/path/thumb.jpg</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-sshUrlContentResource"></a><a name="type-T_sshUrlContentResource"></a><span class="element-title">sshUrlContentResource element</span> (T_sshUrlContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is a URL (scp/sftp)</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>url</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The URL location of the file</xs:documentation></span><br>
</td>
<td>Yes</td>
<td></td>
<td></td>
</tr>
<tr>
<td>keyPassphrase</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The SSH key pass phrase</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">privateKey</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The SSH private key string</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">publicKey</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The SSH public key string</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">sshUrlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">sftp://user@my.domain/path/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">privateKey</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAxVOIocT3q+aQKUvs53LOnxokoJUtZXKHL+LArNl4a3dhZ8wY
ZPGwodSydB/jo4aHKZztA0YCPd3LOnxoko3LOnxokoJUtCM/DdVGQfb/0+PpWzPe
KIGdzIl3LOoJUtfOAMS6nC3LOnxJUt33LOnxnxokoJUtXN1ej06CYPR5ZfwKFFIO
tK1yWx3LOnxokoJUtNRSdEi</span><b>&lt;/</b><span class="xml-element">privateKey</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">publicKey</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">ssh-rsa AAAAB3NzaC1yc2l4a3dhZ8wYEAAxVOIocT3q+aQKUvs5omvVdPl4a3dhZ8wY+LArTNl4a3dhZ8wl4a3dhZ8wY/jo4aHKZztA0YCPd3LOnxokoJUtACM/Dm0wq67dVGQfb/0+PpWzPeCKIGdEEPAzIlfOAMS6nC3Hy3ydBFbi5IJtbGmXN1ej06CYPR5ZfwKAD8FFIOa7dMYtK1yWxNRSdEih00Z8vEiiAkoEHDatRMKVbluqdPVTleQzgqnYL/45l4a3dhZ8wYnbItnQYQgyxGbYgmMMVGGZsZnpRhRtvhAUOsQoixRC14sKHsl4a3dhZ8wY/l4a3dhZ8wY+qbHEaDdl4a3dhZ8wY/QWnhlhKQwIzXl4a3dhZ8wY== user@my.domain</span><b>&lt;/</b><span class="xml-element">publicKey</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">sshUrlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">sshUrlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">scp://user@my.domain/path/thumb.jpg</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">privateKey</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAxVOIocT3q+aQKUvs53LOnxokoJUtZXKHL+LArNl4a3dhZ8wY
ZPGwodSydB/jo4aHKZztA0YCPd3LOnxoko3LOnxokoJUtCM/DdVGQfb/0+PpWzPe
KIGdzIl3LOoJUtfOAMS6nC3LOnxJUt33LOnxnxokoJUtXN1ej06CYPR5ZfwKFFIO
tK1yWx3LOnxokoJUtNRSdEi</span><b>&lt;/</b><span class="xml-element">privateKey</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">publicKey</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">ssh-rsa AAAAB3NzaC1yc2l4a3dhZ8wYEAAxVOIocT3q+aQKUvs5omvVdPl4a3dhZ8wY+LArTNl4a3dhZ8wl4a3dhZ8wY/jo4aHKZztA0YCPd3LOnxokoJUtACM/Dm0wq67dVGQfb/0+PpWzPeCKIGdEEPAzIlfOAMS6nC3Hy3ydBFbi5IJtbGmXN1ej06CYPR5ZfwKAD8FFIOa7dMYtK1yWxNRSdEih00Z8vEiiAkoEHDatRMKVbluqdPVTleQzgqnYL/45l4a3dhZ8wYnbItnQYQgyxGbYgmMMVGGZsZnpRhRtvhAUOsQoixRC14sKHsl4a3dhZ8wY/l4a3dhZ8wY+qbHEaDdl4a3dhZ8wY/QWnhlhKQwIzXl4a3dhZ8wY== user@my.domain</span><b>&lt;/</b><span class="xml-element">publicKey</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">sshUrlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-remoteStorageContentResource"></a><a name="type-T_remoteStorageContentResource"></a><span class="element-title">remoteStorageContentResource element</span> (T_remoteStorageContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is a path within a remote storage defined in Kaltura. Using this option, only a link to the content location is set from the entry, without actually uploading content to Kaltura.</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>url</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The relative path of the file from the remote storage base directory</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr></tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">storageProfileId</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The identifier of the remote storage profile used as the source of content ingestion. Only links to the files on this remote storage are set from the entry, without actually uploading content to Kaltura. (The remote storage must be defined in Kaltura.)
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">storageProfile</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The system name of the remote storage profile used as the source of content ingestion. Only links to the files on this remote storage are set from the entry, without actually uploading content to Kaltura. (The remote storage must be defined in Kaltura.)
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">remoteStorageContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">path_from_base_dir/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">storageProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_STORAGE_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="xml-element">storageProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">remoteStorageContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">remoteStorageContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">path_from_base_dir/thumb.jpg</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">storageProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_STORAGE_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="xml-element">storageProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">remoteStorageContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnails</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-remoteStorageContentResources"></a><a name="type-T_remoteStorageContentResources"></a><span class="element-title">remoteStorageContentResources element</span> (T_remoteStorageContentResources)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Sets the location of content ingestion within several remote storages defined in Kaltura. Using this option, only links to the content location are set from the entry, without actually uploading content to Kaltura.</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Specifies that the content location is a path within a single remote storage defined in Kaltura.<br> 
						Using this option, only a link to the content location is set from the entry, without actually uploading content to Kaltura.
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">remoteStorageContentResources</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">remoteStorageContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">path_from_base_dir/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
										</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">storageProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_STORAGE_PROFILE_SYSTEM_NAME_1</span><b>&lt;/</b><span class="xml-element">storageProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">remoteStorageContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">remoteStorageContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">path_from_base_dir/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
										</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">storageProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_STORAGE_PROFILE_SYSTEM_NAME_2</span><b>&lt;/</b><span class="xml-element">storageProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">remoteStorageContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">remoteStorageContentResources</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-entryContentResource"></a><a name="type-T_entryContentResource"></a><span class="element-title">entryContentResource element</span> (T_entryContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the source of content ingestion is the content of an existing Kaltura entry</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>entryId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of the entry that is the origin of the content</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr></tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">flavorParamsId</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The flavor params identifier of the content origin entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">flavorParams</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The flavor params system name of the content origin entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example: Adding flavor asset from an existing entry and associating it with a specific flavor params in a target entry</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">entryContentResource</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{origin entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
									</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">flavorParams</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">BASIC_SMALL</span><b>&lt;/</b><span class="xml-element">flavorParams</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">entryContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-assetContentResource"></a><a name="type-T_assetContentResource"></a><span class="element-title">assetContentResource element</span> (T_assetContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the source of content ingestion is a specific asset of an existing Kaltura entry</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>assetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of  the asset that is the origin of the content</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">assetContentResource</span> <span class="xml-attribute">assetId</span><b>=&quot;</b><span class="xml-attribute-value">{existing asset id}</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">assetContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-tags"></a><a name="type-T_tags"></a><span class="element-title">tags element</span> (T_tags)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Free text tags</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2">tag</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies a single tag to set for a related object</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td>string</td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example: Entry tags</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-categories"></a><a name="type-T_categories"></a><span class="element-title">categories element</span> (T_categories)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry`s category assignment.</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2">category</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies a single category assigned to an entry. Use the &gt; character (`&amp;gt;`) to indicate the position of the category in the category tree hierarchy</xs:documentation></span><br>
</td>
<td>No</td>
<td>32</td>
<td>string</td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example: Entry categories</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">category</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="xml-element">category</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">categories</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">contentAssets</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">contentAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-dropFolderFileContentResource"></a><a name="type-T_dropFolderFileContentResource"></a><span class="element-title">dropFolderFileContentResource element</span> (T_dropFolderFileContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is within a Kaltura defined drop folder</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>filePath</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The name of the file in the drop folder
				</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td>
					 Maximum length: 500 characters<br>
</td>
</tr>
<tr>
<td>dropFolderFileId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The id of the drop folder file object
				</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">fileSize</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The expected size of the file<br>
						Used for validation
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>long</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">fileChecksum</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The expected checksum of the file<br>
						md5 or sha1<br>
						Used for validation
					</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">Using file size validation example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">dropFolderFileContentResource</span> <span class="xml-attribute">filePath</span><b>=&quot;</b><span class="xml-attribute-value">file.jpg</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">fileSize</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">453453344</span><b>&lt;/</b><span class="xml-element">fileSize</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">dropFolderFileContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">Using checksum validation example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">add</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">type</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">type</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">media</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">media</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">content</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">content</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">dropFolderFileContentResource</span> <span class="xml-attribute">filePath</span><b>=&quot;</b><span class="xml-attribute-value">file.jpg</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">fileChecksum</span> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">md5</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sdfsjodf90sfsdfzfasdfwrg34</span><b>&lt;/</b><span class="xml-element">fileChecksum</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">dropFolderFileContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">thumbnail</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">item</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-ad-cue-point"></a><a name="type-T_scene_adCuePointBulkUploadXml"></a><span class="element-title">scene-ad-cue-point element</span> (T_scene_adCuePointBulkUploadXml)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single advertisement cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="extends-title"><td colspan="7">Extended from <a href="#type-T_scene">T_scene</a>
</td></tr>
<tr class="">
<td class="first" colspan="2">sceneStartTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Searchable keywords associated with a cue point</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">sceneEndTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the end time</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sceneTitle</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Text that defines the title</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 250 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">sourceUrl</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The URL of the ad XML</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">adType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates the ad type</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaAdType">KalturaAdType</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">protocolType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates the ad protocol type</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaAdProtocolType">KalturaAdProtocolType</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td colspan="2" class="first extensions-title">Extensions:</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-scene-customData">scene-customData</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-ad-cue-point</span> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneTitle</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my ad title</span><b>&lt;/</b><span class="xml-element">sceneTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sourceUrl</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">http://source.to.my/ad.xml</span><b>&lt;/</b><span class="xml-element">sourceUrl</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">adType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">adType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">protocolType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">protocolType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-ad-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-annotation"></a><a name="type-T_scene_annotationBulkUploadXml"></a><span class="element-title">scene-annotation element</span> (T_scene_annotationBulkUploadXml)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single annotation cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="extends-title"><td colspan="7">Extended from <a href="#type-T_scene">T_scene</a>
</td></tr>
<tr class="">
<td class="first" colspan="2">sceneStartTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Searchable keywords associated with a cue point</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">sceneEndTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the end time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sceneText</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A free text description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">parent</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The system name of a parent annotation</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr class="choice choice-end">
<td class="first">parentId</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of a parent annotation</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 250 characters<br>
</td>
</tr>
<tr class="">
<td colspan="2" class="first extensions-title">Extensions:</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-scene-customData">scene-customData</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example 1: Single annotation</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:10</span><b>&lt;/</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneText</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my annotation</span><b>&lt;/</b><span class="xml-element">sceneText</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">Example 2: Multiple related annotations</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:10</span><b>&lt;/</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneText</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my annotation parent</span><b>&lt;/</b><span class="xml-element">sceneText</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag3</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag4</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:10</span><b>&lt;/</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneText</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my annotation child</span><b>&lt;/</b><span class="xml-element">sceneText</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">parent</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&lt;/</b><span class="xml-element">parent</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-attachments"></a><a name="type-T_attachments"></a><span class="element-title">attachments element</span> (T_attachments)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All attachments elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply:<br>
						Update - Update existing attachment<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-attachment">attachment</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All attachment elements</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">attachments</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">update</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">attachment</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">attachment</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">attachment</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">attachment</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">attachment</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">attachment</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">attachments</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-attachment"></a><a name="type-T_attachment"></a><span class="element-title">attachment element</span> (T_attachment)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>attachmentAssetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The asset id to be updated with this resource used only for update</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset file format</xs:documentation></span><br>
</td>
<td>No</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaAttachmentType">KalturaAttachmentType</a></td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">tags</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies specific tags you want to set for the flavor asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first"><a href="#element-serverFileContentResource">serverFileContentResource</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content ingestion location is on a Kaltura hosted server</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-urlContentResource">urlContentResource</a></td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is a URL (http,ftp)</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></td>
<td rowspan="1">Option 3</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is a path within a Kaltura defined remote storage</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></td>
<td rowspan="1">Option 4</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Set of content files within several Kaltura defined remote storages</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-entryContentResource">entryContentResource</a></td>
<td rowspan="1">Option 5</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content is a Kaltura entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-assetContentResource">assetContentResource</a></td>
<td rowspan="1">Option 6</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content is a Kaltura asset</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first extensions-title">Extensions:</td>
<td rowspan="2" class="last-rowspan">Option 7</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension choice choice-end">
<td class="first"><a href="#element-dropFolderFileContentResource">dropFolderFileContentResource</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is within a Kaltura defined drop folder</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">filename</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset file name</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">title</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset title</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">description</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset free text description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">attachment</span> <span class="xml-attribute">format</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">attachmentAssetId</span><b>=&quot;</b><span class="xml-attribute-value">{asset id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">example</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">http://my.domain/path/file.txt</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">filename</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_file_name.txt</span><b>&lt;/</b><span class="xml-element">filename</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">title</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my attachment asset title</span><b>&lt;/</b><span class="xml-element">title</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">description</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my attachment asset free text description</span><b>&lt;/</b><span class="xml-element">description</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">attachment</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-subTitles"></a><a name="type-T_subTitles"></a><span class="element-title">subTitles element</span> (T_subTitles)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All subTitles elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply:<br>
						Update - Update existing subtitles<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-subTitle">subTitle</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All subTitles elements</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">subTitles</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">update</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">subTitle</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">subTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">subTitle</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">subTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">subTitle</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">subTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">subTitles</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-subTitle"></a><a name="type-T_subTitle"></a><span class="element-title">subTitle element</span> (T_subTitle)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single caption asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>captionParamsId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The asset id to be updated with this resource used only for update</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>captionParams</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of caption params to be associated with the caption asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>captionAssetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of caption params to be associated with the caption asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>isDefault</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies if this asset is the default caption asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Caption asset file format</xs:documentation></span><br>
</td>
<td>No</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaCaptionType">KalturaCaptionType</a></td>
<td></td>
</tr>
<tr>
<td>lang</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Caption asset file language</xs:documentation></span><br>
</td>
<td>No</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaLanguage">KalturaLanguage</a></td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">tags</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies specific tags you want to set for the flavor asset</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first"><a href="#element-serverFileContentResource">serverFileContentResource</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content ingestion location is on a Kaltura hosted server</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-urlContentResource">urlContentResource</a></td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is a URL (http,ftp)</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></td>
<td rowspan="1">Option 3</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is a path within a Kaltura defined remote storage</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></td>
<td rowspan="1">Option 4</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Set of content files within several Kaltura defined remote storages</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-entryContentResource">entryContentResource</a></td>
<td rowspan="1">Option 5</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content is a Kaltura entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-assetContentResource">assetContentResource</a></td>
<td rowspan="1">Option 6</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content is a Kaltura asset</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first extensions-title">Extensions:</td>
<td rowspan="2" class="last-rowspan">Option 7</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension choice choice-end">
<td class="first"><a href="#element-dropFolderFileContentResource">dropFolderFileContentResource</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is within a Kaltura defined drop folder</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">subTitle</span> <span class="xml-attribute">isDefault</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b> <span class="xml-attribute">format</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b> <span class="xml-attribute">lang</span><b>=&quot;</b><span class="xml-attribute-value">Hebrew</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">http://my.domain/path/caption.srt</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">subTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-code-cue-point"></a><a name="type-T_scene_codeCuePointBulkUploadXml"></a><span class="element-title">scene-code-cue-point element</span> (T_scene_codeCuePointBulkUploadXml)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single code cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="extends-title"><td colspan="7">Extended from <a href="#type-T_scene">T_scene</a>
</td></tr>
<tr class="">
<td class="first" colspan="2">sceneStartTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Searchable keywords associated with a cue point</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">sceneEndTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the end time</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">code</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Textual code</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 250 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">description</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A free text description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td colspan="2" class="first extensions-title">Extensions:</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-scene-customData">scene-customData</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-code-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag1</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">tag2</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">code</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_CODE</span><b>&lt;/</b><span class="xml-element">code</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">description</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my code cue point description</span><b>&lt;/</b><span class="xml-element">description</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-code-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-thumb-cue-point"></a><a name="type-T_scene_thumbCuePoint"></a><span class="element-title">scene-thumb-cue-point element</span> (T_scene_thumbCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single thumb cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="extends-title"><td colspan="7">Extended from <a href="#type-T_scene">T_scene</a>
</td></tr>
<tr class="">
<td class="first" colspan="2">sceneStartTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Searchable keywords associated with a cue point</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">title</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">description</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">subType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates the thumb cue point sub type 1 = Slide 2 = Chapter, defaults to Slide</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaThumbCuePointSubType">KalturaThumbCuePointSubType</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-slide">slide</a></td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td colspan="2" class="first extensions-title">Extensions:</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-scene-customData">scene-customData</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-thumb-cue-point</span> <span class="xml-attribute">sceneId</span><b>=&quot;</b><span class="xml-attribute-value">{scene id}</span><b>&quot;</b> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">slide</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">urlContentResource</span> <span class="xml-attribute">url</span><b>=&quot;</b><span class="xml-attribute-value">URL_TO_FILE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">urlContentResource</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">slide</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-thumb-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-slide"></a><a name="type-T_slide"></a><span class="element-title">slide element</span> (T_slide)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
				The slide image to attahce to tht thumb cue point ellement
			</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>timedThumbAssetId</td>
<td></td>
<td>No</td>
<td>string</td>
<td></td>
</tr></tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first"><a href="#element-urlContentResource">urlContentResource</a></td>
<td rowspan="1">Option 1</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></td>
<td rowspan="1">Option 2</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></td>
<td rowspan="1">Option 3</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-assetContentResource">assetContentResource</a></td>
<td rowspan="1">Option 4</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first"><a href="#element-entryContentResource">entryContentResource</a></td>
<td rowspan="1">Option 5</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first extensions-title">Extensions:</td>
<td rowspan="2" class="last-rowspan">Option 6</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension choice choice-end">
<td class="first"><a href="#element-dropFolderFileContentResource">dropFolderFileContentResource</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that content file location is within a Kaltura defined drop folder</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><hr><a name="element-distributions"></a><a name="type-T_distributions"></a><span class="element-title">distributions element</span> (T_distributions)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom metadata elemets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-distribution">distribution</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All distributions</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">distributions</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">distribution</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">distributionProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_DISTRIBUTION_PROFILE</span><b>&lt;/</b><span class="xml-element">distributionProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">sunrise</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-10-26T21:32:52</span><b>&lt;/</b><span class="xml-element">sunrise</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">sunset</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-12-26T21:32:52</span><b>&lt;/</b><span class="xml-element">sunset</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">distribution</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">distributions</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-distribution"></a><a name="type-T_distribution"></a><span class="element-title">distribution element</span> (T_distribution)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Details related to a content distribution submission</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>entryDistributionId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of an entry distribution object that an update/delete action applies to</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>submitWhenReady</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates that the entry should be submitted when it is possible</xs:documentation></span><br>
</td>
<td>No</td>
<td>boolean</td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first">distributionProvider</td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The provider (Distribution Partner) that the entry is distributed to</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaDistributionProviderType">KalturaDistributionProviderType</a></td>
<td class="last"></td>
</tr>
<tr class="choice">
<td class="first">distributionProfileId</td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of the distribution profile to use for entry distribution</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first">distributionProfile</td>
<td rowspan="1">Option 3</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The system name of the distribution profile to use for entry distribution</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">sunrise</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The date and time that the entry becomes available on the remote site.<br>
						If not specified, the entry scheduling date and time are used.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sunset</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The date and time that the entry becomes unavailable on the remote site.<br>
						If not specified, the entry scheduling date and time are used.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">flavorAssetIds</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Comma-separated list of existing flavor asset IDs for the distribution destination.<br>
						Used only for an existing entry.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">thumbAssetIds</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						Comma-separated list of existing thumbnail asset IDs for the distribution destination.<br>
						Used only for an existing entry.
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">distribution</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">distributionProfile</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_DISTRIBUTION_PROFILE</span><b>&lt;/</b><span class="xml-element">distributionProfile</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sunrise</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-10-26T21:32:52</span><b>&lt;/</b><span class="xml-element">sunrise</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sunset</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-12-26T21:32:52</span><b>&lt;/</b><span class="xml-element">sunset</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">distribution</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scenes"></a><a name="type-T_scenes"></a><span class="element-title">scenes element</span> (T_scenes)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue points wrapper element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply from the item element:<br>
						Update - Update an existing entry<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-scene">scene</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point element</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scenes</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">update</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-ad-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-ad-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-code-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-code-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scenes</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene"></a><a name="type-T_scene"></a><span class="element-title">scene element</span> (abstract T_scene)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
				A base cue point element. This is an abstract element and cannot be used. Use only extended elements.
			</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>sceneId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of the cue point that an update/delete action applies to</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 250 characters<br>
</td>
</tr>
<tr>
<td>systemName</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The system name of the cue point that an update/delete action applies to</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 120 characters<br>
</td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">sceneStartTime</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue point that marks the start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Searchable keywords associated with a cue point</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-extended-title">Extended elements</span><br><ol>
<li><a href="#element-scene-ad-cue-point">scene-ad-cue-point</a></li>
<li><a href="#element-scene-annotation">scene-annotation</a></li>
<li><a href="#element-scene-code-cue-point">scene-code-cue-point</a></li>
<li><a href="#element-scene-thumb-cue-point">scene-thumb-cue-point</a></li>
</ol><hr><a name="element-scene-customData"></a><a name="type-T_customData"></a><span class="element-title">scene-customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>metadataId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of the custom metadata object that an update/delete action applies to</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataProfile</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The schema profile system name of the custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr>
<td>metadataProfileId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The schema profile identifier of the custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply:<br>
						transformXslt - transform metadata object using Xslt<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
			Acceptable values:
			<ul>
<li>transformXslt</li>
<li>replace</li>
</ul>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">xslt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The xslt to transform on the current metadata object
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-xmlData">xmlData</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">metadata xml Data</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-ad-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneTitle</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my ad title</span><b>&lt;/</b><span class="xml-element">sceneTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sourceUrl</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">http://source.to.my/ad.xml</span><b>&lt;/</b><span class="xml-element">sourceUrl</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">adType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">adType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">protocolType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">protocolType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-customData</span> <span class="xml-attribute">metadataProfile</span><b>=&quot;</b><span class="xml-attribute-value">MY_AD_METADATA_PROFILE_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">metadata</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">adData</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my ad custom data</span><b>&lt;/</b><span class="xml-element">adData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">metadata</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">scene-customData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-ad-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-customDataItems"></a><a name="type-T_customDataItems"></a><span class="element-title">customDataItems element</span> (T_customDataItems)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom metadata elemets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply:<br>
						Update - Update metadata for existing entry<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-customData">customData</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom data elemets</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">customDataItems</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">update</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">customData</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">customData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">customData</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">customData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">customData</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">customData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">customDataItems</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-customData"></a><a name="type-T_customData"></a><span class="element-title">customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr>
<td>metadataId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The identifier of the custom metadata object that an update/delete action applies to</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataProfile</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The schema profile system name of the custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr>
<td>metadataProfileId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The schema profile identifier of the custom metadata</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
</tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply:<br>
						transformXslt - transform metadata object using Xslt<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
			Acceptable values:
			<ul>
<li>transformXslt</li>
<li>replace</li>
</ul>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">xslt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The xslt to transform on the current metadata object
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-xmlData">xmlData</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">metadata xml Data</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">customData</span> <span class="xml-attribute">metadataId</span><b>=&quot;</b><span class="xml-attribute-value">{metadata id}</span><b>&quot;</b> <span class="xml-attribute">metadataProfile</span><b>=&quot;</b><span class="xml-attribute-value">MY_METADATA_PROFILE_SYSTEM_NAME}</span><b>&quot;</b> <span class="xml-attribute">metadataProfileId</span><b>=&quot;</b><span class="xml-attribute-value">{metadata profile id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">transformXslt</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xslt</span><b>&gt;</b><b>&lt;/</b><span class="xml-element">xslt</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xmlData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">metadata</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">TextFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry field value</span><b>&lt;/</b><span class="xml-element">TextFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry multiple text field value1</span><b>&lt;/</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry multiple text field value2</span><b>&lt;/</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">TextSelectionListFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry selected text value</span><b>&lt;/</b><span class="xml-element">TextSelectionListFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">DateFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">21741540</span><b>&lt;/</b><span class="xml-element">DateFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">EntryIDFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">0_5b3t2c8z</span><b>&lt;/</b><span class="xml-element">EntryIDFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">metadata</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xmlData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">customData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-xmlData"></a><a name="type-T_xmlData"></a><span class="element-title">xmlData element</span> (T_xmlData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML data for custom metadata</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2">[Any element]</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The XML for custom metadata according to a schema profile</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>any type</td>
<td class="last"></td>
</tr></tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><b>&lt;</b><span class="xml-element">xmlData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><b>&lt;</b><span class="xml-element">metadata</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">TextFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry field value</span><b>&lt;/</b><span class="xml-element">TextFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry multiple text field value1</span><b>&lt;/</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry multiple text field value2</span><b>&lt;/</b><span class="xml-element">MultipleTextFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">TextSelectionListFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">entry selected text value</span><b>&lt;/</b><span class="xml-element">TextSelectionListFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">DateFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">21741540</span><b>&lt;/</b><span class="xml-element">DateFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">EntryIDFieldName</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">0_5b3t2c8z</span><b>&lt;/</b><span class="xml-element">EntryIDFieldName</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">metadata</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><b>&lt;/</b><span class="xml-element">xmlData</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-pluginReplacementOptions"></a><a name="type-T_metadataReplacementOptions"></a><span class="element-title">pluginReplacementOptions element</span> (T_metadataReplacementOptions)<br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="extends-title"><td colspan="7">Extended from <a href="#type-T_pluginReplacementOptions">T_pluginReplacementOptions</a>
</td></tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">metadataReplacementOptionsItem</td>
<td></td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">pluginReplacementOptions</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">pluginReplacementOptionsItem</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						...
						</span><b>&lt;/</b><span class="xml-element">pluginReplacementOptionsItem</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">pluginReplacementOptionsItem</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						...
						</span><b>&lt;/</b><span class="xml-element">pluginReplacementOptionsItem</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						...
						...
					</span><b>&lt;/</b><span class="xml-element">pluginReplacementOptions</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-widevineAssets"></a><a name="type-T_widevineAssets"></a><span class="element-title">widevineAssets element</span> (T_widevineAssets)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All widevine elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">action</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The action to apply:<br>
						Update - Update existing asset<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-widevineAsset">widevineAsset</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All widevine elements</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">widevineAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">action</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">update</span><b>&lt;/</b><span class="xml-element">action</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">widevineAsset</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">widevineAsset</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">widevineAsset</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">widevineAsset</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">widevineAsset</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">widevineAsset</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">widevineAssets</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-widevineAsset"></a><a name="type-T_widevineAsset"></a><span class="element-title">widevineAsset element</span> (T_widevineAsset)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Widevine asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>flavorAssetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The asset id to be updated with this resource used only for update</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr></tbody>
</table><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody>
<tr class="">
<td class="first" colspan="2">widevineAssetId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">widevine asset id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>long</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">flavorParamsId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">widevine asset flavor params Id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>long</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">widevineDistributionStartDate</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The license distribution window start date.<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">widevineDistributionEndDate</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
						The license distribution window end date.<br>
					</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
</tbody>
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">widevineAsset</span> <span class="xml-attribute">flavorAssetId</span><b>=&quot;</b><span class="xml-attribute-value">{asset id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">widevineAssetId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">123456</span><b>&lt;/</b><span class="xml-element">widevineAssetId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">flavorParamsId</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">61</span><b>&lt;/</b><span class="xml-element">flavorParamsId</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">widevineDistributionStartDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2011-05-05T00:00:00</span><b>&lt;/</b><span class="xml-element">widevineDistributionStartDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">widevineDistributionEndDate</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">2014-05-19T00:00:00</span><b>&lt;/</b><span class="xml-element">widevineDistributionEndDate</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">widevineAsset</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div>
		
</div>

