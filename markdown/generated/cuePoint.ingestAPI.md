# Cue Point Ingest

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

			Download URL: <a href="http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/cuePoint.ingestAPI/name/cuePoint.ingestAPI.xsd;" target="_blank">http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/cuePoint.ingestAPI/name/cuePoint.ingestAPI.xsd</a><br>
Version: 1.0<br>
<br>
<div xmlns:php="http://php.net/xsl" class="code">
<b>&lt;</b><span class="xml-element">xs:schema</span> <span class="xml-attribute">version</span><b>=&quot;</b><span class="xml-attribute-value">1.0</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scenes</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene">scene</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b> <span class="xml-attribute">abstract</span><b>=&quot;</b><span class="xml-attribute-value">true</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">sceneStartTime</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:time</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
			</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">tags</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_tags</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
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
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">entryId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">required</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_tags</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">tag</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">
				</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
						</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:maxLength</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">30</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:maxLength</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scenes</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scenes</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">		
		
	</span><span class="xml-attribute-value">
		
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_adCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
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
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-ad-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_adCuePoint</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		
	</span><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_annotation</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
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
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-annotation</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_annotation</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		
	</span><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_codeCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
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
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-code-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_codeCuePoint</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		
	</span><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_thumbCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">title</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">description</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">subType</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">ref</span><b>=&quot;</b><span class="xml-attribute-value"><a href="#element-scene-extension">scene-extension</a></span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">unbounded</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-thumb-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_thumbCuePoint</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
	
		
		
	</span><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_customData</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:any</span> <span class="xml-attribute">namespace</span><b>=&quot;</b><span class="xml-attribute-value">##local</span><b>&quot;</b> <span class="xml-attribute">processContents</span><b>=&quot;</b><span class="xml-attribute-value">skip</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
				</span><span class="xml-attribute-value">		
			</span><b>&lt;/</b><span class="xml-element">xs:any</span><b>&gt;</b><br><span class="xml-attribute-value">			
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
		
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataProfile</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:attribute</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">metadataProfileId</span><b>&quot;</b> <span class="xml-attribute">use</span><b>=&quot;</b><span class="xml-attribute-value">optional</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:attribute</span><b>&gt;</b><br><span class="xml-attribute-value">
		
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-customData</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_customData</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene-extension</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
	</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
			

		</span><span class="xml-attribute-value">

		</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_questionCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">question</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">hint</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">explanation</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">optionalAnswers</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaOptionalAnswersArray</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">correctAnswerKeys</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">0</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">KalturaStringArray</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-question-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_questionCuePoint</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_answerCuePoint</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:extension</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">T_scene</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">answerKey</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">quizUserEntryId</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value"> </span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
					</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">parentId</span><b>&quot;</b> <span class="xml-attribute">minOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">maxOccurs</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
						</span><span class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:sequence</span><b>&gt;</b><br><span class="xml-attribute-value">
				</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:extension</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexContent</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:complexType</span><b>&gt;</b><br><span class="xml-attribute-value">

		</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:element</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">scene-answer-cue-point</span><b>&quot;</b> <span class="xml-attribute">type</span><b>=&quot;</b><span class="xml-attribute-value">T_scene_answerCuePoint</span><b>&quot;</b> <span class="xml-attribute">substitutionGroup</span><b>=&quot;</b><span class="xml-attribute-value">scene</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
			</span><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:element</span><b>&gt;</b><br><span class="xml-attribute-value">

		
	</span><span class="xml-attribute-value">
	
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaAdType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaDynamicEnum</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:string</span><b>&quot;</b><b>&gt;</b><span class="xml-attribute-value">
		</span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
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
			
	</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:simpleType</span> <span class="xml-attribute">name</span><b>=&quot;</b><span class="xml-attribute-value">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="xml-attribute-value">
		</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:restriction</span> <span class="xml-attribute">base</span><b>=&quot;</b><span class="xml-attribute-value">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="xml-attribute-value">
			</span><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
			</span><br><span class="indent"></span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">xs:enumeration</span> <span class="xml-attribute">value</span><b>=&quot;</b><span class="xml-attribute-value">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="xml-element">xs:enumeration</span><b>&gt;</b><br><span class="xml-attribute-value">
		</span><span class="indent"></span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:restriction</span><b>&gt;</b><br><span class="xml-attribute-value">
	</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">xs:simpleType</span><b>&gt;</b><br><span class="xml-attribute-value">
			
</span><b>&lt;/</b><span class="xml-element">xs:schema</span><b>&gt;</b><br>
</div><hr><a name="element-scenes"></a><a name="type-T_scenes"></a><span class="element-title">scenes element</span> (T_scenes)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue points wrapper</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scenes</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-ad-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-ad-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-code-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-code-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">scene-thumb-cue-point</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">...</span><b>&lt;/</b><span class="xml-element">scene-thumb-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scenes</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene"></a><a name="type-T_scene"></a><span class="element-title">scene element</span> (abstract T_scene)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of cue point to which actions (update/delete) can be applied</xs:documentation></span><br>
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of cue point to which actions (update/delete) can be applied</xs:documentation></span><br>
</td>
<td>No</td>
<td>string</td>
<td>
					 Maximum length: 120 characters<br>
