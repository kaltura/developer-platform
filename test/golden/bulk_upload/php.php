<?php
  $fileData = "/path/to/file";
  $bulkUploadData = new KalturaBulkUploadJobData();
  $bulkUploadEntryData = new KalturaBulkUploadEntryData();

  try {
    $result = $client->media->bulkUploadAdd($fileData, $bulkUploadData, $bulkUploadEntryData);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>