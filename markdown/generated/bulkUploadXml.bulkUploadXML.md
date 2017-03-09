# Bulk Upload

<style>
#KalturaSchemaDoc .code {
    height: 300px;
    overflow-x: scroll;
}
#KalturaSchemaDoc .k-xe {
    color: blue;
}
#KalturaSchemaDoc .k-xev  {
    color: gray;
}
#KalturaSchemaDoc .k-xa {
    color: red;
}
#KalturaSchemaDoc .k-xav {
    color: gray;
}
#KalturaSchemaDoc .k-i {
    padding: 8px;
}
#KalturaSchemaDoc .k-et {
    color: #0606ee;
    font-size: larger;
    font-weight: bold;
}
#KalturaSchemaDoc table td,
#KalturaSchemaDoc table th {
  padding: 2px;
  border: 1px solid #ccc;
}
#KalturaSchemaDoc .k-ee {
  font-size: 12px;
}
</style>

<div id="KalturaSchemaDoc">

			Download URL: <a href="http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/bulkUploadXml.bulkUploadXML/name/bulkUploadXml.bulkUploadXML.xsd;" target="_blank">http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/bulkUploadXml.bulkUploadXML/name/bulkUploadXml.bulkUploadXML.xsd</a><br>
Version: 1.0<br>
<br>
<div class="code">
<b>&lt;</b><span class="k-xe">xs:schema</span> <span class="k-xa">version</span><b>=&quot;</b><span class="k-xav">1.0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_mrss</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">ks</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-channel">channel</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-mrss-extension">mrss-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">version</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:decimal</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_channel</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-item">item</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-channel-extension">channel-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_item</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">add</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">delete</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">type</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaEntryType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
							</span><span class="k-xav">
						</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">licenseType</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaLicenseType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
							</span><span class="k-xav">
						</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryId</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">referenceId</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2000</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">parentReferenceId</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">100</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">userId</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">100</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">name</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">256</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">description</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">keepManualThumbnails</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:boolean</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-categories">categories</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">partnerData</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">4000</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">partnerSortData</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">accessControlId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">accessControl</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">conversionProfileId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">conversionProfile</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">startDate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">endDate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">templateEntryId</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">templateEntry</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2000</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-media">media</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">msDuration</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-contentAssets">contentAssets</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-thumbnails">thumbnails</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-item-extension">item-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_media</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">mediaType</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaMediaType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-media-extension">media-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_serverFileContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">fileSize</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">fileChecksum</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleContent</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">default</span><b>=&quot;</b><span class="k-xav">md5</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">type</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
										</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">md5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
										</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">sha1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleContent</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">filePath</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_urlContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_sshUrlContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">privateKey</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">publicKey</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">keyPassphrase</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_remoteStorageContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">storageProfileId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">storageProfile</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_remoteStorageContentResources</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_entryContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParamsId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParams</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_assetContentResource</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_stream</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">type</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">trackIndex</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">language</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">channelIndex</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">label</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">channelLayout</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_streams</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-stream">stream</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_content</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-sshUrlContentResource">sshUrlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-content-extension">content-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-streams">streams</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParamsId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParams</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_contentAssets</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">replace</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-content">content</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_thumbnail</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-sshUrlContentResource">sshUrlContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">

			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-thumbnail-extension">thumbnail-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">default</span><b>=&quot;</b><span class="k-xav">false</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">isDefault</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:boolean</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbParamsId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbParams</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_thumbnails</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">replace</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-thumbnail">thumbnail</a></span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_url</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:pattern</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">(([hH][tT][tT][pP][sS]?)|(([fF][tT][pP])|([sS][fF][tT][pP])|([sS][cC][pP])))://?(([ 0-9a-zA-Z_!~*
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
				=+$,%#-\[\]]+)+)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:pattern</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tag</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_categories</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">32</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">category</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_pluginReplacementOptions</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_pluginReplacementOptionsItem</span><b>&quot;</b> <span class="k-xa">abstract</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">mrss</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_mrss</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">channel</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_channel</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">item</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_item</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">media</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_media</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">contentAssets</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_contentAssets</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">content</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_content</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">streams</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_streams</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">stream</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_stream</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbnails</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_thumbnails</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbnail</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_thumbnail</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_url</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">contentResource-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">serverFileContentResource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_serverFileContentResource</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">urlContentResource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_urlContentResource</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sshUrlContentResource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_sshUrlContentResource</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">remoteStorageContentResource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_remoteStorageContentResource</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">remoteStorageContentResources</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_remoteStorageContentResources</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryContentResource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_entryContentResource</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetContentResource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_assetContentResource</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">categories</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_categories</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">mrss-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">channel-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">media-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">mix-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">playlist-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">data-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">liveStream-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">document-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">content-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbnail-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_adCuePointBulkUploadXml</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneEndTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneTitle</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sourceUrl</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">adType</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaAdType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">protocolType</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaAdProtocolType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-ad-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_adCuePointBulkUploadXml</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_annotationBulkUploadXml</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneEndTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneText</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">parent</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">parentId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
					
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-annotation</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_annotationBulkUploadXml</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_attachments</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-attachment">attachment</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_attachment</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">filename</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">title</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">description</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-attachment-extension">attachment-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">attachmentAssetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">format</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaAttachmentType</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
						
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">attachment-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">attachments</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_attachments</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">attachment</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_attachment</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_subTitles</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-subTitle">subTitle</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_subTitle</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-serverFileContentResource">serverFileContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-subtitle-extension">subtitle-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">captionParamsId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">captionParams</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">captionAssetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">isDefault</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:boolean</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">format</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaCaptionType</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">lang</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaLanguage</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
						
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">subtitle-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">subTitles</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_subTitles</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">subTitle</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_subTitle</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_codeCuePointBulkUploadXml</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneEndTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">code</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">description</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-code-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_codeCuePointBulkUploadXml</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_thumbCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">title</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">description</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">subType</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-slide">slide</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_slide</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-urlContentResource">urlContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResource">remoteStorageContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-remoteStorageContentResources">remoteStorageContentResources</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-assetContentResource">assetContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-entryContentResource">entryContentResource</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-contentResource-extension">contentResource-extension</a></span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">timedThumbAssetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-thumb-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_thumbCuePoint</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">slide</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_slide</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_distribution</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProvider</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaDistributionProviderType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProfileId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProfile</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sunrise</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sunset</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorAssetIds</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbAssetIds</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-distribution-extension">distribution-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryDistributionId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">submitWhenReady</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:boolean</span><b>&quot;</b> <span class="k-xa">default</span><b>=&quot;</b><span class="k-xav">false</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">		
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">

	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_distributions</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-distribution">distribution</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributions</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_distributions</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distribution</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_distribution</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distribution-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scenes</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene">scene</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">	

	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b> <span class="k-xa">abstract</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneStartTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">systemName</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scenes</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scenes</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-customData</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_customData</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_customData</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">transformXslt</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">replace</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">xslt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-xmlData">xmlData</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataProfile</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataProfileId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_xmlData</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:any</span> <span class="k-xa">namespace</span><b>=&quot;</b><span class="k-xav">##local</span><b>&quot;</b> <span class="k-xa">processContents</span><b>=&quot;</b><span class="k-xav">skip</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">		
			</span><b>&lt;/</b><span class="k-xe">xs:any</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_customDataItems</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-customData">customData</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">customDataItems</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_customDataItems</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">customData</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_customData</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">xmlData</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_xmlData</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_metadataReplacementOptionsItem</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_pluginReplacementOptionsItem</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">shouldCopyMetadata</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
									</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">false</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_metadataReplacementOptions</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_pluginReplacementOptions</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataReplacementOptionsItem</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_metadataReplacementOptionsItem</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">	
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">pluginReplacementOptions</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_metadataReplacementOptions</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_widevineAssets</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">action</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">update</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-widevineAsset">widevineAsset</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_widevineAsset</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">widevineAssetId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:long</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParamsId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:long</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">	
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">widevineDistributionStartDate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">widevineDistributionEndDate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">	
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorAssetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
						
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">widevineAsset-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">widevineAssets</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_widevineAssets</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">widevineAsset</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_widevineAsset</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaEntryType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">-1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">6</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">7</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">8</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">10</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">externalMedia.externalMedia</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaDynamicEnum</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaLicenseType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">-1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">6</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">7</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">8</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">9</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">10</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">11</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">12</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">13</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">14</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">15</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaMediaType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">201</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">202</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">203</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">204</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaAdType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaAdProtocolType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaAttachmentType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaCaptionType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaLanguage</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Abkhazian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Afar</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Afrikaans</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Albanian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Amharic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Arabic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Armenian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Assamese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Aymara</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Azerbaijani</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Bashkir</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Basque</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Bengali (Bangla)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Bhutani</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Bihari</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Bislama</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Breton</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Bulgarian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Burmese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Byelorussian (Belarusian)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Cambodian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Catalan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Chinese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Corsican</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Croatian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Czech</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Danish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Dutch</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">English</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">English (British)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">English (American)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Esperanto</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Estonian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Faeroese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Farsi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Fiji</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Finnish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">French</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Frisian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Galician</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Gaelic (Scottish)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Gaelic (Manx)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Georgian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">German</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Greek</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Greenlandic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Guarani</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Gujarati</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Hausa</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Hebrew</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Hebrew</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Hindi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Hungarian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Icelandic</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Indonesian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Indonesian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Interlingua</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Interlingue</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Inuktitut</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Inupiak</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Irish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Italian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Japanese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Javanese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kannada</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kashmiri</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kazakh</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kinyarwanda (Ruanda)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kirghiz</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kirundi (Rundi)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Korean</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Kurdish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Laothian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Latin</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Latvian (Lettish)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Limburgish ( Limburger)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Lingala</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Lithuanian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Macedonian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Malagasy</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Malay</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Malayalam</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Maltese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Maori</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Marathi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Moldavian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Mongolian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Nauru</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Nepali</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Norwegian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Occitan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Oriya</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Oromo (Afan, Galla)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Pashto (Pushto)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Polish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Portuguese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Punjabi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Quechua</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Rhaeto-Romance</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Romanian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Russian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Samoan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Sangro</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Sanskrit</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Serbian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Serbo-Croatian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Sesotho</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Setswana</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Shona</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Sindhi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Sinhalese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Siswati</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Slovak</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Slovenian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Somali</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Spanish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Sundanese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Swahili (Kiswahili)</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Swedish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tagalog</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tajik</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tamil</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tatar</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Telugu</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Thai</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tibetan</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tigrinya</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tonga</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Tsonga</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Turkish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Turkmen</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Twi</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Uighur</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Ukrainian</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Urdu</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Uzbek</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Vietnamese</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Volapuk</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Welsh</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Wolof</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Xhosa</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Yiddish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Yiddish</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Yoruba</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Zulu</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Multilingual</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">Undefined</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaDistributionProviderType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">attUverseDistribution.ATT_UVERSE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">avnDistribution.AVN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">comcastMrssDistribution.COMCAST_MRSS</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">crossKalturaDistribution.CROSS_KALTURA</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">dailymotionDistribution.DAILYMOTION</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">doubleClickDistribution.DOUBLECLICK</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">freewheelDistribution.FREEWHEEL</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">freewheelGenericDistribution.FREEWHEEL_GENERIC</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">ftpDistribution.FTP</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">ftpDistribution.FTP_SCHEDULED</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">huluDistribution.HULU</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">ideticDistribution.IDETIC</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">metroPcsDistribution.METRO_PCS</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">msnDistribution.MSN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">ndnDistribution.NDN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">podcastDistribution.PODCAST</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">quickPlayDistribution.QUICKPLAY</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">synacorHboDistribution.SYNACOR_HBO</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">tvComDistribution.TVCOM</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">timeWarnerDistribution.TIME_WARNER</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">uverseDistribution.UVERSE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">verizonVcastDistribution.VERIZON_VCAST</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">yahooDistribution.YAHOO</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">youTubeDistribution.YOUTUBE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">youtubeApiDistribution.YOUTUBE_API</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">tvinciDistribution.TVINCI</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">unicornDistribution.UNICORN</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">facebookDistribution.FACEBOOK</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">pushToNewsDistribution.PUSH_TO_NEWS</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
</span><b>&lt;/</b><span class="k-xe">xs:schema</span><b>&gt;</b><br>
</div><hr><a name="element-mrss"></a><a name="type-T_mrss"></a><span class="k-et">mrss element</span> (T_mrss)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A wrapper element that holds the XML structure</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">mrss</span> <span class="k-xa">version</span><b>=&quot;</b><span class="k-xav">1.0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">mrss</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-channel"></a><a name="type-T_channel"></a><span class="k-et">channel element</span> (T_channel)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A wrapper element that holds multiple item elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">mrss</span> <span class="k-xa">version</span><b>=&quot;</b><span class="k-xav">1.0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">mrss</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-item"></a><a name="type-T_item"></a><span class="k-et">item element</span> (T_item)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single entry wrapper element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example 1: Adding a new media entry: Adding source media file and a default thumbnail</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">licenseType</span><b>&gt;</b><span class="k-xav">-1</span><b>&lt;/</b><span class="k-xe">licenseType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">userId</span><b>&gt;</b><span class="k-xav">myUserId</span><b>&lt;/</b><span class="k-xe">userId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">name</span><b>&gt;</b><span class="k-xav">my entry name</span><b>&lt;/</b><span class="k-xe">name</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my entry free text description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">conversionProfile</span><b>&gt;</b><span class="k-xav">MY_TRANSCODING_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="k-xe">conversionProfile</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">startDate</span><b>&gt;</b><span class="k-xav">2011-05-05T00:00:00</span><b>&lt;/</b><span class="k-xe">startDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">endDate</span><b>&gt;</b><span class="k-xav">2011-05-19T00:00:00</span><b>&lt;/</b><span class="k-xe">endDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav"> 
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><span class="element-example-title">XML Example 2: Adding a new media entry: Adding multiple previously transcoded files as flavors and multiple thumbnails</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">licenseType</span><b>&gt;</b><span class="k-xav">-1</span><b>&lt;/</b><span class="k-xe">licenseType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">userId</span><b>&gt;</b><span class="k-xav">myUserId</span><b>&lt;/</b><span class="k-xe">userId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">name</span><b>&gt;</b><span class="k-xav">my entry name</span><b>&lt;/</b><span class="k-xe">name</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my entry free text description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">conversionProfile</span><b>&gt;</b><span class="k-xav">MY_TRANSCODING_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="k-xe">conversionProfile</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">startDate</span><b>&gt;</b><span class="k-xav">2011-05-05T00:00:00</span><b>&lt;/</b><span class="k-xe">startDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">endDate</span><b>&gt;</b><span class="k-xav">2011-05-19T00:00:00</span><b>&lt;/</b><span class="k-xe">endDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav"> 
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">flavorParamsId</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">flavorParamsId</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">flavorParamsId</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span> <span class="k-xa">isDefault</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><span class="element-example-title">XML Example 3: Updating an existing media entry: Updating both metadata and media</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">update</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">entryId</span><b>&gt;</b><span class="k-xav">{entry id}</span><b>&lt;/</b><span class="k-xe">entryId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">userId</span><b>&gt;</b><span class="k-xav">UpdatedUserId</span><b>&lt;/</b><span class="k-xe">userId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">name</span><b>&gt;</b><span class="k-xav">updated entry name</span><b>&lt;/</b><span class="k-xe">name</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">updated entry description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag3</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag4</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example3</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example4</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">startDate</span><b>&gt;</b><span class="k-xav">2011-05-05T00:00:00</span><b>&lt;/</b><span class="k-xe">startDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">endDate</span><b>&gt;</b><span class="k-xav">2011-05-19T00:00:00</span><b>&lt;/</b><span class="k-xe">endDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><span class="element-example-title">XML Example 4: Deleting an existing entry</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">delete</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">entryId</span><b>&gt;</b><span class="k-xav">{entry id}</span><b>&lt;/</b><span class="k-xe">entryId</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-media"></a><a name="type-T_media"></a><span class="k-et">media element</span> (T_media)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Media related information</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav"> 
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-contentAssets"></a><a name="type-T_contentAssets"></a><span class="k-et">contentAssets element</span> (T_contentAssets)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All content assets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
				</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
			</span>