</td>
</tr>
<tr>
<td>entryId</td>
<td>
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of entry to associate the cue point with</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>string</td>
<td>
					 Maximum length: 20 characters<br>
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
<td class="first" colspan="2">tags</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point searchable keywords</xs:documentation></span><br>
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
<li><a href="#element-scene-question-cue-point">scene-question-cue-point</a></li>
<li><a href="#element-scene-answer-cue-point">scene-answer-cue-point</a></li>
</ol><hr><a name="element-scene-ad-cue-point"></a><a name="type-T_scene_adCuePoint"></a><span class="element-title">scene-ad-cue-point element</span> (T_scene_adCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single ad cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">tags</td>
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-ad-cue-point</span> <span class="xml-attribute">sceneId</span><b>=&quot;</b><span class="xml-attribute-value">{scene id}</span><b>&quot;</b> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sample</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneTitle</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my ad title</span><b>&lt;/</b><span class="xml-element">sceneTitle</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sourceUrl</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">http://source.to.my/ad.xml</span><b>&lt;/</b><span class="xml-element">sourceUrl</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">adType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">adType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">protocolType</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">1</span><b>&lt;/</b><span class="xml-element">protocolType</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-ad-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-annotation"></a><a name="type-T_scene_annotation"></a><span class="element-title">scene-annotation element</span> (T_scene_annotation)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single annotation element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">tags</td>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">System name of the parent annotation</xs:documentation></span><br>
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of the parent annotation</xs:documentation></span><br>
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">Single annotation example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sample</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:10</span><b>&lt;/</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneText</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my annotation</span><b>&lt;/</b><span class="xml-element">sceneText</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><span class="element-example-title">Multiple related annotations example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b> <span class="xml-attribute">systemName</span><b>=&quot;</b><span class="xml-attribute-value">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sample</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:10</span><b>&lt;/</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneText</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my annotation parent</span><b>&lt;/</b><span class="xml-element">sceneText</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><br><b>&lt;</b><span class="xml-element">scene-annotation</span> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sample</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:10</span><b>&lt;/</b><span class="xml-element">sceneEndTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneText</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my annotation child</span><b>&lt;/</b><span class="xml-element">sceneText</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">parent</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&lt;/</b><span class="xml-element">parent</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-annotation</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-code-cue-point"></a><a name="type-T_scene_codeCuePoint"></a><span class="element-title">scene-code-cue-point element</span> (T_scene_codeCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single code cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">tags</td>
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-code-cue-point</span> <span class="xml-attribute">sceneId</span><b>=&quot;</b><span class="xml-attribute-value">{scene id}</span><b>&quot;</b> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">sample</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
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
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Cue point start time</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>time</td>
<td class="last"></td>
</tr>
<tr class="">
<td class="first" colspan="2">tags</td>
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;</b><span class="xml-element">scene-thumb-cue-point</span> <span class="xml-attribute">sceneId</span><b>=&quot;</b><span class="xml-attribute-value">{scene id}</span><b>&quot;</b> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span><b>&lt;/</b><span class="xml-element">scene-thumb-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
				</span>
</div><hr><a name="element-scene-customData"></a><a name="type-T_customData"></a><span class="element-title">scene-customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<td>No</td>
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
<td class="first" colspan="2">[Any element]</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata XML according to schema profile</xs:documentation></span><br>
</td>
<td>Yes</td>
<td>1</td>
<td>any type</td>
<td class="last"></td>
</tr></tbody>
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
</div><hr><a name="element-scene-question-cue-point"></a><a name="type-T_scene_questionCuePoint"></a><span class="element-title">scene-question-cue-point element</span> (T_scene_questionCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single question cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">tags</td>
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><b>&lt;</b><span class="xml-element">scene-question-cue-point</span> <span class="xml-attribute">sceneId</span><b>=&quot;</b><span class="xml-attribute-value">{scene id}</span><b>&quot;</b> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><b>&lt;/</b><span class="xml-element">scene-question-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span>
</div><hr><a name="element-scene-answer-cue-point"></a><a name="type-T_scene_answerCuePoint"></a><span class="element-title">scene-answer-cue-point element</span> (T_scene_answerCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single answer cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">tags</td>
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
</table><br xmlns:php="http://php.net/xsl"><span class="element-example-title">XML Example</span><br><div class="element-example">
<span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><b>&lt;</b><span class="xml-element">scene-answer-cue-point</span> <span class="xml-attribute">sceneId</span><b>=&quot;</b><span class="xml-attribute-value">{scene id}</span><b>&quot;</b> <span class="xml-attribute">entryId</span><b>=&quot;</b><span class="xml-attribute-value">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><b>&lt;</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">00:00:05.3</span><b>&lt;/</b><span class="xml-element">sceneStartTime</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><br><span class="indent"></span><b>&lt;</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
								</span><span class="indent"></span><span class="indent"></span><b>&lt;</b><span class="xml-element">tag</span><b>&gt;</b><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">my_tag</span><b>&lt;/</b><span class="xml-element">tag</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
							</span><span class="indent"></span><b>&lt;/</b><span class="xml-element">tags</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
						</span><b>&lt;/</b><span class="xml-element">scene-answer-cue-point</span><b>&gt;</b><br><span xmlns:php="http://php.net/xsl" class="xml-attribute-value">
					</span>
</div>
		
</div>

