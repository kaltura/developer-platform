<?php
  $entryId = "";
  $conversionProfileId = 0;
  $dynamicConversionAttributes = [];
  $dynamicConversionAttributes[0] = new KalturaConversionAttribute();
  $dynamicConversionAttributes[0]->flavorParamsId = 3;

  try {
    $result = $client->media->convert($entryId, $conversionProfileId, $dynamicConversionAttributes);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>