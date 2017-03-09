# Cue Point Serve

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

			Download URL: <a href="http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/cuePoint.serveAPI/name/cuePoint.serveAPI.xsd;" target="_blank">http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/cuePoint.serveAPI/name/cuePoint.serveAPI.xsd</a><br>
Version: 1.0<br>
<br>
<div class="code">
<b>&lt;</b><span class="k-xe">xs:schema</span> <span class="k-xa">version</span><b>=&quot;</b><span class="k-xav">1.0</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scenes</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">ref</span><b>=&quot;</b><span class="k-xav"><a href="#element-scene">scene</a></span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b> <span class="k-xa">abstract</span><b>=&quot;</b><span class="k-xav">true</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">sceneStartTime</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:time</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">userId</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
				</span><span class="k-xav">
			</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tags</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">0</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
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
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:attribute</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">entryId</span><b>&quot;</b> <span class="k-xa">use</span><b>=&quot;</b><span class="k-xav">required</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">20</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:attribute</span><b>&gt;</b><br><span class="k-xav">
		
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:complexType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">T_tags</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">tag</span><b>&quot;</b> <span class="k-xa">minOccurs</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">maxOccurs</span><b>=&quot;</b><span class="k-xav">unbounded</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-xav">
				</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:maxLength</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">30</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:maxLength</span><b>&gt;</b><br><span class="k-xav">
					</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
				</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:sequence</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:complexType</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scenes</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scenes</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene</span><b>&quot;</b> <span class="k-xa">type</span><b>=&quot;</b><span class="k-xav">T_scene</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><span class="k-xav">
	</span><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:element</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">scene-extension</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:element</span><b>&gt;</b><br><span class="k-xav">		
		
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
	
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaAdType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaDynamicEnum</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:string</span><b>&quot;</b><b>&gt;</b><span class="k-xav">
		</span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
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
			
	</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:simpleType</span> <span class="k-xa">name</span><b>=&quot;</b><span class="k-xav">KalturaThumbCuePointSubType</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-xav">
		</span><br><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:restriction</span> <span class="k-xa">base</span><b>=&quot;</b><span class="k-xav">xs:int</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
			</span><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
			</span><br><span class="k-i"></span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">xs:enumeration</span> <span class="k-xa">value</span><b>=&quot;</b><span class="k-xav">2</span><b>&quot;</b><b>&gt;</b><b>&lt;/</b><span class="k-xe">xs:enumeration</span><b>&gt;</b><br><span class="k-xav">
		</span><span class="k-i"></span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:restriction</span><b>&gt;</b><br><span class="k-xav">
	</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">xs:simpleType</span><b>&gt;</b><br><span class="k-xav">
			
</span><b>&lt;/</b><span class="k-xe">xs:schema</span><b>&gt;</b><br>
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
<td>No</td>
<td>Unbounded</td>
<td></td>
<td class="last"></td>
</tr></tbody>
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scenes</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-ad-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_AD_CUE_POINT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-ad-cue-point</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b> <span class="k-xa">systemName</span><b>=&quot;</b><span class="k-xav">MY_ANNOTATION_PARENT_SYSTEM_NAME</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-annotation</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-annotation</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-code-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><span class="k-xav">...</span><b>&lt;/</b><span class="k-xe">scene-code-cue-point</span><b>&gt;</b><br><span class="k-xav">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Unique auto generated id of the cue point</xs:documentation></span><br>
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Unique (per entry) user identifier of the cue point</xs:documentation></span><br>
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">ID of entry that is associated with cue point</xs:documentation></span><br>
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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
</table><br><span class="element-extended-title">Extended elements</span><br><ol>
<li><a href="#element-scene-ad-cue-point">scene-ad-cue-point</a></li>
<li><a href="#element-scene-annotation">scene-annotation</a></li>
<li><a href="#element-scene-code-cue-point">scene-code-cue-point</a></li>
<li><a href="#element-scene-thumb-cue-point">scene-thumb-cue-point</a></li>
<li><a href="#element-scene-question-cue-point">scene-question-cue-point</a></li>
<li><a href="#element-scene-answer-cue-point">scene-answer-cue-point</a></li>
</ol><hr><a name="element-scene-ad-cue-point"></a><a name="type-T_scene_adCuePoint"></a><span class="k-et">scene-ad-cue-point element</span> (T_scene_adCuePoint)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Single ad cue point element</xs:documentation></span><br><br><span class="child-elements">Sub-Elements</span><br><table class="child-elements-table" cellspacing="0">
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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
</table><br><span class="element-example-title">XML Example</span><br><div class="k-ee">
<span class="k-xav">
					</span><b>&lt;</b><span class="k-xe">scene-thumb-cue-point</span> <span class="k-xa">sceneId</span><b>=&quot;</b><span class="k-xav">{scene id}</span><b>&quot;</b> <span class="k-xa">entryId</span><b>=&quot;</b><span class="k-xav">{entry id}</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><span class="k-xav">00:00:05.3</span><b>&lt;/</b><span class="k-xe">sceneStartTime</span><b>&gt;</b><br><span class="k-xav">
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
							</span><span class="k-i"></span><span class="k-i"></span><b>&lt;</b><span class="k-xe">tag</span><b>&gt;</b><span class="k-xav">my_tag</span><b>&lt;/</b><span class="k-xe">tag</span><b>&gt;</b><br><span class="k-xav">
						</span><span class="k-i"></span><b>&lt;/</b><span class="k-xe">tags</span><b>&gt;</b><br><span class="k-xav">
					</span><b>&lt;/</b><span class="k-xe">scene-thumb-cue-point</span><b>&gt;</b><br><span class="k-xav">
				</span>
</div><hr><a name="element-scene-customData"></a><a name="type-T_customData"></a><span class="k-et">scene-customData element</span> (T_customData)<br><span class="element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">XML for custom metadata</xs:documentation></span><br><br><span class="child-attributes">Attributes</span><br><table class="child-attributes-table" cellspacing="0">
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
<span class="child-attribute-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">Custom metadata version</xs:documentation></span><br>
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
						</span><br><span class="k-i"></span><b>&lt;</b><span class="k-xe">scene-customData</span> <span class="k-xa">metadataId</span><b>=&quot;</b><span class="k-xav">{metadata id}</span><b>&quot;</b> <span class="k-xa">metadataVersion</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b> <span class="k-xa">metadataProfile</span><b>=&quot;</b><span class="k-xav">MY_METADATA_PROFILE_SYSTEM_NAME}</span><b>&quot;</b> <span class="k-xa">metadataProfileId</span><b>=&quot;</b><span class="k-xav">{metadata profile id}</span><b>&quot;</b> <span class="k-xa">metadataProfileName</span><b>=&quot;</b><span class="k-xav">my metadata profile</span><b>&quot;</b> <span class="k-xa">metadataProfileVersion</span><b>=&quot;</b><span class="k-xav">1</span><b>&quot;</b><b>&gt;</b><br><span class="k-xav">
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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
<td class="first" colspan="2">userId</td>
<td>
<span class="child-element-description"><xs:documentation xmlns:xs="http://www.w3.org/2001/XMLSchema">User ID of cue point&apos;s owner</xs:documentation></span><br>
</td>
<td>No</td>
<td>1</td>
<td>string</td>
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

