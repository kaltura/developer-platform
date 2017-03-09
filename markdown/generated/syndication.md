# Syndication Feed

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

			Download URL: <a href="http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/syndication/name/syndication.xsd;" target="_blank">http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/syndication/name/syndication.xsd</a><br>
Version: 2.0<br>
<br>
<div class="code">
<b>&lt;</b><span class="k-xe">xs:schema</span> <span class="k-xa">version</span><b>=&quot;</b><span class="k-xav">2.0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_rss</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-channel">channel</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-rss-extension">rss-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">version</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:decimal</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_channel</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">title</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">link</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">description</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-items">items</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-channel-extension">channel-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_items</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-item">item</a></span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_item</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">nillable</span><b>=&quot;</b><span class="k-xav">false</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">referenceID</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">createdAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">updatedAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">title</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">60</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">link</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">type</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaEntryType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">licenseType</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaLicenseType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">userId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">name</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">60</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">status</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaEntryStatus</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">description</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbnailUrl</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-category">category</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">partnerData</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">partnerSortData</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">accessControlId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">conversionProfileId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">startDate</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">endDate</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-media">media</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:choice</span> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-content">content</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-thumbnail">thumbnail</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:choice</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-item-extension">item-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-player">player</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_media</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">mediaType</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaMediaType</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">duration</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParamsIds</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">plays</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">views</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-media-extension">media-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_content</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-content-extension">content-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorAssetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">containerFormat</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">format</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">extension</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">createdAt</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">isSource</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:boolean</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">height</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">width</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">fileSize</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">videoBitrate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">videoCodec</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">audioBitrate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">audioCodec</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">frameRate</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:float</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParamsId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorParamsName</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_thumbnail</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-thumbnail-extension">thumbnail-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbAssetId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">format</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">extension</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">isDefault</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:boolean</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">height</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">width</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">fileSize</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">createdAt</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbParamsId</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_player</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-player-extension">player-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tag</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_category</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">name</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
					</span><span class="k-xav">
				</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">rss</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_rss</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">channel</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_channel</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">items</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_items</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">item</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_item</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">media</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_media</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">content</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_content</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbnail</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_thumbnail</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">player</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_player</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">category</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_category</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">rss-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">channel-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">media-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">mix-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">playlist-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">data-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">liveStream-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">content-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbnail-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">player-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_customData</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:any</span> <span class="k-xa">namespace</span><b>=&quot;</b><span class="k-xav">##local</span><b>&quot;</b> <span class="k-xa">processContents</span><b>=&quot;</b><span class="k-xav">skip</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:any</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataVersion</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataProfile</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataProfileId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataProfileName</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">metadataProfileVersion</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">customData</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_customData</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				
		
	</span><span class="k-xav">
		
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_adCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
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
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-ad-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_adCuePoint</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_annotation</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneEndTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneText</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">parent</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">parentId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-xav">
						</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">250</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-annotation</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_annotation</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			
		
	</span><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_attachment</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
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
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">url</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
						
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">attachment-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">attachment</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_attachment</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			
		
	</span><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_subTitle</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
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
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">href</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
						
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">subtitle-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">subTitle</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_subTitle</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_codeCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
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
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-code-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_codeCuePoint</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
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
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-thumb-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_thumbCuePoint</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_distribution</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">remoteId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sunrise</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sunset</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorAssetIds</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">flavorAssetId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbAssetIds</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">thumbAssetId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetIds</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">assetId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">errorDescription</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">createdAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">updatedAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">submittedAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">lastReport</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">dirtyStatus</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaEntryDistributionFlag</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">status</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaEntryDistributionStatus</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sunStatus</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaEntryDistributionSunStatus</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">plays</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">views</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">errorNumber</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">errorType</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaBatchJobErrorTypes</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-distribution-extension">distribution-extension</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryDistributionId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">provider</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProviderId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">feedId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProfileId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProfile</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distributionProfileName</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">optional</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distribution</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_distribution</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">item-extension</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">distribution-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		
		
	</span><span class="k-xav">
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scenes</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene">scene</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">	
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b> <span class="k-xa">abstract</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneStartTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">createdAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">updatedAt</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:dateTime</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">userId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-tags">tags</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
		
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
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

		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_questionCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">question</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">hint</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">explanation</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">optionalAnswers</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaOptionalAnswersArray</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">correctAnswerKeys</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">KalturaStringArray</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">

		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-question-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_questionCuePoint</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
			</span><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">

		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene_answerCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:extension</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">answerKey</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">quizUserEntryId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav"> </span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
					</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">parentId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
						</span><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:extension</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexContent</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">

		</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-answer-cue-point</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene_answerCuePoint</span><b>&quot;</b> <span class="k-xa">substitutionGroup</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
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
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaEntryStatus</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">-2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">-1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">6</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">7</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">virusScan.Infected</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">virusScan.ScanFailure</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
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
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaEntryDistributionFlag</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaEntryDistributionStatus</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
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
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaEntryDistributionSunStatus</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaBatchJobErrorTypes</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">3</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">4</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">5</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
</span><b>&lt;/</b><span class="k-xe">xs:schema</span><b>&gt;</b><br>
</div><hr><a name="element-rss"></a><a name="type-T_rss"></a><span class="k-et">rss element</span> (T_rss)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Wrapper element holding XML structure
			</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
					Indicates the XSD version to be used
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
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-channel">channel</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">holding item elements</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">rss</span> <span class="k-xa">version</span><b>=&quot;</b><span class="k-xav">2.0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">title</span><b>&gt;</b><span class="k-xav">My Feed Title</span><b>&lt;/</b><span class="k-xe">title</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">link</span><b>&gt;</b><b>&lt;/</b><span class="k-xe">link</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my feed description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">items</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">items</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">rss</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-channel"></a><a name="type-T_channel"></a><span class="k-et">channel element</span> (T_channel)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Wrapper element holding multiple item elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">title</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Title of the feed</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">link</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Feed link URL</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">description</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Feed description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-items">items</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Wrapper element holding multiple item elements</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">title</span><b>&gt;</b><span class="k-xav">My Feed Title</span><b>&lt;/</b><span class="k-xe">title</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">link</span><b>&gt;</b><b>&lt;/</b><span class="k-xe">link</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my feed description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">items</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">items</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">channel</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-items"></a><a name="type-T_items"></a><span class="k-et">items element</span> (T_items)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Wrapper element holding multiple item elements</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single entry element</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">items</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">items</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-item"></a><a name="type-T_item"></a><span class="k-et">item element</span> (T_item)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single entry wrapper element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">entryId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Auto generated 10 characters alphanumeric string</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 20 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">referenceID</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Partner external reference string</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry creation date as Unix timestamp (In seconds)</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry last update date as Unix timestamp (In seconds)</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">title</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry name</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 60 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">link</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry link URL</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">type</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry type</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaEntryType">KalturaEntryType</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">licenseType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry license type</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaLicenseType">KalturaLicenseType</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The ID of the user who is the owner of this entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">name</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry name</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 60 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">status</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry status</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaEntryStatus">KalturaEntryStatus</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">description</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry free text description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">thumbnailUrl</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry thumbnail URL</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry searchable keywords</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-category">category</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry assigned categories</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">partnerData</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Used to store various partner related data as a string</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">partnerSortData</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Used to store various partner related data as a numeric value</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">accessControlId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The id of the access control profile that assigned to this entry</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">conversionProfileId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The ingestion profile that used to ingest this entry</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">startDate</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry scheduling start date</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">endDate</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry scheduling end date.<br>If not specified the entry will be available forever</xs:documentation></span><br>
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
<tr class="choice choice-start choice-end">
<td class="first"><a href="#element-media">media</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Media related information, such as media type</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice-head ">
<td class="first" colspan="2">Choice</td>
<td></td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last">
						One of the following choices
					</td>
