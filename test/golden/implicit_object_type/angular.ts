let searchParams = new KalturaESearchEntryParams();
searchParams.searchOperator = new KalturaESearchEntryOperator();
searchParams.searchOperator.operator = KalturaESearchOperatorType.andOp;
searchParams.searchOperator.searchItems = [];
searchParams.searchOperator.searchItems[0] = new KalturaESearchCaptionItem();
searchParams.searchOperator.searchItems[0].searchTerm = "asdf";
let pager = new KalturaPager();

this.kaltura.request(new ESearchSearchEntryAction({searchParams, pager}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })