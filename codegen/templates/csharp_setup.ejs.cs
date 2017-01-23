using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
namespace Kaltura {
  class CodeExample {
    static void Main(string[] args){
      KalturaConfiguration config = new KalturaConfiguration();
      config.ServiceUrl = "https://www.kaltura.com/";
      KalturaClient client = new KalturaClient(config);
<%- codegen.indent(code, 6) %>
    }
  }
}