</tr>
<tr class="choice choice-start">
<td class="first"><a href="#element-content">content</a></td>
<td rowspan="1">Option 1</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset information</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="choice choice-end">
<td class="first"><a href="#element-thumbnail">thumbnail</a></td>
<td rowspan="1">Option 2</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Thumbnail asset information</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td colspan="2" class="first extensions-title">Extensions:</td>
<td colspan="5" class="last extensions-title"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-customData">customData</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata XML</xs:documentation></span><br>
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
<td class="first" colspan="2"><a href="#element-subTitle">subTitle</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Caption asset element</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-distribution">distribution</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution element</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extension ">
<td class="first" colspan="2"><a href="#element-scenes">scenes</a></td>
<td>
<span class="child-extension-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue points wrapper</xs:documentation></span><br>
</td>
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-player">player</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Embeded player</xs:documentation></span><br>
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
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">entryId</span><b>&gt;</b><span class="k-xav">{entry id}</span><b>&lt;/</b><span class="k-xe">entryId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">createdAt</span><b>&gt;</b><span class="k-xav">1311878948</span><b>&lt;/</b><span class="k-xe">createdAt</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">updatedAt</span><b>&gt;</b><span class="k-xav">1311879522</span><b>&lt;/</b><span class="k-xe">updatedAt</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">title</span><b>&gt;</b><span class="k-xav">my entry name</span><b>&lt;/</b><span class="k-xe">title</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">link</span><b>&gt;</b><span class="k-xav">http://my.feed.url?entry_id={entry id}</span><b>&lt;/</b><span class="k-xe">link</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">licenseType</span><b>&gt;</b><span class="k-xav">-1</span><b>&lt;/</b><span class="k-xe">licenseType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">userId</span><b>&gt;</b><span class="k-xav">my.example.user</span><b>&lt;/</b><span class="k-xe">userId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">name</span><b>&gt;</b><span class="k-xav">my entry name</span><b>&lt;/</b><span class="k-xe">name</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">status</span><b>&gt;</b><span class="k-xav">2</span><b>&lt;/</b><span class="k-xe">status</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my entry free text description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnailUrl</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/thumbnail/path/to/file.jpg</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">thumbnailUrl</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">example</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">example1</span><b>&quot;</b><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example1</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">category</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">example2</span><b>&quot;</b><b>&gt;</b><span class="k-xav">examples
					&amp;gt;
				example2</span><b>&lt;/</b><span class="k-xe">category</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">partnerData</span><b>&gt;</b><span class="k-xav">my advanced data</span><b>&lt;/</b><span class="k-xe">partnerData</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">accessControlId</span><b>&gt;</b><span class="k-xav">{access control id}</span><b>&lt;/</b><span class="k-xe">accessControlId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">conversionProfileId</span><b>&gt;</b><span class="k-xav">{conversion profile id}</span><b>&lt;/</b><span class="k-xe">conversionProfileId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">duration</span><b>&gt;</b><span class="k-xav">34951</span><b>&lt;/</b><span class="k-xe">duration</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">flavorParamsIds</span><b>&gt;</b><span class="k-xav">0,3</span><b>&lt;/</b><span class="k-xe">flavorParamsIds</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/thumbnail/path/to/thumbnail1.jpg</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/thumbnail/path/to/thumbnail2.jpg</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/flavor/path/to/flavor1.flv</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/flavor/path/to/flavor2.flv</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-media"></a><a name="type-T_media"></a><span class="k-et">media element</span> (T_media)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Media related information, such as media type</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">mediaType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry media type</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaMediaType">KalturaMediaType</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">duration</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry media (video/audio) duration</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">flavorParamsIds</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Comma seperated ids of flavor params that have ready flavor asset assign to the entry</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">plays</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry plays count in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">views</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry views count in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">flavorParamsId</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-content"></a><a name="type-T_content"></a><span class="k-et">content element</span> (T_content)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Download URL</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>flavorAssetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of the flavor asset</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>containerFormat</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Format of the asset file</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Configured format of the flavor</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>extension</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset file extension</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>createdAt</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>isSource</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Is the source flavor asset</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor height</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor width</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>fileSize</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor file size</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>videoBitrate</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset video bitrate</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>videoCodec</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset video codec</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>audioBitrate</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset audio bitrate</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>audioCodec</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset audio codec</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>frameRate</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Flavor asset frame rate</xs:documentation></span><br>