</div><hr><a name="element-content"></a><a name="type-T_content"></a><span class="k-et">content element</span> (T_content)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies media/flavor asset information, such as location of media files to upload, type of ingestion, and related transcoding flavor settings</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav"> 
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">web</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
									</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">mbr</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-streams"></a><a name="type-T_streams"></a><span class="k-et">streams element</span> (T_streams)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Holds stream elements that specifies instructions to the transcoding process</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">streams</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">streams</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-stream"></a><a name="type-T_stream"></a><span class="k-et">stream element</span> (T_stream)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies instructions to the transcoding process on how to handle the multiple audio tracks</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">streams</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">stream</span> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">audio</span><b>&quot;</b> <span class="k-xa">trackIndex</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">language</span><b>=&quot;</b><span class="k-xav">eng</span><b>&quot;</b> <span class="k-xa">label</span><b>=&quot;</b><span class="k-xav">something</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">stream</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">streams</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-thumbnails"></a><a name="type-T_thumbnails"></a><span class="k-et">thumbnails element</span> (T_thumbnails)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All thumbnail assets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
				</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
			</span>
</div><hr><a name="element-thumbnail"></a><a name="type-T_thumbnail"></a><span class="k-et">thumbnail element</span> (T_thumbnail)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies thumbnail asset information, such as location of image files to upload, type of ingestion, and related thumbnail flavor settings</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span> <span class="k-xa">isDefault</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-serverFileContentResource"></a><a name="type-T_serverFileContentResource"></a><span class="k-et">serverFileContentResource element</span> (T_serverFileContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is on a Kaltura-hosted server. By default, this option is not available to Kaltura partners.</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example 1: Adding content from a Kaltura server: Using file size validation</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">serverFileContentResource</span> <span class="k-xa">filePath</span><b>=&quot;</b><span class="k-xav">/server/external/disc/path/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">fileSize</span><b>&gt;</b><span class="k-xav">453453344</span><b>&lt;/</b><span class="k-xe">fileSize</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">serverFileContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><span class="element-example-title">XML Example 2: Adding content from a Kaltura server: Using checksum validation</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">serverFileContentResource</span> <span class="k-xa">filePath</span><b>=&quot;</b><span class="k-xav">/server/external/disc/path/file.jpg</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">fileChecksum</span> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">md5</span><b>&quot;</b><b>&gt;</b><span class="k-xav">sdfsjodf90sfsdfzfasdfwrg34</span><b>&lt;/</b><span class="k-xe">fileChecksum</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">serverFileContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-urlContentResource"></a><a name="type-T_urlContentResource"></a><span class="k-et">urlContentResource element</span> (T_urlContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is a URL (http/ftp)</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://my.domain/path/video.mp4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://my.domain/path/thumb.jpg</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-sshUrlContentResource"></a><a name="type-T_sshUrlContentResource"></a><span class="k-et">sshUrlContentResource element</span> (T_sshUrlContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is a URL (scp/sftp)</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sshUrlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">sftp://user@my.domain/path/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">privateKey</span><b>&gt;</b><span class="k-xav">-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAxVOIocT3q+aQKUvs53LOnxokoJUtZXKHL+LArNl4a3dhZ8wY
ZPGwodSydB/jo4aHKZztA0YCPd3LOnxoko3LOnxokoJUtCM/DdVGQfb/0+PpWzPe
KIGdzIl3LOoJUtfOAMS6nC3LOnxJUt33LOnxnxokoJUtXN1ej06CYPR5ZfwKFFIO
tK1yWx3LOnxokoJUtNRSdEi</span><b>&lt;/</b><span class="k-xe">privateKey</span><b>&gt;</b><br><span class="k-xav">
									</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">publicKey</span><b>&gt;</b><span class="k-xav">ssh-rsa AAAAB3NzaC1yc2l4a3dhZ8wYEAAxVOIocT3q+aQKUvs5omvVdPl4a3dhZ8wY+LArTNl4a3dhZ8wl4a3dhZ8wY/jo4aHKZztA0YCPd3LOnxokoJUtACM/Dm0wq67dVGQfb/0+PpWzPeCKIGdEEPAzIlfOAMS6nC3Hy3ydBFbi5IJtbGmXN1ej06CYPR5ZfwKAD8FFIOa7dMYtK1yWxNRSdEih00Z8vEiiAkoEHDatRMKVbluqdPVTleQzgqnYL/45l4a3dhZ8wYnbItnQYQgyxGbYgmMMVGGZsZnpRhRtvhAUOsQoixRC14sKHsl4a3dhZ8wY/l4a3dhZ8wY+qbHEaDdl4a3dhZ8wY/QWnhlhKQwIzXl4a3dhZ8wY== user@my.domain</span><b>&lt;/</b><span class="k-xe">publicKey</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">sshUrlContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sshUrlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">scp://user@my.domain/path/thumb.jpg</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">privateKey</span><b>&gt;</b><span class="k-xav">-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAxVOIocT3q+aQKUvs53LOnxokoJUtZXKHL+LArNl4a3dhZ8wY
ZPGwodSydB/jo4aHKZztA0YCPd3LOnxoko3LOnxokoJUtCM/DdVGQfb/0+PpWzPe
KIGdzIl3LOoJUtfOAMS6nC3LOnxJUt33LOnxnxokoJUtXN1ej06CYPR5ZfwKFFIO
tK1yWx3LOnxokoJUtNRSdEi</span><b>&lt;/</b><span class="k-xe">privateKey</span><b>&gt;</b><br><span class="k-xav">
									</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">publicKey</span><b>&gt;</b><span class="k-xav">ssh-rsa AAAAB3NzaC1yc2l4a3dhZ8wYEAAxVOIocT3q+aQKUvs5omvVdPl4a3dhZ8wY+LArTNl4a3dhZ8wl4a3dhZ8wY/jo4aHKZztA0YCPd3LOnxokoJUtACM/Dm0wq67dVGQfb/0+PpWzPeCKIGdEEPAzIlfOAMS6nC3Hy3ydBFbi5IJtbGmXN1ej06CYPR5ZfwKAD8FFIOa7dMYtK1yWxNRSdEih00Z8vEiiAkoEHDatRMKVbluqdPVTleQzgqnYL/45l4a3dhZ8wYnbItnQYQgyxGbYgmMMVGGZsZnpRhRtvhAUOsQoixRC14sKHsl4a3dhZ8wY/l4a3dhZ8wY+qbHEaDdl4a3dhZ8wY/QWnhlhKQwIzXl4a3dhZ8wY== user@my.domain</span><b>&lt;/</b><span class="k-xe">publicKey</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">sshUrlContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-remoteStorageContentResource"></a><a name="type-T_remoteStorageContentResource"></a><span class="k-et">remoteStorageContentResource element</span> (T_remoteStorageContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the location of content ingestion is a path within a remote storage defined in Kaltura. Using this option, only a link to the content location is set from the entry, without actually uploading content to Kaltura.</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">remoteStorageContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">path_from_base_dir/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">storageProfile</span><b>&gt;</b><span class="k-xav">MY_STORAGE_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="k-xe">storageProfile</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">remoteStorageContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">remoteStorageContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">path_from_base_dir/thumb.jpg</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">storageProfile</span><b>&gt;</b><span class="k-xav">MY_STORAGE_PROFILE_SYSTEM_NAME</span><b>&lt;/</b><span class="k-xe">storageProfile</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">remoteStorageContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnails</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-remoteStorageContentResources"></a><a name="type-T_remoteStorageContentResources"></a><span class="k-et">remoteStorageContentResources element</span> (T_remoteStorageContentResources)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Sets the location of content ingestion within several remote storages defined in Kaltura. Using this option, only links to the content location are set from the entry, without actually uploading content to Kaltura.</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">remoteStorageContentResources</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">remoteStorageContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">path_from_base_dir/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
										</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">storageProfile</span><b>&gt;</b><span class="k-xav">MY_STORAGE_PROFILE_SYSTEM_NAME_1</span><b>&lt;/</b><span class="k-xe">storageProfile</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">remoteStorageContentResource</span><b>&gt;</b><br><span class="k-xav">
									</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">remoteStorageContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">path_from_base_dir/video.mp4</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
										</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">storageProfile</span><b>&gt;</b><span class="k-xav">MY_STORAGE_PROFILE_SYSTEM_NAME_2</span><b>&lt;/</b><span class="k-xe">storageProfile</span><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">remoteStorageContentResource</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">remoteStorageContentResources</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-entryContentResource"></a><a name="type-T_entryContentResource"></a><span class="k-et">entryContentResource element</span> (T_entryContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the source of content ingestion is the content of an existing Kaltura entry</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example: Adding flavor asset from an existing entry and associating it with a specific flavor params in a target entry</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">entryContentResource</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{origin entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
									</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">flavorParams</span><b>&gt;</b><span class="k-xav">BASIC_SMALL</span><b>&lt;/</b><span class="k-xe">flavorParams</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">entryContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-assetContentResource"></a><a name="type-T_assetContentResource"></a><span class="k-et">assetContentResource element</span> (T_assetContentResource)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies that the source of content ingestion is a specific asset of an existing Kaltura entry</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">assetContentResource</span> <span class="k-xa">assetId</span><b>=&quot;</b><span class="k-xav">{existing asset id}</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">assetContentResource</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-tags"></a><a name="type-T_tags"></a><span class="k-et">tags element</span> (T_tags)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Free text tags</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example: Entry tags</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-categories"></a><a name="type-T_categories"></a><span class="k-et">categories element</span> (T_categories)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry`s category assignment.</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example: Entry categories</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">add</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">categories</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">contentAssets</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">contentAssets</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-ad-cue-point"></a><a name="type-T_scene_adCuePointBulkUploadXml"></a><span class="k-et">scene-ad-cue-point element</span> (T_scene_adCuePointBulkUploadXml)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single advertisement cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-ad-cue-point</span> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneTitle</span><b>&gt;</b><span class="k-xav">my ad title</span><b>&lt;/</b><span class="k-xe">sceneTitle</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sourceUrl</span><b>&gt;</b><span class="k-xav">http://source.to.my/ad.xml</span><b>&lt;/</b><span class="k-xe">sourceUrl</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">adType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">adType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">protocolType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">protocolType</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-ad-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-annotation"></a><a name="type-T_scene_annotationBulkUploadXml"></a><span class="k-et">scene-annotation element</span> (T_scene_annotationBulkUploadXml)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single annotation cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example 1: Single annotation</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><span class="k-xav">00:00:10</span><b>&lt;/</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneText</span><b>&gt;</b><span class="k-xav">my annotation</span><b>&lt;/</b><span class="k-xe">sceneText</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><span class="element-example-title">Example 2: Multiple related annotations</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><span class="k-xav">00:00:10</span><b>&lt;/</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneText</span><b>&gt;</b><span class="k-xav">my annotation parent</span><b>&lt;/</b><span class="k-xe">sceneText</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
					</span><br><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag3</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag4</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><span class="k-xav">00:00:10</span><b>&lt;/</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneText</span><b>&gt;</b><span class="k-xav">my annotation child</span><b>&lt;/</b><span class="k-xe">sceneText</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">parent</span><b>&gt;</b><span class="k-xav">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&lt;/</b><span class="k-xe">parent</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-attachments"></a><a name="type-T_attachments"></a><span class="k-et">attachments element</span> (T_attachments)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All attachments elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">attachments</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">update</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">attachment</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">attachment</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">attachment</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">attachment</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">attachment</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">attachment</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">attachments</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-attachment"></a><a name="type-T_attachment"></a><span class="k-et">attachment element</span> (T_attachment)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">attachment</span> <span class="k-xa">format</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">attachmentAssetId</span><b>=&quot;</b><span class="k-xav">{asset id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">example</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://my.domain/path/file.txt</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">filename</span><b>&gt;</b><span class="k-xav">my_file_name.txt</span><b>&lt;/</b><span class="k-xe">filename</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">title</span><b>&gt;</b><span class="k-xav">my attachment asset title</span><b>&lt;/</b><span class="k-xe">title</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my attachment asset free text description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">attachment</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-subTitles"></a><a name="type-T_subTitles"></a><span class="k-et">subTitles element</span> (T_subTitles)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All subTitles elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">subTitles</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">update</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">subTitle</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">subTitle</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">subTitle</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">subTitle</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">subTitle</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">subTitle</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">subTitles</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-subTitle"></a><a name="type-T_subTitle"></a><span class="k-et">subTitle element</span> (T_subTitle)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single caption asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">subTitle</span> <span class="k-xa">isDefault</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b> <span class="k-xa">format</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b> <span class="k-xa">lang</span><b>=&quot;</b><span class="k-xav">Hebrew</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://my.domain/path/caption.srt</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">subTitle</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-code-cue-point"></a><a name="type-T_scene_codeCuePointBulkUploadXml"></a><span class="k-et">scene-code-cue-point element</span> (T_scene_codeCuePointBulkUploadXml)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A single code cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-code-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag1</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">tag2</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">code</span><b>&gt;</b><span class="k-xav">MY_CODE</span><b>&lt;/</b><span class="k-xe">code</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my code cue point description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-code-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-thumb-cue-point"></a><a name="type-T_scene_thumbCuePoint"></a><span class="k-et">scene-thumb-cue-point element</span> (T_scene_thumbCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single thumb cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-thumb-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">slide</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">urlContentResource</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">URL_TO_FILE</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">urlContentResource</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">slide</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-thumb-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-slide"></a><a name="type-T_slide"></a><span class="k-et">slide element</span> (T_slide)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
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
</tbody>
</table><br><hr><a name="element-distributions"></a><a name="type-T_distributions"></a><span class="k-et">distributions element</span> (T_distributions)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom metadata elemets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">distributions</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">distribution</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">distributionProfile</span><b>&gt;</b><span class="k-xav">MY_DISTRIBUTION_PROFILE</span><b>&lt;/</b><span class="k-xe">distributionProfile</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunrise</span><b>&gt;</b><span class="k-xav">2011-10-26T21:32:52</span><b>&lt;/</b><span class="k-xe">sunrise</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunset</span><b>&gt;</b><span class="k-xav">2011-12-26T21:32:52</span><b>&lt;/</b><span class="k-xe">sunset</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">distribution</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">distributions</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-distribution"></a><a name="type-T_distribution"></a><span class="k-et">distribution element</span> (T_distribution)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Details related to a content distribution submission</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">distribution</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">distributionProfile</span><b>&gt;</b><span class="k-xav">MY_DISTRIBUTION_PROFILE</span><b>&lt;/</b><span class="k-xe">distributionProfile</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunrise</span><b>&gt;</b><span class="k-xav">2011-10-26T21:32:52</span><b>&lt;/</b><span class="k-xe">sunrise</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunset</span><b>&gt;</b><span class="k-xav">2011-12-26T21:32:52</span><b>&lt;/</b><span class="k-xe">sunset</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">distribution</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scenes"></a><a name="type-T_scenes"></a><span class="k-et">scenes element</span> (T_scenes)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">A cue points wrapper element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scenes</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">update</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-ad-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-ad-cue-point</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-code-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-code-cue-point</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scenes</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene"></a><a name="type-T_scene"></a><span class="k-et">scene element</span> (abstract T_scene)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
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
</table><br><span class="element-extended-title">Extended elements</span><br><ol>
<li><a href="#element-scene-ad-cue-point">scene-ad-cue-point</a></li>
<li><a href="#element-scene-annotation">scene-annotation</a></li>
<li><a href="#element-scene-code-cue-point">scene-code-cue-point</a></li>
<li><a href="#element-scene-thumb-cue-point">scene-thumb-cue-point</a></li>
</ol><hr><a name="element-scene-customData"></a><a name="type-T_customData"></a><span class="k-et">scene-customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-ad-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneTitle</span><b>&gt;</b><span class="k-xav">my ad title</span><b>&lt;/</b><span class="k-xe">sceneTitle</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sourceUrl</span><b>&gt;</b><span class="k-xav">http://source.to.my/ad.xml</span><b>&lt;/</b><span class="k-xe">sourceUrl</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">adType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">adType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">protocolType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">protocolType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-customData</span> <span class="k-xa">metadataProfile</span><b>=&quot;</b><span class="k-xav">MY_AD_METADATA_PROFILE_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">adData</span><b>&gt;</b><span class="k-xav">my ad custom data</span><b>&lt;/</b><span class="k-xe">adData</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">scene-customData</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-ad-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-customDataItems"></a><a name="type-T_customDataItems"></a><span class="k-et">customDataItems element</span> (T_customDataItems)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All custom metadata elemets</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">customDataItems</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">update</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">customData</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">customData</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">customData</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">customData</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">customData</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">customData</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">customDataItems</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-customData"></a><a name="type-T_customData"></a><span class="k-et">customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">customData</span> <span class="k-xa">metadataId</span><b>=&quot;</b><span class="k-xav">{metadata id}</span><b>&quot;</b> <span class="k-xa">metadataProfile</span><b>=&quot;</b><span class="k-xav">MY_METADATA_PROFILE_SYSTEM_NAME}</span><b>&quot;</b> <span class="k-xa">metadataProfileId</span><b>=&quot;</b><span class="k-xav">{metadata profile id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">transformXslt</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xslt</span><b>&gt;</b><b>&lt;/</b><span class="k-xe">xslt</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xmlData</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">TextFieldName</span><b>&gt;</b><span class="k-xav">entry field value</span><b>&lt;/</b><span class="k-xe">TextFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><span class="k-xav">entry multiple text field value1</span><b>&lt;/</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><span class="k-xav">entry multiple text field value2</span><b>&lt;/</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">TextSelectionListFieldName</span><b>&gt;</b><span class="k-xav">entry selected text value</span><b>&lt;/</b><span class="k-xe">TextSelectionListFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">DateFieldName</span><b>&gt;</b><span class="k-xav">21741540</span><b>&lt;/</b><span class="k-xe">DateFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">EntryIDFieldName</span><b>&gt;</b><span class="k-xav">0_5b3t2c8z</span><b>&lt;/</b><span class="k-xe">EntryIDFieldName</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xmlData</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">customData</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-xmlData"></a><a name="type-T_xmlData"></a><span class="k-et">xmlData element</span> (T_xmlData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML data for custom metadata</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
						</span><b>&lt;</b><span class="k-xe">xmlData</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">TextFieldName</span><b>&gt;</b><span class="k-xav">entry field value</span><b>&lt;/</b><span class="k-xe">TextFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><span class="k-xav">entry multiple text field value1</span><b>&lt;/</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><span class="k-xav">entry multiple text field value2</span><b>&lt;/</b><span class="k-xe">MultipleTextFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">TextSelectionListFieldName</span><b>&gt;</b><span class="k-xav">entry selected text value</span><b>&lt;/</b><span class="k-xe">TextSelectionListFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">DateFieldName</span><b>&gt;</b><span class="k-xav">21741540</span><b>&lt;/</b><span class="k-xe">DateFieldName</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">EntryIDFieldName</span><b>&gt;</b><span class="k-xav">0_5b3t2c8z</span><b>&lt;/</b><span class="k-xe">EntryIDFieldName</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
						</span><b>&lt;/</b><span class="k-xe">xmlData</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-pluginReplacementOptions"></a><a name="type-T_metadataReplacementOptions"></a><span class="k-et">pluginReplacementOptions element</span> (T_metadataReplacementOptions)<br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">pluginReplacementOptions</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">pluginReplacementOptionsItem</span><b>&gt;</b><span class="k-xav">
						...
						</span><b>&lt;/</b><span class="k-xe">pluginReplacementOptionsItem</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">pluginReplacementOptionsItem</span><b>&gt;</b><span class="k-xav">
						...
						</span><b>&lt;/</b><span class="k-xe">pluginReplacementOptionsItem</span><b>&gt;</b><br><span class="k-xav">
						...
						...
					</span><b>&lt;/</b><span class="k-xe">pluginReplacementOptions</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-widevineAssets"></a><a name="type-T_widevineAssets"></a><span class="k-et">widevineAssets element</span> (T_widevineAssets)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">All widevine elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">widevineAssets</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">action</span><b>&gt;</b><span class="k-xav">update</span><b>&lt;/</b><span class="k-xe">action</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">widevineAsset</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">widevineAsset</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">widevineAsset</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">widevineAsset</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">widevineAsset</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">widevineAsset</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">widevineAssets</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-widevineAsset"></a><a name="type-T_widevineAsset"></a><span class="k-et">widevineAsset element</span> (T_widevineAsset)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Widevine asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">widevineAsset</span> <span class="k-xa">flavorAssetId</span><b>=&quot;</b><span class="k-xav">{asset id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">widevineAssetId</span><b>&gt;</b><span class="k-xav">123456</span><b>&lt;/</b><span class="k-xe">widevineAssetId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">flavorParamsId</span><b>&gt;</b><span class="k-xav">61</span><b>&lt;/</b><span class="k-xe">flavorParamsId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">widevineDistributionStartDate</span><b>&gt;</b><span class="k-xav">2011-05-05T00:00:00</span><b>&lt;/</b><span class="k-xe">widevineDistributionStartDate</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">widevineDistributionEndDate</span><b>&gt;</b><span class="k-xav">2014-05-19T00:00:00</span><b>&lt;/</b><span class="k-xe">widevineDistributionEndDate</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">widevineAsset</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div>
		
</div>

