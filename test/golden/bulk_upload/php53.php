<?php
  $fileData = "/path/to/file";
  $bulkUploadData = new BulkUploadJobData();
  $bulkUploadEntryData = new BulkUploadEntryData();

  try {
    $result = $client->getMediaService()->bulkUploadAdd($fileData, $bulkUploadData, $bulkUploadEntryData);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>