</td>
<td>No</td>
<td>float</td>
<td></td>
</tr>
<tr>
<td>flavorParamsId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of accosiated flavor params</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>flavorParamsName</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of accosiated flavor params</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>assetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
					The asset id to be updated with this resource
					userd only for update
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
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies specific tags you want to set for the flavor asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">content</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/path/my_flavor_asset.flv</span><b>&quot;</b> <span class="k-xa">isSource</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b> <span class="k-xa">containerFormat</span><b>=&quot;</b><span class="k-xav">flash video</span><b>&quot;</b> <span class="k-xa">extension</span><b>=&quot;</b><span class="k-xav">flv</span><b>&quot;</b> <span class="k-xa">assetId</span><b>=&quot;</b><span class="k-xav">{flavor asset id}</span><b>&quot;</b> <span class="k-xa">flavorParamsId</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">flavorParamsName</span><b>=&quot;</b><span class="k-xav">Source</span><b>&quot;</b> <span class="k-xa">format</span><b>=&quot;</b><span class="k-xav"></span><b>&quot;</b> <span class="k-xa">videoBitrate</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">videoCodec</span><b>=&quot;</b><span class="k-xav"></span><b>&quot;</b> <span class="k-xa">audioBitrate</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">audioCodec</span><b>=&quot;</b><span class="k-xav"></span><b>&quot;</b> <span class="k-xa">frameRate</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">height</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">width</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">example</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">content</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-thumbnail"></a><a name="type-T_thumbnail"></a><span class="k-et">thumbnail element</span> (T_thumbnail)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Thumbnail asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Download URL</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>thumbAssetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Thumbnail asset id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Format of the thumbnail asset file</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>extension</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Extension of the thumbnail asset file</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>isDefault</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Is the entry default thumbnail</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Thumbnail height</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Thumbnail width</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>fileSize</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Thumbnail file size</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>createdAt</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>thumbParamsId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of thumbnail params that associated with the thumbnail</xs:documentation></span><br>
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
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry searchable keywords</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbnail</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/path/my_thumbnail_asset.flv</span><b>&quot;</b> <span class="k-xa">thumbAssetId</span><b>=&quot;</b><span class="k-xav">{thumb asset id}</span><b>&quot;</b> <span class="k-xa">isDefault</span><b>=&quot;</b><span class="k-xav">false</span><b>&quot;</b> <span class="k-xa">format</span><b>=&quot;</b><span class="k-xav"></span><b>&quot;</b> <span class="k-xa">height</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b> <span class="k-xa">width</span><b>=&quot;</b><span class="k-xav">120</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">example</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
								</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbnail</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-player"></a><a name="type-T_player"></a><span class="k-et">player element</span> (T_player)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry player element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">URL of the player</xs:documentation></span><br>
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
<tbody></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">item</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">type</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">type</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">mediaType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">mediaType</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">media</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">player</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/path/my_player_widget.swf</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">player</span><b>&gt;</b><br><span class="k-xav">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Free text keyword</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td>string</td>
<td class="last"></td>
</tr></tbody>
</table><br><hr><a name="element-category"></a><a name="type-T_category"></a><span class="k-et">category element</span> (T_category)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Category assignments for entries</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
<thead><tr>
<th>Attribute Name</th>
<th>Description</th>
<th>Required</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr>
<td>name</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Category name</xs:documentation></span><br>
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
<tr class="extends-title"><td colspan="7">Extended from <a href="#type-xs:string">xs:string</a>
</td></tr>
<tr class="extends-title"><td colspan="7"></td></tr>
</tbody>
</table><br><hr><a name="element-customData"></a><a name="type-T_customData"></a><span class="k-et">customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata XML</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Id of the custom metadata object</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataVersion</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Version of the custom metadata object</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataProfile</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile system name</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>metadataProfileId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataProfileName</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile name</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>metadataProfileVersion</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile version</xs:documentation></span><br>
</td>
<td>Yes</td>
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
<tbody><tr class="">
<td class="first" colspan="2">[Any element]</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata XML according to schema profile</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>any type</td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">customData</span> <span class="k-xa">metadataId</span><b>=&quot;</b><span class="k-xav">{metadata id}</span><b>&quot;</b> <span class="k-xa">metadataVersion</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">metadataProfile</span><b>=&quot;</b><span class="k-xav">MY_METADATA_PROFILE_SYSTEM_NAME}</span><b>&quot;</b> <span class="k-xa">metadataProfileId</span><b>=&quot;</b><span class="k-xav">{metadata profile id}</span><b>&quot;</b> <span class="k-xa">metadataProfileName</span><b>=&quot;</b><span class="k-xav">my metadata profile</span><b>&quot;</b> <span class="k-xa">metadataProfileVersion</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">Text1</span><b>&gt;</b><span class="k-xav">text test</span><b>&lt;/</b><span class="k-xe">Text1</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">TextMulti</span><b>&gt;</b><span class="k-xav">test one</span><b>&lt;/</b><span class="k-xe">TextMulti</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">TextMulti</span><b>&gt;</b><span class="k-xav">test two</span><b>&lt;/</b><span class="k-xe">TextMulti</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">List1</span><b>&gt;</b><span class="k-xav">bbb</span><b>&lt;/</b><span class="k-xe">List1</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">Entry</span><b>&gt;</b><span class="k-xav">0_5b3t2c8z</span><b>&lt;/</b><span class="k-xe">Entry</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">metadata</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">customData</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-ad-cue-point"></a><a name="type-T_scene_adCuePoint"></a><span class="k-et">scene-ad-cue-point element</span> (T_scene_adCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single ad cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point end time</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sceneTitle</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Textual title</xs:documentation></span><br>
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
					</span><b>&lt;</b><span class="k-xe">scene-ad-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">sample</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneTitle</span><b>&gt;</b><span class="k-xav">my ad title</span><b>&lt;/</b><span class="k-xe">sceneTitle</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sourceUrl</span><b>&gt;</b><span class="k-xav">http://source.to.my/ad.xml</span><b>&lt;/</b><span class="k-xe">sourceUrl</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">adType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">adType</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">protocolType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">protocolType</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-ad-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-annotation"></a><a name="type-T_scene_annotation"></a><span class="k-et">scene-annotation element</span> (T_scene_annotation)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single annotation element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point end time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sceneText</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Free text description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">parent</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of the parent annotation</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last">
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr class="">
<td class="first" colspan="2">parentId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of the parent annotation</xs:documentation></span><br>
</td>
<td>No</td>
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">sample</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><span class="k-xav">00:00:10</span><b>&lt;/</b><span class="k-xe">sceneEndTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneText</span><b>&gt;</b><span class="k-xav">my annotation</span><b>&lt;/</b><span class="k-xe">sceneText</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">The asset unique id</xs:documentation></span><br>
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
<tr>
<td>url</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Attachment asset file download URL</xs:documentation></span><br>
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
<td class="first" colspan="2">tags</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies specific tags you want to set for the flavor asset</xs:documentation></span><br>
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
					</span><b>&lt;</b><span class="k-xe">attachment</span> <span class="k-xa">url</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/path/to/attachment/asset/file.txt</span><b>&quot;</b> <span class="k-xa">attachmentAssetId</span><b>=&quot;</b><span class="k-xav">{attachment asset id}</span><b>&quot;</b> <span class="k-xa">format</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">example</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">filename</span><b>&gt;</b><span class="k-xav">my_file_name.txt</span><b>&lt;/</b><span class="k-xe">filename</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">title</span><b>&gt;</b><span class="k-xav">my attachment asset title</span><b>&lt;/</b><span class="k-xe">title</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">description</span><b>&gt;</b><span class="k-xav">my attachment asset free text description</span><b>&lt;/</b><span class="k-xe">description</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">attachment</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-subTitle"></a><a name="type-T_subTitle"></a><span class="k-et">subTitle element</span> (T_subTitle)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Caption asset element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of caption params that associated with the caption asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>captionParams</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of caption params that associated with the caption asset</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>captionAssetId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Caption asset unique id</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>isDefault</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates if the caption asset is the entry default caption asset</xs:documentation></span><br>
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
<tr>
<td>href</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Caption asset file download URL</xs:documentation></span><br>
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
<tbody><tr class="">
<td class="first" colspan="2">tags</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Specifies specific tags you want to set for the flavor asset</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">subTitle</span> <span class="k-xa">href</span><b>=&quot;</b><span class="k-xav">http://kaltura.domain/path/caption_file.srt</span><b>&quot;</b> <span class="k-xa">captionAssetId</span><b>=&quot;</b><span class="k-xav">{caption_asset_id}</span><b>&quot;</b> <span class="k-xa">isDefault</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b> <span class="k-xa">format</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b> <span class="k-xa">lang</span><b>=&quot;</b><span class="k-xav">Hebrew</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">example</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">subTitle</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-code-cue-point"></a><a name="type-T_scene_codeCuePoint"></a><span class="k-et">scene-code-cue-point element</span> (T_scene_codeCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single code cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point end time</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Free text description</xs:documentation></span><br>
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
					</span><b>&lt;</b><span class="k-xe">scene-code-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">sample</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates the thumb cue point sub type 1 = Slide 2 = Chapter</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaThumbCuePointSubType">KalturaThumbCuePointSubType</a></td>
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
					</span><b>&lt;/</b><span class="k-xe">scene-thumb-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-distribution"></a><a name="type-T_distribution"></a><span class="k-et">distribution element</span> (T_distribution)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution element</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution unique id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>provider</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution provider</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>distributionProviderId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution provider id<br>relevant to generic providers</xs:documentation></span><br>
</td>
<td>No</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>feedId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution feed id<br>relevant to syndicated providers</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>distributionProfileId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution profile id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>distributionProfile</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution profile system name</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>distributionProfileName</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution profile name</xs:documentation></span><br>
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
<td class="first" colspan="2">remoteId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Unique id in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sunrise</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Time that the entry will become available in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sunset</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Time that the entry will become unavailable in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">flavorAssetIds</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Ids of flavor assets to be submitted to the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">thumbAssetIds</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Ids of thumbnail assets to be submitted to the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">assetIds</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Ids of assets to be submitted to the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">errorDescription</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Submission error description</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">submittedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution submission date</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">lastReport</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution last report date</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">dirtyStatus</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Indicates that there are future action to be submitted</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaEntryDistributionFlag">KalturaEntryDistributionFlag</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">status</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution status</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaEntryDistributionStatus">KalturaEntryDistributionStatus</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">sunStatus</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry distribution availability status</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaEntryDistributionSunStatus">KalturaEntryDistributionSunStatus</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">plays</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry plays count in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">views</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Entry views count in the remote site</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">errorNumber</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Submission error number</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>int</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">errorType</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Submission error type</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaBatchJobErrorTypes">KalturaBatchJobErrorTypes</a></td>
<td class="last"></td>
</tr>
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">distribution</span> <span class="k-xa">entryDistributionId</span><b>=&quot;</b><span class="k-xav">{entry distribution id}</span><b>&quot;</b> <span class="k-xa">distributionProfileId</span><b>=&quot;</b><span class="k-xav">{distribution profile id}</span><b>&quot;</b> <span class="k-xa">distributionProfileName</span><b>=&quot;</b><span class="k-xav">My Profile</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">remoteId</span><b>&gt;</b><span class="k-xav">{remote site id}</span><b>&lt;/</b><span class="k-xe">remoteId</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunrise</span><b>&gt;</b><span class="k-xav">1305636600</span><b>&lt;/</b><span class="k-xe">sunrise</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunset</span><b>&gt;</b><span class="k-xav">1305640200</span><b>&lt;/</b><span class="k-xe">sunset</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">flavorAssetIds</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">flavorAssetId</span><b>&gt;</b><span class="k-xav">0_bp1qzu1d</span><b>&lt;/</b><span class="k-xe">flavorAssetId</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">flavorAssetId</span><b>&gt;</b><span class="k-xav">0_bp1qzfsd</span><b>&lt;/</b><span class="k-xe">flavorAssetId</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">flavorAssetIds</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbAssetIds</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbAssetId</span><b>&gt;</b><span class="k-xav">0_di94zu1d</span><b>&lt;/</b><span class="k-xe">thumbAssetId</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">thumbAssetId</span><b>&gt;</b><span class="k-xav">0_di940sde</span><b>&lt;/</b><span class="k-xe">thumbAssetId</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">thumbAssetIds</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">errorDescription</span><b>&gt;</b><span class="k-xav">Error: No metadata objects found</span><b>&lt;/</b><span class="k-xe">errorDescription</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">createdAt</span><b>&gt;</b><span class="k-xav">2011-05-17T07:46:20</span><b>&lt;/</b><span class="k-xe">createdAt</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">updatedAt</span><b>&gt;</b><span class="k-xav">2011-06-09T09:23:46</span><b>&lt;/</b><span class="k-xe">updatedAt</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">submittedAt</span><b>&gt;</b><span class="k-xav">2011-05-17T08:03:00</span><b>&lt;/</b><span class="k-xe">submittedAt</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">dirtyStatus</span><b>&gt;</b><span class="k-xav">3</span><b>&lt;/</b><span class="k-xe">dirtyStatus</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">status</span><b>&gt;</b><span class="k-xav">8</span><b>&lt;/</b><span class="k-xe">status</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">sunStatus</span><b>&gt;</b><span class="k-xav">3</span><b>&lt;/</b><span class="k-xe">sunStatus</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">errorType</span><b>&gt;</b><span class="k-xav">1</span><b>&lt;/</b><span class="k-xe">errorType</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">distribution</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scenes"></a><a name="type-T_scenes"></a><span class="k-et">scenes element</span> (T_scenes)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue points wrapper</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
<thead><tr>
<th colspan="2">Element Name</th>
<th>Description</th>
<th>Required</th>
<th>Maximum Appearances</th>
<th>Type</th>
<th>Restrictions</th>
</tr></thead>
<tbody><tr class="">
<td class="first" colspan="2"><a href="#element-scene">scene</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point element</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scenes</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-ad-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-ad-cue-point</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-code-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-code-cue-point</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-thumb-cue-point</span> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-thumb-cue-point</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scenes</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene"></a><a name="type-T_scene"></a><span class="k-et">scene element</span> (abstract T_scene)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
				Base cue point element<br>
				Is abstract and cannot be used<br>
				Use the extended elements only
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of cue point to apply update/delete action on</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td>
					 Maximum length: 250 characters<br>
</td>
</tr>
<tr>
<td>systemName</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of cue point to apply update/delete action on</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
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
<li><a href="#element-scene-question-cue-point">scene-question-cue-point</a></li>
<li><a href="#element-scene-answer-cue-point">scene-answer-cue-point</a></li>
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Id of the custom metadata object</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataVersion</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Version of the custom metadata object</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataProfile</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile system name</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>metadataProfileId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile id</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>metadataProfileName</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile name</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>metadataProfileVersion</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata schema profile version</xs:documentation></span><br>
</td>
<td>Yes</td>
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
<tbody><tr class="">
<td class="first" colspan="2">[Any element]</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata XML according to schema profile</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>any type</td>
<td class="last"></td>
</tr></tbody>
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
</div><hr><a name="element-scene-question-cue-point"></a><a name="type-T_scene_questionCuePoint"></a><span class="k-et">scene-question-cue-point element</span> (T_scene_questionCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single question cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">question</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">hint</td>
<td></td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">explanation</td>
<td></td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">optionalAnswers</td>
<td></td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaOptionalAnswersArray">KalturaOptionalAnswersArray</a></td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">correctAnswerKeys</td>
<td></td>
<td>No</td>
<td>1</td>
<td><a href="/api_v3/testmeDoc/index.php?object=KalturaStringArray">KalturaStringArray</a></td>
<td class="last"></td>
</tr>
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
						</span><b>&lt;</b><span class="k-xe">scene-question-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><b>&lt;/</b><span class="k-xe">scene-question-cue-point</span><b>&gt;</b><br><span class="k-xav">
					</span>
</div><hr><a name="element-scene-answer-cue-point"></a><a name="type-T_scene_answerCuePoint"></a><span class="k-et">scene-answer-cue-point element</span> (T_scene_answerCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single answer cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">createdAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point creation date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">updatedAt</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point last update date</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>dateTime</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point owner user id</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2"><a href="#element-tags">tags</a></td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td></td>
<td class="last"></td>
</tr>
<tr class="extends-title"><td colspan="7"></td></tr>
<tr class="">
<td class="first" colspan="2">answerKey</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">quizUserEntryId</td>
<td></td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">parentId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of the parent questionCuePoint</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>string</td>
<td class="last"></td>
</tr>
</tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
						</span><b>&lt;</b><span class="k-xe">scene-answer-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
							</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
								</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
						</span><b>&lt;/</b><span class="k-xe">scene-answer-cue-point</span><b>&gt;</b><br><span class="k-xav">
					</span>
</div>
		
</div>

